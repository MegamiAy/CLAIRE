import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import styles from "../utils/styles";

import { FaArrowLeft } from 'react-icons/fa';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário UID: ", user.uid);
        navigation.navigate("Home");
      } else {
        console.log("Usuário não logado");
      }
    });
  }, []);

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.FullBodyL}>
      <Button
        mode="contained"
        style={styles.ButtonLT}
        onPress={() => navigation.navigate("Início")}
        textColor= "#000"
      >
       <FaArrowLeft />
      </Button>
      {/* <Image source={require("../img/logo.png")} style={{...styles.imagemLR}} /> */}
      <Text style={styles.titleLR}>Login</Text>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleLR}>Bem-vindo(a) de volta</Text>
        <Text style={styles.subTitleLR}>
          Por favor faça login para continuar
        </Text>
      </View>

      <View style={styles.BodyL}>
        <TextInput
          placeholder="Email..."
          value={email}
          onChangeText={setEmail}
          style={styles.InputL}
        />
        <TextInput
          placeholder="Senha..."
          value={senha}
          onChangeText={setSenha}
          style={styles.InputL}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Recuperar")}
          style={styles.Touch}
        >
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("CadProd")}
          style={styles.Touch}  
        >
          <Text>TESTE</Text>
        </TouchableOpacity> */}
        <Button onPress={handleLogin} mode="contained" style={styles.ButtonL}>
          Logar
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("Registro")}
          style={styles.Touch}
        >
          <Text>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
