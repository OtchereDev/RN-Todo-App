import { StyleSheet, View,TextInput, Button } from 'react-native'
import { useState } from 'react'

const addTodo = ({submitHandler}) => {
    const [todo, setTodo] = useState("")

    const changeHandle=(val)=>{
        setTodo(val)
    }
    

    return (
        <View>
            <TextInput 
                placeholder='new todo....'
                onChangeText={changeHandle}
                style={styles.input}
            />
            <Button title="Add todo" onPress={()=>submitHandler(todo)} color={"coral"} />
        </View>
    )
}

export default addTodo

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    }
})
