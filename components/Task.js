import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure you have this installed

const Task = ({ children }) => (
    <View style={styles.container}>
        <Icon name="check-box-outline-blank" size={24} color="#9f6fffff" style={styles.icon1} />
        <Text style={styles.text}>{children}</Text>
<Icon name="radio-button-unchecked" size={24} color="#9f6fffff" />

    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // put icon and text side by side
        backgroundColor: '#eef4f6ff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        alignItems: 'center',
        border: '1px solid #ccc',
    },
    icon1: {
        marginRight: 8,
    },
    icon2: {
        marginLeft: 8,
    },
    text: {
        color: '#333',
        fontSize: 16,
        maxWidth: '90%', // limit text width
        flex: 1, // allow text to shrink if it overflows
    },
});

export default Task;
