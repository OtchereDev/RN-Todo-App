import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const TodoItem = ({item, removeTodo}) => {
    return (
        <TouchableOpacity 
            onPress={()=>removeTodo(item.key)}>
          <Text style={styles.item}>
              {item.text}
          </Text>
        </TouchableOpacity>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,

    }
})
