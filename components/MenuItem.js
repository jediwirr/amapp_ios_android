import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;

const MenuItem = ({title, iconName, onPress}) => {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={
                iconName ? { 
                    ...styles.button, 
                    flexDirection: 'column', 
                    justifyContent: 'space-around', 
                    alignItems: 'center', 
                    height: 180,
                    width: '45%',
                } : styles.button
        }>
            <Text style={styles.buttonText}>
                {title}
            </Text>
            {
                iconName ?
                <Icon
                    name={iconName}
                    size={36}
                    color='#fff'
                /> :
                <></>
            }
        </TouchableOpacity> 
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00656D',
        padding: 10,
        margin: 8,
        borderRadius: 15,
        shadowOpacity: .4,
        opacity: .7
    },
    buttonText: {
        color: '#fff',
        fontSize: 21,
        textAlign: 'center',
        // fontWeight: 'bold'
    }
});

export default MenuItem;