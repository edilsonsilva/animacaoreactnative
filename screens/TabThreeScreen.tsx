import * as React from 'react';
import { Animated, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const images = new Array(8);
images[0] = 'https://images.unsplash.com/photo-1604176398418-ce3d22e86b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
images[1] = 'https://images.unsplash.com/photo-1604160886546-e107aecc2517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
images[2] = 'https://images.unsplash.com/photo-1591726271147-94c59f86f999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80';
images[3] = 'https://images.unsplash.com/photo-1585565931879-9bd1585ea40b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
images[4] = 'https://images.unsplash.com/photo-1604176398418-ce3d22e86b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
images[5] = 'https://images.unsplash.com/photo-1604176398418-ce3d22e86b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
images[6] = 'https://images.unsplash.com/photo-1604176398418-ce3d22e86b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
images[7] = 'https://images.unsplash.com/photo-1604176398418-ce3d22e86b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';




export default function TabThreeScreen() {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const { width: windowWidth} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView horizontal={true}
        style={styles.scrollViewStyle}
        pagingEnabled 
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {
          nativeEvent:{
            contentOffset:{
              x:scrollX
            }
          }
        }
        ])}
        scrollEventThrottle={1}>
          {images.map((image,imageIndex)=>{
            return (
              <View style={{width: windowWidth,height:250}} 
              key={imageIndex}>

                <ImageBackground source={{uri:image}} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {"imagem - "+imageIndex}
                    </Text>
                  </View>
                </ImageBackground>

                </View>
            );
          })}
          </ScrollView>

          <View style={styles.indicatorContainer}>
            {images.map((image,imageIndex)=>{
              const width = scrollX.interpolate({
                inputRange:[
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex+1)
                ],
                outputRange:[8,16,8],
                extrapolate:'clamp'
              });
              return(
                <Animated.View key={imageIndex} style={[styles.normalDot, {width}]}/>
              )
            })}
          </View>

      </View>
    </SafeAreaView>
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
  scrollContainer:{
    height:300,
    alignItems:'center',
    justifyContent:'center'
  },
  card:{
    flex:1,
    marginVertical:4,
    marginHorizontal:16,
    borderRadius:5,
    overflow:"hidden",
    alignItems:'center',
    justifyContent:'center'
  },

  textContainer:{
    backgroundColor:'rgba(0,0,0,0.6)',
    paddingHorizontal:24,
    paddingVertical:8,
    borderRadius:5
  },
  infoText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  },
  normalDot:{
    height:8,
    width:8,
    borderRadius:4,
    backgroundColor:'silver',
    marginHorizontal:4
  },

  indicatorContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }


});
