import { Text } from "react-native-paper";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "../utils/styles";
import Header from "../bases/Header";

export default function HomeSrc() {
  return (
    <View style={styles.containerH}>
      {/* Carrosel de imagens ou um slider */}
      <View style={styles.carossel}>
        <Image source={require("../img/gato.jpg")} style={{...styles.imagemC, width:400}} />
      </View>

      {/* Fazer um butao ou imagem onde clica e vai para os produtos da coleção */}

      <View style={styles.BoxColections}>
        <Text>Coleções</Text>

        <TouchableOpacity
          style={styles.butaoCol}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.colections}
            source={require("../img/gato.jpg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butaoCol}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.colections}
            source={require("../img/gato.jpg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butaoCol}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.colections}
            source={require("../img/gato.jpg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}