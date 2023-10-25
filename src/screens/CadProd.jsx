import { Platform, View, Image, TouchableOpacityBase, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import * as ImagePicker from "expo-image-picker";
import styles from "../utils/styles";

export default function CadProd() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [collectionS, setCollection] = useState(null);
    const [image, setImage] = useState(null); 
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);// Moved outside of inserirPost
    const [textimage, setTextImage] = useState("Selecione a primeira imagem")

    function resetimage(){
        setImage(null);
        pickImage();
    }
    function resetimage1(){
        setImage1(null);
        pickImage();
    }
    function resetimage2(){
        setImage2(null);
        pickImage();
    }
    function resetimage3(){
        setImage3(null);
        pickImage();
    }
    
    

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })


        if (image === null) {
            setImage(result.uri);
            setTextImage("Selecione a segunda imagem")
            return
        } else if (image1 === null) {
            setImage1(result.uri);
            setTextImage("Selecione a terceira imagem")
            return
        } else if (image2 === null) {
            setImage2(result.uri);
            setTextImage("Selecione a quarta imagem")
            return
        } else if (image3 === null) {
            setImage3(result.uri);
            setTextImage("penis 😎😎😎😎")
            return
        } else {
            alert("Você já selecionou 4 imagens");
        }
    };

    async function inserirPost() {
        try {
            if (image) {
                const response = await fetch(image);
                const blob = await response.blob();
                const base64Image = await convertBlobToBase64(blob);

                const payload = {
                    Title: title,
                    Content: content,
                    Image: base64Image,
                };
                const post = await addDoc(postRef, payload);
                console.log(post);
            } else {
                const payload = {
                    Title: title,
                    Content: content,
                };
                const post = await addDoc(postRef, payload);
                console.log(post);
            }
        } catch (error) {
            console.log(error);
            console.error("Error uploading image: ", error);
        }
    }

    const convertBlobToBase64 = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const postRef = collection(db, "Post");

    const ImageComponent = () => {
        if (Platform.OS === "web") {
            return (<TouchableOpacity onPress={resetimage}><img src={image} style={{ width: 200, height: 400 }} /></TouchableOpacity>);
        } else  {
            return (
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            );
        }
    };
    const ImageComponent1 = () => {
        if (Platform.OS === "web") {
            return (<TouchableOpacity onPress={resetimage1}><img src={image1} style={{ width: 200, height: 200 }} /></TouchableOpacity>);
        } else {
            return (
                <Image source={{ uri: image1 }} style={{ width: 200, height: 200 }} />
            );
        }
    };
    const ImageComponent2 = () => {
        if (Platform.OS === "web") {
            return (<TouchableOpacity onPress={resetimage2}><img src={image2} style={{ width: 200, height: 200 }} /></TouchableOpacity>);
        } else {
            return (
                <Image source={{ uri: image2 }} style={{ width: 200, height: 200 }} />
            );
        }
    };
    const ImageComponent3 = () => {
        if (Platform.OS === "web") {
            return (<TouchableOpacity onPress={resetimage3}><img src={image3} style={{ width: 200, height: 200 }} /></TouchableOpacity>);
        } else {
            return (
                <Image source={{ uri: image3 }} style={{ width: 200, height: 200 }} />
            );
        }
    };

    return (
        <View>
            <View>
                <View style={styles.BodyH}>
                    <TextInput label="Titulo"
                        value={title}
                        onChangeText={setTitle}
                        style={styles.InputL}
                    />
                    <TextInput
                        label="Descrição"
                        value={content}
                        onChangeText={setContent}
                        style={styles.InputL}
                    />
                    <TextInput
                        label="Preço"
                        value={content}
                        onChangeText={setPrice}
                        style={styles.InputL}
                    />

                    {image && <ImageComponent />}
                    {image1 && <ImageComponent1 />}
                    {image2 && <ImageComponent2 />}
                    {image3 && <ImageComponent3 />}

                    <Button 
                    onPress={pickImage}
                    style={styles.ButtonH}
                    >{textimage}</Button>
                    <Button
                        onPress={inserirPost}
                        disabled={!title || !content}
                        style={styles.ButtonH}
                    >Postar</Button>
                </View>
            </View>
        </View>
    );
}