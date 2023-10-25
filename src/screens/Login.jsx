import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import styles from "../utils/styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário UID: ", user.uid);
        navigation.navigate("HomeScr");
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
        <Image source={require("../img/logo.png")} style={{...styles.imagemLR}} />
        <Text style={styles.titleLR}>Login</Text>
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
