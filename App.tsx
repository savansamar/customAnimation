import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import AnimatedText from './src/componenet/Text/AnimatedText';

function App(){

  const fluctuateDelay = (index:number)=>{
    return 0
  }
  

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%',flexDirection: 'row'}}
        data={Array(20).fill(0)}
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({i, index}: any) => (
          <AnimatedText
            delay={fluctuateDelay(index)}
            value={Number(Math.random().toFixed(1))}
          />
        )}
      />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});