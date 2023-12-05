import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productRef = doc(db, "Post", productId);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          const data = productSnapshot.data();
          setProduct({
            id: productId,
            title: data.title,
            content: data.content,
            price: data.price,
            size: data.size,
            imgUrls: [data.img1], // Adapte conforme necessário
          });
        } else {
          console.log("Produto não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return (
      <View style={styles.FullBodyCP}>
        <Text>Carregando detalhes do produto...</Text>
      </View>
    );
  }

  return (
    <View style={styles.BodyH}>
        <View style={[styles.SubBoxP]}>
            <Text style={{fontSize: 50, fontWeight: "bold", alignSelf:"center"}}>{product.title}</Text>
            <View style={[styles.shadowProp]}>
                <Image
                    source={{ uri: product.imgUrls[0] }}
                    style={[{ width: "100%", height: 250, }, ]}
                />
            </View>
            <Text style={[styles.TitleCP, {marginTop: 15}]}>R${product.price}</Text>
            <Text style={[styles.TextS, {fontSize: 20}]}>Tamanho: {product.size}</Text>
            <Text style={{fontSize: 20}}>Descrição: {product.content}</Text>
        </View>
    </View>
  );
}