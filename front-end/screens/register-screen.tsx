import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const RegisterScreen: FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/post.png')} style={styles.image}></Image>
            <TextInput style={styles.txtInpt}
                placeholder='אימייל'
            />
            <TextInput style={styles.txtInpt}
                placeholder='סיסמה'
            />
            <br />
            <Button
                title='REGISTER' 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    txt: {
        fontSize: 35
    },
    image: {
      width: 500,
      height: 400,
      resizeMode: 'contain'
    },
    txtInpt: {
        width: 400,
        height: 50,
        textAlign: 'center'
    }
});

export default RegisterScreen