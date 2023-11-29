import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import styles from "../utils/styles";

import { FaArrowLeft } from 'react-icons/fa';

export default function Contact({ navigation }) {
  return (
    <View style={styles.FullBodyL}>
      <Button
        mode="contained"
        style={styles.ButtonLT}
        onPress={() => navigation.navigate("Contato")}
        textColor= "#000"
      >
       <FaArrowLeft />
      </Button>
      <Text style={styles.titleLR}>Contato</Text>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleLR}>
          Contate Claire Juliani para qualquer dúvida
        </Text>
      </View>

      <View style={styles.BodyL}>
        <View style={styles.BodyL}>
          <Text style={styles.titleLR}>Email:</Text>
          <Text style={styles.subTitleLR}>
             claire@gmail.com
          </Text>

          <Text style={styles.titleLR}>Telefone:</Text>
          <Text style={styles.subTitleLR}>
             (11) 99999-9999
          </Text>

          <Text style={styles.titleLR}>Endereço:</Text>
          <Text style={styles.subTitleLR}>
             Rua xxxx, X - xxxxx - SC
          </Text>
      </View>
    </View>
    </View>
  );
}
