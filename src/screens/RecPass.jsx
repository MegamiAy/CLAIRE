import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from "react";

                                                
export default function RecPass() {
    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState('');
    const auth = getAuth();

    const resetUserPassword = async () => {
        try{
            await sendPasswordResetEmail(auth, email);
            alert("Email enviado com sucesso!")
            navigation.navigate("Login")
        } catch(error){
            if (error.code === 'auth/user-not-found'){
                alert("Email não encontrado!")
            } else {
                alert("Erro ao enviar email!")
            }
            
        }
    }
    return(
        <View>
            <Text>Esqueci minha senha</Text>
            <TextInput 
                label="Insira seu email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Button onPress={() => resetUserPassword()}>Enviar</Button>
            <Text>{alerta}</Text>
        </View>
    )
}