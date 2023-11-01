// Boa sorte Jão's e Japa

import { StyleSheet } from "react-native";

const WIDTH = 400;
const HEIGHT = 800;

export const styles = StyleSheet.create({
  BodyH: {
    alignItems: "center",
    // backgroundColor: ""
  },

  BodyL: {
    alignItems: "center",
    fontFamily: "arial",
  },

  ButtonH: {
    width: "90%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 0,
    color: "#fff",
  },

  ButtonL: {
    width: "70%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 0,
  },

  ButtonC: {
    width: "80%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 0,
  },

  InputL: {
    width: "95%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 7,
  },

  Touch: {
    marginTop: 5,
    marginBottom: 5,
  },

  Int: {
    marginTop: 10,
    fontSize: 20,
  },

  CardT: {
    color: "#fff",
  },

  CardB: {
    // backgroundColor: "#00f",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#484d50",
    margin: 10,
    borderRadius: 0,
  },

  //Home
  containerH: {
    alignItems: "center",
    overflow: "hidden",
  },
  imagemC: {
    minWidth: 460,
    minHeight: 320,
    alignSelf: "stretch",
    marginBottom:20,
  },
  colections: {
    width: "80%",
    height: 100,
    margin: 20,
  },
  BoxColections: {
    // borderWidth: 3,
    // borderColor: "red",
    alignItems: "center",
    width: "80%",
    height: "80%",
  },
  butaoCol: {
    width: "100%",
    alignItems: "center",
  },
  //SLIDESSSSS
  containerS: {
    flex: 1,
    paddingTop: 100,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    overflow: "hidden",

  },
  wrapB: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  bActive: {
    color: "black",
    margin: 3,
  },
  b: {
    margin: 3,
    color: "gray",
  }
});

export default styles;