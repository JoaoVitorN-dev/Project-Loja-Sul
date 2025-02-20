import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function tabLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: "#00F"}}>
            <Tabs.Screen name="home" options={{
                title: "Inicio",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
            }}
            />

            <Tabs.Screen name="home" options={{
                title: "Categorias",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="archive" color={color} />
            }}
            />

            <Tabs.Screen name="home" options={{
                title: "Sobre mim",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
            }}
            />
        </Tabs>
    )
}