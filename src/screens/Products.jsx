import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

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
          ["img1", "img2", "img3", "img4"].map(async (imgField) => {
            const imgUrl = data[imgField];
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
          imgUrls: imgUrls.filter((url) => url !== null),
        });
      });

      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const handleProductPress = (product) => {
    // Navegue para a página de detalhes do produto, passando as informações do produto
    navigation.navigate("ProductDetails", { product });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <View>
        <Text>{item.title}</Text>
        {item.imgUrls.map((imgUrl) => (
          <Image
            key={imgUrl}
            source={{ uri: imgUrl }}
          />
        ))}
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
}