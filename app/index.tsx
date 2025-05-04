import { Ionicons } from "@expo/vector-icons";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
    const todoData = [
        {
            id: 1,
            title: "Todo 1",
            isDone: false,
        },
        {
            id: 2,
            title: "Todo 2",
            isDone: true,
        },
        {
            id: 3,
            title: "Todo 3",
            isDone: true,
        },
        {
            id: 4,
            title: "Todo 4",
            isDone: false,
        },
        {
            id: 5,
            title: "Todo 5",
            isDone: false,
        },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <Ionicons
                name="menu"
                size={24}
                color={"#333"}
            ></Ionicons>
            <FlatList
                data={todoData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
