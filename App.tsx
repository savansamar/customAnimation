import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import AnimatedText from './src/componenet/Text/AnimatedText';
import MemorizedItem from './src/list/MemorizedItem';

function App(){
   
  const renderItem = React.useCallback(function({item,index}:any){
    return (
      <MemorizedItem item={item} index={index} />
    );
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={Array(20).fill(0)}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={renderItem}
        keyExtractor={(_,index)=>index.toString()}
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