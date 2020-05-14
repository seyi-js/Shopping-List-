import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icons from '@expo/vector-icons/FontAwesome';
export const Items = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={ styles.Items}>
            <View style={ styles.ItemsView } >
                <Text style={ styles.ItemsText }>
                    {item.item}
                </Text>
                <Icons name="remove"
                    size="20"
                    color="firebrick"
                    onClick={()=> deleteItem(item.id)}
                
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
    Items: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        boarderBottomWidth: 1,
        boarderColor: '#eee'
    },
    ItemsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ItemsText: {
        fontSize: 18
    }
})

export default Items