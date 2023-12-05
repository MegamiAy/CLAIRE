import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";
import { Button } from "react-native-paper";

export default function Products({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "Post");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = [];

      productsSnapshot.forEach(async (doc) => {
        const data = doc.data();

        // Obtenha os URLs das imagens usando os campos img1, img2, img3, img4
        const imgUrls = await Promise.all(
          ["img1"].map(async (imgField) => {
            const imgUrl = data[imgField];
            console.log(`URL da imagem (${imgField}):`, imgUrl);
            if (imgUrl) {
              // Você pode adicionar lógica adicional para garantir que a URL da imagem seja válida
              return imgUrl;
            }
            return null;
          })
        );

        productsList.push({
          id: doc.id,
          title: data.title,
          content: data.content,
          price: data.price,
          size: data.size,
          imgUrls: imgUrls.filter((url) => url !== null),
        });
      });

      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const handleProductPress = (productId) => {
    // Navegue para a página de detalhes do produto, passando as informações do produto
    navigation.navigate("ProdDetails", { productId });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.id)} style={ styles.BoxP }>
      <View style={[styles.SubBoxP, styles.shadowProp]}>
        {item.imgUrls.map((imgUrl) => (
          <Image
            key={imgUrl}
            source={{ uri: imgUrl }}
            style={{ width: "100%", height: 250 }}
          />
        ))}
        <Text style={styles.TitleP}>{item.title}</Text>
        <Text>Preço: {item.price}</Text>
        <Button onPress={"#"} style={styles.ButtonP} mode="contained">
          Adicionar ao carrinho
        </Button>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.FullBodyCP}>
      <ScrollView>
        <View>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderProductItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
