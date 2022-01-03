import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList, TouchableOpacity } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todo,setTodo] = useState([
    {text:'buy coffee', key: 1},
    {text:'create an app', key: 2},
    {text:'pay on the switch', key: 3},
  ])

  const removeTodo=(todoId)=>{
    setTodo((prevTodo)=>{
      return prevTodo.filter(todo=> todo.key != todoId)
    })
  }

  const submitHandler=(text)=>{
        setTodo(prevTodo=>{
          return [
            ...prevTodo,
            {text, key:Math.random().toString()}
          ]
        })
  }
 
  return (

    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todo} 
            renderItem={({item})=>(
              // <Text>
              //   {item.text}
              // </Text>
              <TodoItem item={item} removeTodo={removeTodo} />
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  content:{
    padding:40
  },
  list:{
    marginTop: 20
  }
});
