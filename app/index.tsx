import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type ToDoType = {
    id: number;
    title: string;
    isDone: boolean;
};

export default function Index() {
    const [todos, setTodos] = useState<ToDoType[]>([]);
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
                renderItem={({ item }) => <TodoItem todo={item} />}
            />
            <KeyboardAvoidingView
                style={styles.footer}
                behavior="padding"
                keyboardVerticalOffset={10}
            >
                <TextInput
                    placeholder="Add new todo"
                    style={styles.newToDoInput}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        alert("clicked");
                    }}
                >
                    <Ionicons
                        name="add"
                        size={34}
                        color={"#fff"}
                    />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const TodoItem = ({ todo }: { todo: ToDoType }) => {
    return (
        <View style={styles.toDoContainer}>
            <View style={styles.toDoInfoContainer}>
                <Checkbox
                    value={todo.isDone}
                    onValueChange={() => {
                        alert("clicked");
                    }}
                    color={todo.isDone ? "#4630EB" : undefined}
                />
                <Text style={[styles.toDoText, { textDecorationLine: todo.isDone ? "line-through" : "none" }]}>
                    {todo.title}
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    alert("clicked");
                }}
            >
                <Ionicons
                    name="trash"
                    size={24}
                    color={"#8B0000"}
                />
            </TouchableOpacity>
        </View>
    );
};

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
        fontSize: 16,
        color: "#333",
    },
    toDoContainer: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    toDoInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
    },
    toDoText: {
        fontSize: 16,
        color: "#333",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    newToDoInput: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 16,
        borderRadius: 10,
        fontSize: 16,
        color: "#333",
    },
    addButton: {
        backgroundColor: "#4630EB",
        padding: 8,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
