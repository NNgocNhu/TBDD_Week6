import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';

export default function Screen4() {
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://65095f9af6553137159b4cbc.mockapi.io/postsa")
            .then((response) => response.json())
            .then((json) => { setData(json) });
    }, []);
    return (
<ScrollView>
  <View style = { styles.container } >
    <View style={{ flex: 1 ,height:70,width:'100%', flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}> 
    <TouchableOpacity onPress={() => {
            navigation.navigate('Screen3')
          }}>
                <Image style={{height:21,width:21}} source={require('../assets/Frame.png')}/>
                </TouchableOpacity>
                <Text style = {styles.text} > Drinks
                </Text>
                <Image style={{height:25,width:25}} source={require('../assets/Image 177.png')}/> 
    </View>
    {data.map((item) => {
      return (
        
      <View style = {[{ flex: 3 } ]} key = { item.id } >
        
        <View style={styles.box}>
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style = { styles.text1 } > { item.name } </Text>
            <Text style = { styles.text1 } > { item.nameDrink } </Text> 
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',}}>
            <Text style = { styles.text2 } > { item.price } 
          </Text> 
          </View>
        </View>
        <View style={styles.box}>
          <View style={{flex:1,flexDirection:'row'}}>
            <Image style = {styles.img1} 
                    source = {{ uri: item.img1 }}/> 
            <View style={{flexDirection:'column',marginLeft:8}}>
              <Text style = { styles.text1 } > { item.name } </Text>
              <View style={{flexDirection:'row',alignItems:'center', marginTop:20}}>
                <Image style = {styles.img2}  
                      source = {{ uri: item.img2 }}/>
                <Text style = { styles.text2 } > { item.price } </Text> 
            </View>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',
          alignItems:'center'}}>
            <View >
            <Image style = {styles.img3} 
                  source = {{ uri: item.img3 }}/>  </View>
            <Image style = {styles.img4} 
                  source = {{ uri: item.img4 }}/>
          </View>
          </View>
      </View>
    

      )
    })      
    } 
  </View>    
</ScrollView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img1:{
      height: 60,
      width: 60,
      resizeMode: 'stretch'
    },
    img2:{
      height: 12,
      width: 12,
      resizeMode: 'stretch'
    },
    img3:{
      height: 20,
      width: 20,
      resizeMode: 'stretch'
    },
    img4:{
      height: 20,
      width: 20,
      resizeMode: 'stretch'
    },
    text:{
      color:'#171A1F',
      fontSize:24,
      fontWeight:700,
    },
    text1: {
        color:'#fff',
        fontSize:16,
        fontWeight:700,
        fontFamily:'Inter',
    },
    text2: {
        color: "#fff",
        fontFamily: "Inter",
        fonSize: 20,
        fontWeight: 700,
    },
    box: {
        height: 100,
        width: 350,
        borderRadius: 6,
        borderWidth:1,
        borderColor:'#BCC1CA',
        marginTop:20,
        backgroundColor:'#00BDD6',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    
});
