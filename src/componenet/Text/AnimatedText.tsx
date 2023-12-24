import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
} from 'react-native-reanimated';

interface Props {
    delay?:number,
    value:number
}


function AnimatedText(Props:Props) {
    let delay = Props.delay !== undefined ? Props.delay : 0;
    const offset = useSharedValue(0.5);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{scale: offset.value}],
    }));

     function start(){
        'worklet'; 
        offset.value = withDelay(
          delay,
          withRepeat(
            withTiming(
              Number(Number(0.2 + Math.random()).toFixed(1)),
              {duration:300},
            ),
            1,
            true,
            () => {
              offset.value = withDelay(
                delay,
                withTiming(
                  Number(Number(0.2 + Math.random()).toFixed(1)),
                  {duration: 200},
                  start,
                ),
              );
            },
          ),
        );
     };

    function stop(){
        'worklet'; 
        offset.value = withTiming(0.4, {duration: 400},()=>start());
    }

   

    React.useEffect(() => {
        start()
        // offset.value = withDelay(delay,withRepeat(withTiming(1, {duration: 500},(e)=>{
        //     // offset.value = withDelay(delay, withTiming(0.5, {duration: 500}));
        // }),-1,true))
        // offset.value = withDelay(delay,withRepeat(withTiming(1, {duration: 500}),-1,true,()=>console.log("dd")));
    }, []);

  return (
    <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  );
}

export default React.memo(AnimatedText)

const styles = StyleSheet.create({
  container: {
    marginHorizontal:2,
  },
  box: {
    height: 35,
    width: 4,
    backgroundColor: '#b58df1',
    borderRadius: 10,
  },
});
