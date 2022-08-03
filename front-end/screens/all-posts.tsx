import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, FlatList } from 'react-native';
import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

type Post = {
    sender: String,
    message: String
}

const postsArray: Array<Post> = [
    {
        sender: 'Liav',
        message: 'LiavNeeson'
    },
    {
        sender: 'Paul',
        message: 'Houdini'
    },
    {
        sender: 'Moges',
        message: 'Buca'
    }
]

const PostListRow: FC<{sender: String, message: String}> = (sender, message) => {
    return (
        <View style={styles.list_row_container}>
            <Image source={require('../assets/avatar.png')} style={styles.list_row_image}></Image>
            <View>
                <Text style={styles.list_row_sender}>{sender}</Text>
                <Text style={styles.list_row_message}>{message}</Text>
            </View>
        </View>
    )
}

const PostsScreen: FC =() => {
    return (
        <View style={styles.post_list}>
            <FlatList 
                data={postsArray}
                keyExtractor = {item => item.sender.toString()}   
                renderItem = {({item}) => (<PostListRow sender={item.sender} message={item.message} />)}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    list_row_container: {
        height: 200,
        width: "80%",
        textAlign: 'center',
        marginLeft: "10%",
        marginRight: "10%",
        flexDirection: 'row',
        backgroundColor: "lightblue",
        marginBottom: 5
    },
    list_row_image: {
        height: 180,
        width: 180,
        margin: 10,
    },
    list_row_sender: {
        fontSize: 40,
        marginBottom: 10
    },
    list_row_message: {
        fontSize: 30,
    },
    post_list: {
        flex: 1
    }
})

export default PostsScreen