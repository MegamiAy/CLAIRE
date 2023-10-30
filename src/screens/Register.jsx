import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { View, Image } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import styles from "../utils/styles";
import { auth } from "../config/firebase";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [conf, setConf] = useState("");

  async function handleRegister() {
    if (pass === conf) {
      createUserWithEmailAndPassword(auth, email, pass, conf)
        .then((userCredential) => {
          alert("Usuário criado com sucesso!");
          navigation.navigate("Login");
        })
        .catch((error) => {
          alert("Falha ao criar usuário: " + error);

          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            console.log("Email já está em uso!");
          } else if (errorCode === "auth/invalid-email") {
            console.log("Email inválido!");
          } else if (errorCode === "auth/weak-password") {
            console.log("Senha fraca!");
          }
        });
    }
  }

  return (
    <View style={styles.FullBodyL}>
      <View style={styles.BodyL}>
        <Paragraph>Faça seu cadastro: </Paragraph>
        <TextInput
          label={"E-mail"}
          placeholder="Digite seu E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.InputL}
        />
        <TextInput
          label={"Nome de Usuário"}
          placeholder="Digite o nome de usuário"
          value={user}
          onChangeText={setUser}
          style={styles.InputL}
        />
        <TextInput
          label={"Senha"}
          placeholder="Digite sua Senha"
          value={pass}
          onChangeText={setPass}
          style={styles.InputL}
          secureTextEntry={true}
        />
        <TextInput
          label={"Confirme a senha"}
          placeholder="Digite a Senha"
          value={conf}
          onChangeText={setConf}
          style={styles.InputL}
          secureTextEntry={true}
        />
        <Button style={styles.ButtonC} onPress={handleRegister}>
          Cadastrar
        </Button>
      </View>
    </View>
  );
}
