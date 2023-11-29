import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native";
import styles from "../utils/styles";
import {auth} from '../utils/firebase'

export default function User(){


    return(
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

            
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
    )
}