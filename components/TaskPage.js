import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';

const TaskPage = ({navigation}) => {
const [items, setItems] = useState([
  {id: 1, text: 'EECS281 Final Exam Prep'},
  {id: 2, text: 'Play League of Legend'},
  {id: 3, text: 'Eat budae jjigae'},
  {id: 4, text: 'Sleep'}
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
      navigation={navigation}
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