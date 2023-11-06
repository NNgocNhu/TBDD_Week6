import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';

export default function Screen4({navigation}) {
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
                <Text style = {styles.text} >Your orders
                </Text>
                <Image style={{height:25,width:25}} source={require('../assets/Image 177.png')}/> 
    </View>

        <View style={styles.box}>
          <View style={{flex:1,justifyContent:'space-between',padding:20}}>
            <Text style = { styles.text1 } >CAFE DELIVERY </Text>
            <Text style = { styles.text1 } >Order #18 </Text> 
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center', paddingRight:20}}>
            <Text style = { styles.text2 } > $5
            </Text> 
          </View>
        </View>
        <View style={styles.box2}>
          <View style={{flex:1,justifyContent:'space-between',padding:20}}>
            <Text style = { styles.text1 } > CAFE  </Text>
            <Text style = { styles.text1 } > Order #18</Text> 
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center', paddingRight:20}}>
            <Text style = { styles.text2 } >  $25
            </Text> 
        </View>
      </View>
     {data.map((item) => {
                return ( <View style = {[{ flex: 2   } ]} key = { item.id } >
                  <View style={styles.box1}>
                    <View style={{flex:1,flexDirection:'row'}}>
                      <Image style = {styles.img1} 
                              source = {{ uri: item.img1 }}/> 
                      <View style={{flexDirection:'column',marginLeft:8}}>
                        <Text style = { styles.text1B } > { item.name }</Text>
                        <View style={{flexDirection:'row',alignItems:'center', marginTop:20}}>
                          <Image style = {styles.img2}  
                                source = {{ uri: item.img2 }}/>
                          <Text style = { styles.text2B } > { item.price } </Text> 
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
         <View style={{flex:2, justifyContent:'center', alignItems:'center',marginTop:40}}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Screen4')
          }}
        style={{height:44,width:347,backgroundColor:'#EFB034',borderRadius:6,padding:10}} >
              <Text  style={{fontFamily:'Inter', fontSize:16, fontWeight:400, color:'#fff',textAlign:'center'}}>PAY NOW</Text>
          </TouchableOpacity>
        </View>
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
    text1B: {
      color:'#171A1F',
      fontSize:16,
      fontWeight:500,
      fontFamily:'Inter',
  },
  text2B: {
      color: "#565E6C",
      fontFamily: "Inter",
      fonSize: 12,
      fontWeight: 400,
  },
    box: {
      flex:3,
      height: 100,
      width: 350,
      borderRadius: 6,
      borderWidth:1,
      borderColor:'#BCC1CA',
      marginTop:10,
      backgroundColor:'#00BDD6',
      flexDirection:'row', 
      justifyContent:'center'
    },
    box2: {
      flex:3,
      height: 100,
      width: 350,
      borderRadius: 6,
      borderWidth:1,
      borderColor:'#BCC1CA',
      marginTop:10,
      backgroundColor:'#8353E2',
      flexDirection:'row', 
      justifyContent:'center'
  },
    box1:{
      height: 64,
      width: 350,
      borderRadius: 4,
      borderWidth:1,
      borderColor:'#BCC1CA',
      marginTop:20,
      marginBottom:10,
      backgroundColor: 'rgba(255, 255, 255, 0.00)',
      flexDirection:'row', 
      justifyContent:'center'
    }
});
