// Boa sorte Jão's e Japa

import { StyleSheet } from "react-native";

const WIDTH = 400;
const HEIGHT = 800;

export const styles = StyleSheet.create({
  BodyH: {
    alignItems: "center",
    // backgroundColor: ""
  },

  // Start

  FullBodyS: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  ButtonS: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    borderRadius: 0,
    marginBottom: 20,
    backgroundColor: "#000",
  },

  ButtonS2: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    borderRadius: 0,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#000",
  },

  BoxS: {
    width: "100%",
    height: "40%",
    alignItems: "center",
  },

  imagemS: {
    height: 150,
    width: 150,
  },

  TextS: {
    fontWeight: "bold",
    marginTop: 20,
  },

  TextS2: {
    fontWeight: 200,
  },

  //LOGIN

  FullBodyL: {
    backgroundColor: "#fff",
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },

  BodyL: {
    alignItems: "center",
    fontFamily: "arial",
    width: "80%",
    marginTop: 50,
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

  ButtonLT: {
    width: "35%",
    height: 50,
    marginBottom: 60,
    marginTop: 25,
    backgroundColor: "#fff",
    marginRight: 310,
  },

  ButtonL: {
    width: "70%",
    height: 50,
    marginTop: 12,
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

  imagemLR: {
    minHeight: 45,
    minWidth: 350,
    marginBottom: 30,
  },

  titleLR: {
    fontWeight: "bold",
    fontSize: 40,
    marginRight: 225,
  },

  subTitle: {
    alignItems: "flex-start",
    marginTop: 5,
    marginRight: 110,
  },

  subTitleLR: {
    fontWeight: 300,
    fontSize: 15,
  },

  Touch: {
    marginTop: 15,
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

  // REGISTER

  titleR: {
    fontWeight: "bold",
    fontSize: 40,
    marginRight: 142,
  },

  subTitleR: {
    marginTop: 5,
    marginRight: 210,
  },

  ButtonRT: {
    width: "35%",
    height: 50,
    marginBottom: 5,
    marginTop: 25,
    backgroundColor: "#fff",
    marginRight: 310,
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
    marginBottom: 20,
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

  Colection: {
    width: "100%",
    justifyContent: "center",
  },

  ImgColection: {
    width: "80%",
    height: 85,
    marginTop: 15,
    marginLeft: "10%",
  },

  //SLIDESSSSS

  containerS: {
    flex: 1,
    paddingTop: 1,
  },
  wrap: {
    width: 700,
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
  },

  //RECPASS

  InputRP: {
    width: "90%",
    height: 50,
    marginTop: 60,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 7,
  },

  FullBodyRP: {
    backgroundColor: "#fff",
    // justifyContent: "center",
    paddingTop: "5rem",
    alignItems: "center",
    height: "100%",
  },

  TitleRP: {
    marginTop: 40,
    fontWeight: "bold",
  },

  TitleRP2: {
    fontWeight: "100",
    marginTop: 7,
    textAlign: "center",
  },

  LinhaRP: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 10,
  },

  SubTitleRP: {
    marginTop: 20,
  },

  ButtonRP: {
    width: "70%",
    height: 50,
    marginTop: 25,
    marginBottom: 25,
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 0,
  },

  //CADPROD

  BodyCP: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    marginTop: "5rem",
  },

  InputCP: {
    width: "90%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 7,
  },

  BoxCP: {
    width: "100%",
    alignItems: "center",
  },

  ButtonCP: {
    width: "85%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 0,
    color: "#fff",
  },

  TitleCP: {
    fontSize: 30,
    fontWeight: "100",
  },

  subTitleCP: {
    marginBottom: 50,
    fontWeight: "bold",
    fontSize: 13,
  },

  FullBodyCP: {
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    // paddingTop: "8rem",
  },

  PikaCP: {
    height: 40,
    width: "85%",
    marginTop: 12,
  },

  //Tela de produto

  BoxP: {
    width: "100%",
    marginTop: 25,
    marginBottom: 15,
    height: "95%",
    alignItems: "center",
    justifyContent: "center",
  },

  TitleP: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
  },

  ButtonP: {
    width: "100%",
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 0,
    color: "#fff",
  },

  SubBoxP: {
    padding: 10,
    width: "80%",
  },

  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  //Tela de contato

  FullBodyC: {
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleC: {
    fontWeight: "bold",
    fontSize: 40,
    marginRight: 225,
  },
  subTitleCr2: {
    marginTop: 10,
    marginRight: 110,
  },
  BodyC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  BodyCr: {
    marginTop: 40,
  },
  titleCr: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
  ImageC: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default styles;
