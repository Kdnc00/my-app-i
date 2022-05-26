import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';

const Apparel = () => {
    return (
      <View>
       <Text>Search</Text>
      </View>
     
    ); 
  };
  const Beauty=()=>{
    return(
      <View>
       <Text>Cart</Text>
      </View>
     
    );
  };
  const Shoes=()=>{
    return(
      <View>
       <Text>Profile</Text>
      </View>
    
    )
  }
  const SeeAll=()=>{
      return(
          <View>
           <Text>SeeAll</Text>
          </View>
      )
  }

const Stack=createNativeStackNavigator();
const stack=()=>{
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name='Apparel' component={Apparel}/>
      <Stack.Screen name='Beauty' component={Beauty}/>
      <Stack.Screen name='Shoes' component={Shoes}/>
      <Stack.Screen name='SeeAll' component={SeeAll}/>
     </Stack.Navigator>
    
    
    </NavigationContainer>
}



const Home = ({ navigation }) => {
    return (
        <View>
            
            <Text style={styles.text}>Categories</Text>
            
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchable}
                    onPress={() => {
                        navigation.navigate("Apparel");
                    }}
                >
                    <Text>Apparel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}
                    onPress={() => {
                        navigation.navigate("Beauty");
                    }}
                >
                    <Text>Beauty</Text>
                   
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}
                    onPress={() => {
                        navigation.navigate("Shoes");

                    }}
                >
                    <Text>Shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}
                    onPress={() => {
                        navigation.navigate("SeeAll");

                    }}
                >
                    <Text>SeeAll</Text>
                </TouchableOpacity>
               
            </View>
            <View>
              <Text style={styles.textContainer}>Latest</Text>
            

            </View>
            

         
        </View>
        
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',




    },
    text: {
        fontSize: 30,
        color: `#2f4f4f`,
        margin:20,
        marginTop:50,
        marginBottom:20,
        fontWeight: 'bold',

    },
    touchable: {
        backgroundColor: 'pink',
        width: 100,
        height: 100,
        paddingVertical: 10,
        borderRadius: 50,
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    textContainer:{
        
        fontSize: 30,
        color: `#2f4f4f`,
        margin:20,
        marginTop:90,
        marginBottom:40,
        fontWeight: 'bold',
    }
});