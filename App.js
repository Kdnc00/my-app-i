import React from 'react';
import { Text,View,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';


const Search = () => {
  return (
    <View>
     <Text>Search</Text>
    </View>
   
  ); 
};
const Cart=()=>{
  return(
    <View>
     <Text>Cart</Text>
    </View>
   
  );
};
const Profile=()=>{
  return(
    <View>
     <Text>Profile</Text>
    </View>
  
  )
}
const More =()=>{
  return(
    <View>
     <Text>More</Text>
    </View>
  )
}


const Tab= createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen options={{headerShown:false,}} name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="More" component={More}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles= StyleSheet.create({
  container:{
    flex:1,


  },
  
});