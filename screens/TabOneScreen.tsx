import * as React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const FadeInView = props => {
  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(()=>{
    Animated.timing(fadeAnim,{toValue:1 , duration:4000}).start()
  },[])

  return(
  <Animated.View style={{...props.style, opacity:fadeAnim}}>
    {props.children}
  </Animated.View>
  );
}

export default function TabOneScreen() {
  return (
   <View style={styles.container}>
     <FadeInView style={styles.animacao}>

        <Text style={styles.texto}>
          Texto que aparece
        </Text>
     </FadeInView>
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
  animacao:{
    width:300,
    height:50,
    backgroundColor:'darkred'
  },
  texto:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    margin:10
  }
});
