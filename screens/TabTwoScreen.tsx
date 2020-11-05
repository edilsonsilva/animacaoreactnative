import * as React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';




export default function TabTwoScreen() {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const value = React.useState(new Animated.ValueXY({x:0,y:0}))[0]
  
  React.useEffect(()=>{
    Animated.timing(value,{toValue:{x:300,y:400}, duration:1000, useNativeDriver:false}).start()
  },[])


  function movimenta(){
    Animated.timing(value,{toValue:{x:100,y:400}, duration:3000, useNativeDriver:false}).start()
  }

  function movimenta2(){
    Animated.timing(value,{toValue:{x:0,y:0}, duration:3000, useNativeDriver:false}).start()
  }

  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <Image source={{uri:"https://images.unsplash.com/photo-1542383133-359c93195a9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}} style={styles.caixa}/>
      </Animated.View>


      <TouchableOpacity onPress={movimenta}>
        <Text style={styles.texto}>Para Baixo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={movimenta2}>
        <Text style={styles.texto}>Para Cima</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  caixa:{
    width:100,
    height:100,
    borderRadius:100/2,
    backgroundColor:'darkred'
  },
  texto:{
       padding:5,
    

  }
});
