import { Image, Pressable, StyleSheet, Text, View} from "react-native";
import { Product } from "../types/product"

type Props = {
    data : Product;
}

export const ProductItem = ({ data } : Props) => {
    return(
        <Pressable style= {styles.container}>
            <Image
                source={{uri: data.image}}
                resizeMode="cover"
                style= {styles.image}    
            />


            <View style= {styles.info}>
                    <Text style= {styles.title}>{data.title}</Text>
                
                <Text style = {styles.description}>{data.description}</Text>
                <Text style = {styles.price}>R$ {data.price}</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: "3%",
        backgroundColor: "#FFF",
        borderRadius: 5,
        elevation: 4
    },

    image : {
        width: 100,
        height: 100,
        marginTop: "2%",
        marginLeft: "2%",
        borderRadius: 5
    },

    info: {
        flex: 1,
        paddingHorizontal: "2%",
        marginTop: "3%",
    },

    title : {
        backgroundColor: "#295A9F",
        color: "#FFF",
        fontSize: 14,
        fontWeight: "semibold",
        marginBottom: 10,
        alignSelf: "flex-start",
        borderRadius: 5,
        paddingHorizontal: "2%",
        paddingVertical: "2%",
        textAlign: "center"

    }, 

    description:{
        fontSize: 13,
        color: "#555",
        marginBottom: 10,
        fontWeight: "600",
        flex: 1
    },
    
    price: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "right"
    }
}) 