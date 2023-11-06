import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';

export default function Screen2({navigation}) {
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://6540beeb45bedb25bfc27f80.mockapi.io/shop")
            .then((response) => response.json())
            .then((json) => { setData(json) });
    }, []);
    return (
        <ScrollView>
        <View style = { styles.container } >
            <View style={{ flex: 3 ,height:70,width:'100%', flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}> 
                <TouchableOpacity onPress={() => {
            navigation.navigate('Screen1')
          }}>
                <Image style={{height:21,width:21}} source={require('../assets/Frame.png')}/>
                </TouchableOpacity>
                <Text style = {styles.text1} > Shops Near Me 
                </Text>
                <Image style={{height:25,width:25}} source={require('../assets/Image 177.png')}/> 
            </View>
            
            {data.map((item) => {
                return ( <TouchableOpacity onPress={() => {
                    navigation.navigate('Screen3')
                  }}  style = {[styles.box,{ flex: 9 } ]} key = { item.id } >
                    <View style = {{ flex: 4 }} >
                        <Image style = {{
                                height: 114,
                                width: 347,
                                resizeMode: 'stretch'}} 
                                source = {{ uri: item.image }}/> 
                    </View >
                    <View style = {{
                            flex: 3,
                            flexDirection: 'column',
                            justifyContent: 'center',}} >
                        <View style = {{flex:1,
                                flexDirection: 'row',
                                justifyContent: 'center',padding:12
                                }} >
                            <View style = { styles.button } >
                                <Image style = {{ height: 20, width: 20}}
                                    source = {{ uri: item.image1 }}/> 
                                <Text style = { styles.textC } > { item.text2 } </Text> 
                            </View > 
                            <View style = { styles.button } >
                                <Image style = {{ height: 18, width: 18}} 
                                    source = {{ uri: item.image2 }}/> 
                                <Text style = { styles.textC1 } > { item.text2 } </Text>
                            </View > 
                            <View>
                                <Image style={{height:25, width:20, marginRight:5,resizeMode:'stretch'}} source = {{ uri: item.image3 }} />     
                             </View>
                        </View>
                        <View style={{flex:1,marginBottom:10}}> 
                            <Text style = { styles.text2 } > { item.name } </Text> 
                            <Text style = { styles.text3 } > { item.address } </Text>   
                        </View>
                        
                    </View > 
                  
                    </TouchableOpacity>
                )
            })
        } </View>
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

    box: {
        height: 200,
        width: 347,
        borderRadius: 6,
        marginTop:10,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
   
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        height: 30,
        width: 140,
        marginRight:8,
        backgroundColor: '#F3F4F6'
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
