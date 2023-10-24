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
  const [imageblob, setImageblob] = useState(null);
  const [blobType, setBlobType] = useState(null); 

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    })
    setImage(result.uri);
    const { uri } = result.assets[0];
    const fileName = uri.split('/').pop();
    const fileType = fileName.split('.').pop();
    setImageblob({ uri });
    setBlobType (fileType);
  }

  async function handleRegister(){
    if (image && pass === conf) {
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
      })};  //  
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
        placeholder="Digite a Senha"
        value={conf}
        onChangeText={setConf}
        style={styles.InputL}
        secureTextEntry={true}
      />
      {image
        ? <Image
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
        : null
      }
      <Button
        style={styles.ButtonC}
        onPress={pickImage}>
        Escolha uma imagem
      </Button>
      <Button
        style={styles.ButtonC}
        onPress={handleRegister}>
        Cadastrar
      </Button>
    </View>
  );
}