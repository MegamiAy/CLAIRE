import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { View, Image, Text } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import styles from "../utils/styles";
import { auth } from "../config/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { FaArrowLeft } from 'react-icons/fa';
import { db } from "../config/firebase";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [conf, setConf] = useState("");

  async function handleRegister() {
    if (pass === conf) {
      try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            pass
          );
          const uid = userCredential.user.uid;
          let docusername = username.toLowerCase();
          const userDocRef = doc(db, "users", docusername);
          
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()){
            docusername = `${docusername}_${uid.slice(0, 8)}`
          }

          const newUserDocRef = doc(db, "users", docusername);
          

          await setDoc(newUserDocRef, {
            username: username,
            email: email,
            uid: uid,
          });

          alert("Usuário registrado com sucesso!")
          navigation.navigate("Login")
          } catch (error) {
            alert("Ocorreu um erro ao registrar o usuário.");
        } 
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            alert("Email já está em uso!");
          } else if (errorCode === "auth/invalid-email") {
            alert("Email inválido!"); 
          } else if (errorCode === "auth/weak-password") {
            alert("Senha fraca!");
          }
        };
    }
  

  return (
    <View style={styles.FullBodyL}>
      <Button
        mode="contained"
        style={styles.ButtonRT}
        onPress={() => navigation.navigate("Início")}
        textColor="#000"
      >
        <FaArrowLeft />
      </Button>
      <View style={styles.BodyL}>
        <Text style={styles.titleR}>Cadastro</Text>
        <View style={styles.subTitleR}>
          <Text style={styles.subTitleLR}>Bem-vindo(a)</Text>
        </View>
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
          value={username}
          onChangeText={setUsername}
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
        <Button
          mode="contained"
          style={styles.ButtonC}
          onPress={handleRegister }
        >
          Cadastrar
        </Button>
      </View>
    </View>
  )};
