import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";

export default function Screen() {


    return (
        <SafeAreaView style={styles.container}>
            <View style= {styles.containerDescription}>
                <View style={styles.apresentation}>
                    <Text style={styles.who}>I'M </Text>
                    <Text style={styles.name}> João Nepomuceno</Text>
                </View>
                <Text style={styles.description}>FullStack Developer</Text>
            </View>


            {/* <Image
                source={require("../../assets/avatar.png")}
                resizeMode="cover"
                style={styles.image}
            />
            <View style={styles.socialMedias}>
                {/* incluir midias sociais aqui depois */}
            {/* </View>
            <Text style={styles.subTitle}>Desenvolvedor FullStack</Text>

            <Text style={styles.titleText}>🚀 Um pequeno resumo sobre mim!</Text>
            <Text style={styles.bodyText}>
                Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em busca de criar soluções eficientes e escaláveis. Com experiência em Java, JavaScript, PostgreSQL e desenvolvimento back-end, minha missão é transformar ideias em realidade.
                Este aplicativo é apenas o começo! Meu objetivo é construir projetos que impactem o mercado e ajudem empresas a crescer com tecnologia de ponta.
                Se você busca um desenvolvedor comprometido e com visão empreendedora, vamos criar algo incrível juntos! 💡🔥
            </Text> */}

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34353A"
    },

    containerDescription: {
        marginLeft: 20,
        marginTop: 50,
        width: "67.5%",
        height: "4.5%",
        backgroundColor: "#FFF"
    },

    apresentation: {
        flexDirection: "row",    
    },

    who: {
        fontSize: 20,
        marginTop: 5,
        color: "#F5F6F5"
    },

    name: {
        fontSize: 25,
        color: "#FFCB6C"
    },
    description: {
        fontSize: 18,
        color: "#ECEDED"
    },
    
})