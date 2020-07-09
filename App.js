import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import TaskPage from './components/TaskPage';
import Timer from './components/Timer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
      <Stack.Screen name="Tasks" component={TaskPage} />
      <Stack.Screen name="Choose Mode" component={ChooseMode} />
      <Stack.Screen name="Timer" component={Timer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const HomeScreen = ({navigation})=>{
  return(
    <View style = {styles.container}>
    <Button title = "Start Task" color="#007AFF" 
         onPress={() => navigation.navigate('Choose Mode')} />
    </View>
  )
}
const ChooseMode = ({navigation}) =>{
  return(
    <View style = {styles.container}>
    <Button title = "Start a Task from Task List" color="#007AFF" 
         onPress={() => navigation.navigate('Tasks')} />
    <Button title = "Start and add to Task List later" color="#007AFF" 
         onPress={() => navigation.navigate('Timer')} />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent: 'center',
    alignItems:'center'
  },

});

export default App;