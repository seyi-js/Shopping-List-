import React, {useState} from 'react'
import { View, Alert,StyleSheet, FlatList } from 'react-native';
import Header from './components/Header'
import { uuid } from 'uuidv4'
import Items from './components/Items'
import AddItem from './components/AddItem'
export const App = () => {
  const [ items, setItems ] = useState( [
    {id: uuid(), item: 'Bread'},
    {id: uuid(), item: 'Milk'},
    {id: uuid(), item: 'Juice'},
    {id: uuid(), item: 'Choclate'},
    {id: uuid(), item: 'Butter'},
  ])

  const deleteItem = ( id ) => {
    setItems( prevItems => {
      return prevItems.filter(item=>item.id !== id)
    })
  }

  const addItem = ( item ) => {
    if ( !item ) {
      Alert.alert('Error', "Please enter an item", {text: 'ok'})
    } else {
      setItems( prevItems => {
      return [{id: uuid(), item},...prevItems]
    });
    }
    
  }
  return (
    <View style={ styles.contianer}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem}/>
      <FlatList data={ items } renderItem={ ( { item } ) => <Items item={ item} deleteItem={deleteItem}  />}
        />
    </View>
  )
}

const styles = StyleSheet.create( {
  contianer: {
    flex: 1,
    
  },

})

export default App