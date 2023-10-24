import {auth} from '../config/firebase'
import { signOut } from '@firebase/auth'
export default function LogOut ({navigation}){
    signOut(auth).then(() => {
        alert ("Deslogado com sucesso")
        navigation.navigate("Login")
    }).catch((error) => {
        alert("Erro ao deslogar")
        navigation.navigate("Home")
    }) 
}