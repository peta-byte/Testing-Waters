import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => {navigation.navigate('Tickets');}} style={styles.button}>
                <Text style={styles.buttontext}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Contact');}} style={styles.button}>
                <Text style={styles.buttontext}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('News');}} style={styles.button}>
                <Text style={styles.buttontext}>News</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginRight: 5,
        marginLeft: 5
    },
    buttontext: {
        fontFamily: 'Ubuntu-Regular'
    } 
});

export default Menu;