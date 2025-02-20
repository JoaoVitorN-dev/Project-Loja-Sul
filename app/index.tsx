import { SafeAreaView, View, StyleSheet,Image, Text} from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen () {

    const handleStart = () => {
        router.replace("/home");
    }
    return (
        <SafeAreaView style = {styles.container}>
            <Image 
                source={require('../assets/logo.png')}
                resizeMode="cover"
                style = {styles.logo}
                />
            <Text style = {styles.h1}>Loja do Sul</Text>
            <Text style = {styles.subtitle}>Aqui você encontra tudo o que precisa</Text>
            <Button title="Começar as compras" onPress={handleStart}/>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo : {
        width: 200,
        height: 200,
        marginBottom: 20 
    },
    h1: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 12
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 12
    }
})