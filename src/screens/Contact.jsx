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
        onPress={() => navigation.navigate("Home")}
        textColor= "#000"
      >
       <FaArrowLeft />
      </Button>
      <Text style={styles.titleC}>Contato</Text>
      <View style={styles.subTitleC}>
        <Text style={styles.subTitleCr2}>
          Contate Claire Juliani para qualquer dúvida
        </Text>
      </View>

      <View style={[styles.BodyC, {width: '100%'}]}>
        <View style={[styles.BodyCr, styles.BodyC, {width: '100%'}]}>

          <View>
            <Text style={styles.titleCr}>Email:</Text>
            <Text style={styles.subTitleCr}>
              claire@gmail.com
            </Text>

            <Text style={styles.titleCr}>Telefone:</Text>
            <Text style={styles.subTitleCr}>
              (11) 99999-9999
            </Text>

            <Text style={styles.titleCr}>Endereço:</Text>
            <Text style={styles.subTitleCr}>
              Rua xxxx, X - xxxxx - SC
            </Text>
          </View>
          <View>
            <Image
              style={styles.ImageC}
              source={require("../img/contato.jpg")}
            />
          </View>

      </View>
    </View>
    </View>
  );
}
