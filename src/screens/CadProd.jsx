import { Platform, View, Image, TouchableOpacityBase, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import styles from "../utils/styles";
import { storage } from "../config/firebase";

export default function CadProd() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [collectionS, setCollection] = useState(null);
    const [imageList, setImageList] = useState([])
    const [getImg, setGetImg] = useState(null)
    const [getId, setGetId] = useState(null)

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [9, 16],
            quality: 1,
            allowsMultipleSelection: true
        })
        if (imageList.length < 4) {
        setImageList(imageList => [...imageList, result])
        } else {
            alert("Você já selecionou 4 imagens")
        }
    }

    function removerItem (imgr) {
        setImageList([
            ...imageList.slice(0, imgr),
            ...imageList.slice(imgr + 1, imageList.length)
        ]);
    }

    async function inserirPost() {
        try {
            if (imageList) {
                const response = await fetch(imageList[0].uri);
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
            return (imageList.map((image, index) => (
                <div key={index}>
                    <img src={image.uri} style={{ width: 200, height: 200 }} onClick={()=>removerItem(index)}/>
                </div>
            )));
        } else  {
            return (
                imageList.map((image) => (
                    <View key={index}>
                        <TouchableOpacity onPress={() => removerItem(index)}>
                            <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
                        </TouchableOpacity>
                    </View>
                )) 
            );
        }
    };

    return (
        <View>
            <View>
                <View style={styles.BodyH}>
                    <Text>Cadastre produtos aqui</Text>
                    <Text>Para remover uma imagem, clique nela.</Text>
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
                        value={price}
                        onChangeText={setPrice}
                        style={styles.InputL}
                    />

                    {imageList && <ImageComponent /> }

                    <Button 
                    onPress={pickImage}
                    style={styles.ButtonH}
                    >Selecione 4 imagens</Button>
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