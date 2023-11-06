import { StatusBar } from 'expo-status-bar';

import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Screen1({navigation}){
  var [data, setData] = useState([]);
  useEffect(() => {
      fetch("https://6540beeb45bedb25bfc27f80.mockapi.io/shop")
          .then((response) => response.json())
          .then((json) => { setData(json) });
  }, []);
  return ( 
      
      <View style={styles.container}>
          <View style={{flex:1}}>
              <Text style={styles.text1}>Welcome to Cafe world</Text>
          </View>
      {data.map((item) => {
          return ( 
            
              <View style = {[{ flex: 1, justifyContent:'center', alignItems:'center',}]} key = { item.id }>
              <Image style = {{
                  height: 62,
                  width: 200, 
                  resizeMode: 'stretch'}} 
                  source = {{ uri: item.image }}/> 
              </View>
          )
          })
      } 
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Screen2')
          }}
        style={{height:40,width:300,backgroundColor:'rgba(0, 189, 214, 1)',borderRadius:6,padding:10}} >
              <Text  style={{fontFamily:'Inter', fontSize:14, fontWeight:400, color:'#fff',textAlign:'center'}}>GET STARTED</Text>
          </TouchableOpacity>
         

          
      </View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f3f4f6',
      justifyContent: 'center',
      alignItems: 'center',
  },
  text1: {
      color:'#171A1F',
      fontSize:24,
      fontWeight:700,
      fontFamily:'Inter',
      marginRight:70
  },
  text2: {
      color: "#171A1F",
      fontFamily: "Inter",
      fonSize: 16,
      fontWeight: 700,
      
  },
  text3: {
      color: "#171A1F",
      fontFamily: "Inter",
      fonSize: 14,
      fontWeight: 400,
  },


  textC: {
      color: "#1DD75B",
      fontFamily: "Inter",
      fonSize: 14,
      fontWeight: 400,
      padding: 8,
  },
  textC1: {
      color: "#DE3B40",
      fontFamily: "Inter",
      fonSize: 14,
      fontWeight: 400,
      padding: 8,
  }
});