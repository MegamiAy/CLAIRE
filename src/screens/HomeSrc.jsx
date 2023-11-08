import { Text } from "react-native-paper";
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../utils/styles";
import { SafeAreaView } from "react-native";
import { useState } from "react";

export default function HomeSrc() {
  const images = [
    "https://cdn.pixabay.com/photo/2023/10/12/17/56/after-the-rain-8311416_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/24/04/04/trees-8337343_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/20/23/16/mountain-8330401_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/09/19/22/46/lake-1681485_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/08/27/14/38/mountains-1624284_1280.jpg",
  ];

  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

  const [imgActive, setImgActive] = useState(0);

  const onChangeEvent = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <View style={styles.containerH}>
      <SafeAreaView style={styles.containerS}>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => onChangeEvent(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{ uri: e }}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapB}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imgActive === index ? styles.bActive : styles.b}
              >
                ●
              </Text>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

{
  /* Fazer um butao ou imagem onde clica e vai para os produtos da coleção */
}

{
  /* <View style={styles.BoxColections}>
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
</View> */
}
