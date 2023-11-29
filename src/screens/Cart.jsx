import React, { useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar um item ao carrinho
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <View>
      <Text>Carrinho</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Remover do Carrinho" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
