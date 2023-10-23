// import React, { useState } from 'react';
// import { View, SafeAreaView, StyleSheet, Image, ScrollView, Animated } from 'react-native';
// import { Text } from 'react-native-paper';

// export default function App() {
//   const [scrollY, setScrollY] = useState(new Animated.Value(0));
//  return (
//    <SafeAreaView >
//      <Animated.View 
//      style={[
//        styles.header,
//        {
//          height: scrollY.interpolate({
//            inputRange:[10, 120, 145],
//            outputRange:[100, 10, 0],
//            extrapolate: 'clamp'
//          }),
//          opacity: scrollY.interpolate({
//            inputRange:[1, 80, 170],
//            outputRange: [1, 0.5,0],
//            extrapolate: 'clamp'
//          })
//        }
//       ]}
//      >
//       <View style={{textAlign: 'center', justifyContent: 'center'}}>
//         <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
//           Claire Juliani
//         </Text>
//       </View>
//       {/* <Image
//       source={require('./src/assets/ft.png')}
//       style={{width: 30, height: 30}}
//       resizeMode="contain"
//       />
//       <Animated.Image
//       source={require('./src/assets/lg.png')}
//       style={{
//         width: scrollY.interpolate({
//           inputRange:[0, 120],
//           outputRange:[230, 90],
//           extrapolate: 'clamp'
//         }),
//         height: 90
//       }}
//       resizeMode="contain"
//       />
//       <Image
//       source={require('./src/assets/ft2.png')}
//       style={{width: 30, height: 30}}
//       resizeMode="contain"
//       /> */}
//      </Animated.View>

//      <ScrollView 
//      scrollEventThrottle={16}   
//      onScroll={Animated.event([{
//        nativeEvent: {
//          contentOffset: { y: scrollY }
//        },
//      }],
//      { useNativeDriver: false })}
//      >

//      </ScrollView>
//    </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header:{
//     backgroundColor: '#101010',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingRight: 10,
//     paddingLeft: 10,
//     paddingTop: 35,
//     borderBottomWidth: 2,
//     borderBottomColor: '#FFF'
//   },
//   box:{
//     height: 300,
//     backgroundColor: '#DDD',
//     margin: 7,
//     borderRadius: 5
//   }
// });