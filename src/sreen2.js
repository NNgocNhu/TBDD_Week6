import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

function screen2() {
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://6540beeb45bedb25bfc27f80.mockapi.io/shop")
            .then((response) => response.json())
            .then((json) => { setData(json) });
    }, []);
    return ( 
        <View style = { styles.container } >
            <View style={{height:70,width:'100%', flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}> 
                <Image style={{height:30,width:30}} source={require('../assets/Frame.png')}/>
                <Text style = {styles.text1} > Shops Near Me 
                </Text>
                <Image style={{height:30,width:30}} source={require('../assets/Image 177.png')}/> 
            </View>
            {data.map((item) => {
                return ( <View style = {[styles.box, { flex: 1 }]} key = { item.id } >
                    <View style = {{ flex: 1, }} >
                        <Image style = {
                            {
                                height: 114,
                                width: 347,
                                resizeMode: 'stretch'
                            }
                        } source = {
                            { uri: item.image }
                        }
                        /> 
                    </View >
                    <View style = {{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',}} >
                        <View style = {{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                padding: 10, marginLeft:5}} >
                            <View style = { styles.button } >
                                <Image style = {{ height: 20, width: 20, marginTop: 5 }}
                                    source = {{ uri: item.image1 }}/> 
                                <Text style = { styles.textC } > { item.text2 } </Text> 
                            </View > 
                            <View style = { styles.button } >
                                <Image style = {{ height: 18, width: 18, marginTop: 5 }} 
                                    source = {{ uri: item.image2 }}/> 
                                <Text style = { styles.textC1 } > { item.text2 } </Text>
                            </View > 
                            <View>
                                <Image style={{height:25,width:20, marginRight:5 ,marginTop:2 ,resizeMode:'stretch'}} source = {{ uri: item.image3 }} />     
                             </View>
                        </View>
                        <View> 
                            <Text style = { styles.text2 } > { item.name } </Text> 
                            <Text style = { styles.text3 } > { item.address } </Text>   
                        </View>
                    </View > 
                    </View>
                )
            })
        } </View>

);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
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
        height: 350,
        width: 347,
        marginTop: 15,
        borderRadius: 6,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        width: 140,
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
export default screen2;