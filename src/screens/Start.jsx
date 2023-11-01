import { Image, View, Text } from "react-native";
import styles from "../utils/styles";
import { Button } from "react-native-paper";

export default function Start({ navigation }) {
  return (
    <View style={styles.FullBodyS}>
      <View style={styles.BoxS}>
        <Image
          source={require("../img/logo_teste.png")}
          style={{ ...styles.imagemS }}
        />
        <Text style={styles.TextS}>Estilo que inspira, moda que transforma.</Text>
        <Text style={styles.TextS2}>Encontre tendências que refletem sua personalidade.</Text>
      </View>

      <Button
        mode="contained"
        style={styles.ButtonS}
        onPress={() => navigation.navigate("Login")}
      >
        Logar-se
      </Button>
      <Button
        mode="outlined"
        style={styles.ButtonS2}
        onPress={() => navigation.navigate("Registro")}
        textColor="#000"
        
      >
        Cadastre-se
      </Button>
    </View>
  );
}
