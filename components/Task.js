import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure you have this installed

const Task = ({ children }) => (
    <View style={styles.container}>
        <Icon name="check-box-outline-blank" size={24} color="#000" style={styles.icon} />
        <Text style={styles.text}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // put icon and text side by side
        backgroundColor: '#c1e9f6ff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        alignItems: 'center',
        border: '1px solid #ccc',
    },
    icon: {
        marginRight: 12,
    },
    text: {
        color: '#333',
        fontSize: 16,
    },
});

export default Task;
