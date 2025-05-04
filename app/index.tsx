import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        alert("clicked");
                    }}
                >
                    <Ionicons
                        name="menu"
                        size={24}
                        color={"#333"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        alert("clicked img");
                    }}
                >
                    <Image
                        source={{ uri: "https:/xsgames.co/randomusers/avatar.php?g=male" }}
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.searchBar}>
                <Ionicons
                    name="search"
                    size={24}
                    color={"#333"}
                />
                <TextInput
                    placeholder="Search"
                    style={styles.searchInput}
                />
            </View>
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
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        paddingTop: 20,
    },
    searchBar: {
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 12,
        gap: 10,
    },
    searchInput: {
        flex: 1,
    },
});
