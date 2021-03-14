import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function TodoItem({item, pressHandler}){

    return(
        <TouchableOpacity onPress={() => {pressHandler(item.key)}}>
            <Text style={styles.item}><AntDesign name="delete" size={24} color="black" /> {item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})