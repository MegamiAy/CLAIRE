import { Platform, View, Image, TouchableOpacityBase, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { addDoc, collection, doc, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import styles from "../utils/styles";
import { storage } from "../config/firebase";
import { Picker } from "@react-native-picker/picker";

export default function CadProd() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [collectionS, setCollection] = useState(null);
    const [imageList, setImageList] = useState([]);

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
            if (title !== "" && content !== "" && price !== "" && size !== 0 && collectionS !== 0 && imageList.length === 4) {
          const docRef = await addDoc(collection(db, "Post"), {
            title: title,
            content: content,
            price: price,
            timestamp: serverTimestamp(),
          });
      
          const postId = docRef.id;
      
          const imageUrls = await Promise.all(
            imageList.map(async (image, index) => {
              const response = await fetch(image.uri);
              const blob = await response.blob();
              const storageRef = ref(storage, `produtos/${postId}/img${index + 1}`);
              await uploadBytesResumable(storageRef, blob);
              return getDownloadURL(storageRef);
            })
          );
      
          await setDoc(doc(db, "Post", postId), {
            title: title,
            content: content,
            price: price,
            size: size,
            collection: collectionS,
            img1: imageUrls[0] || "",
            img2: imageUrls[1] || "",
            img3: imageUrls[2] || "",
            img4: imageUrls[3] || "",
          })
          console.log("Produto cadastrado com sucesso!");
        } else {
            alert("Preencha todos os campos e selecione 4 imagens")
        };
        } catch {(error) => {
            console.log(error);
        }
      }
    } 

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
                    <Picker
                    selectedValue={size}
                    onValueChange={(itemValue) =>
                        setSize(itemValue)
                    }>
                        <Picker.Item label="Selecione o tamanho" value="0" />
                        <Picker.Item label="P" value="P" />
                        <Picker.Item label="M" value="M" />
                        <Picker.Item label="G" value="G" />
                        <Picker.Item label="GG" value="GG" />
                    </Picker>
                    <Picker
                    selectedValue={collectionS}
                    onValueChange={(itemValue) =>
                        setCollection(itemValue)
                    }>
                        <Picker.Item label="Selecione a coleção" value="0" />
                        <Picker.Item label="Cosmopolitan" value="Cosmopolitan" />
                        <Picker.Item label="Essentials" value="Essentials" />
                        <Picker.Item label="Blend" value="Blend" />
                    </Picker>

                    {imageList && <ImageComponent /> }

                    <Button 
                    onPress={pickImage}
                    style={styles.ButtonH}
                    >Selecione 4 imagens</Button>
                    <Button
                        onPress={inserirPost}
                        style={styles.ButtonH}
                    >Postar</Button>
                </View>
            </View>
        </View>
    )};
