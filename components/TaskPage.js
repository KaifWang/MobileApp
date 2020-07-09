import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';

const TaskPage = () => {
const [items, setItems] = useState([
  {id: 1, text: 'Milk'},
  {id: 2, text: 'Bread'},
  {id: 3, text: 'Eggs'},
  {id: 4, text: 'Juice'}
]);

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id)
    })
};

const addItem = (text) => {
  if(!text){
    Alert.alert('Error', 'Please enter an item');
  } else {
    setItems(prevItems => {
      return[{id:Math.random(), text}, ...prevItems]
      });
  }
};


  return(
    <View style={styles.container}>
      <Header />
      <AddItem addItem = {addItem}/>
      <FlatList 
      data={items} 
      renderItem={({item}) => <ListItem item={item} 
      deleteItem={deleteItem}
       />}
      />
      </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex : 1,
    paddingTop:60
  }

});

export default TaskPage;