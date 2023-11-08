import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import styles from "../utils/styles";

import { FaLock } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function RecPass() {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState("");
  const auth = getAuth();

  const resetUserPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Email enviado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Email não encontrado!");
      } else {
        alert("Erro ao enviar email!");
      }
    }
  };
  return (
    <View style={styles.FullBodyRP}>
      <FaLock fontSize={"5rem"} />
      <Text style={styles.TitleRP}>Esqueci minha senha</Text>
      <Text style={styles.TitleRP2}>
        Insira o seu email e enviaremos um link
        para você voltar a acessar a sua conta.
      </Text>
      <TextInput
        style={styles.InputRP}
        label="Insira seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        style={styles.ButtonRP}
        mode="contained"
        onPress={() => resetUserPassword()}
      >
        Enviar
      </Button>
      <View style={styles.LinhaRP}>
        <View style={styles.LinhaRP}>
          <View
            style={{ flex: 1, width: 110, height: 1, backgroundColor: "black" }}
          />
          <View style={styles.LinhaRP}>
            <Text style={{ marginLeft: 10, marginRight: 10 }}>OU</Text>
          </View>
          <View
            style={{ flex: 1, width: 110, height: 1, backgroundColor: "black" }}
          />
        </View>
      </View>
      <Text style={styles.SubTitleRP}>Criar nova conta</Text>
      <Text>{alerta}</Text>
    </View>
  );
}
