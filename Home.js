import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Menu from './Menu';

const Home = (props) => {
    return (
        <View style={ styles.container }>
            <Image style={styles.globologo} source={require('./images/TheGoodPlace1.jpg')} />
            <Text style={styles.title}> Welcome To GloboTicket</Text>
            <Text style={styles.subtitle}>{ props.username }</Text>
            <Image style={styles.heroimage} source={require('./images/TheGoodPlace1.jpg')} />
            <View style={styles.content}>
               <Text>{ introText }</Text>
            </View>
            <Menu style={styles.menu} />
        </View>
    );
};

const introText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1 // take any available space
    },
    globologo: {
        height: 100,
        width: 150
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    subtitle: {
        padding: 20,
        fontFamily: 'Ubuntu-Regular'
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    },
    heroimage: {
        height: 170,
        width: '100%'
    },
    menu: {
        position: 'absolute'
    }
});

export default Home;