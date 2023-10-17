import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { View, TextInput, Image } from "react-native";
import { Button, Paragraph } from "react-native-paper";
import styles from "../utils/styles";
import { auth } from "../config/firebase";
import * as ImagePicker from "expo-image-picker";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [conf, setConf] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const handleRegister = () => {
    if (pass !== conf) {
      alert("Senhas não conferem!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass, conf)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Falha ao criar usuário: " + error);

        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          console.log("Email já está em uso!");
        } else if (errorCode === "auth/invalid-email") {
          console.log("Email inválido!");
        } else if (errorCode === "auth/weak-password") {
          console.log("Senha fraca!");
        }
      });
  };

  return (
    <View style={styles.BodyH}>
      <Paragraph>Faça seu cadastro: </Paragraph>
      <TextInput
        label={"E-mail"}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
        // mode="outlined"
        style={styles.InputL}
      />
      <TextInput
        label={"Nome de Usuário"}
        placeholder="Digite o nome de usuário"
        value={user}
        onChangeText={setUser}
        // mode="outlined"
        style={styles.InputL}
      />
      <TextInput
        label={"Senha"}
        placeholder="Digite sua Senha"
        value={pass}
        onChangeText={setPass}
        // mode="outlined"
        style={styles.InputL}
        secureTextEntry={true}
      />
      <TextInput
        label={"Confirme a senha"}
        placeholder="Digite a senha novamente"
        value={conf}
        onChangeText={setConf}
        style={styles.InputL}
        secureTextEntry={true}
      />
      {image ? (
              <>
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    alignSelf: "center",
                    marginTop: 10,
                    marginBottom: 10,
                    border: "4px #16337E solid",
                  }}
                />
              </>
            ) : (
              <Button
                onPress={pickImage}
                style={styles.botao}
                textColor="white"
              >
                Escolher foto
              </Button>
            )}
      <Button
        style={styles.ButtonC}
        onPress={handleRegister}>
        Cadastrar
      </Button>
    </View>
  );
}

