import {
  Alert,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
  Button,
} from 'react-native';
import React, { useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
// Reference: https://openbase.com/js/react-native-countdown-circle-timer
import Icon from 'react-native-vector-icons/FontAwesome';
// Refernce: https://www.npmjs.com/package/react-native-vector-icons#ios

const TimerScreen = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [key, setKey] = useState(0)

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.heading}>Timer</Text>
          <Text style={styles.subtext}>First Timer Screen - 30 Seconds</Text>
        </View>
        <View style={styles.timer}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            key={key}
            duration={30}
            colors={['#00FF54', '#D9FF4E', '#FF6C25', '#FF0017']}
            colorsTime={[30, 20, 10, 0]}
            onComplete={() => {
              // return { shouldRepeat: true, delay: 1.5 }
              setKey(prevKey => prevKey + 1)
              setIsPlaying(false)
              console.log("Done")
              Alert.alert('Timer Complete')
            }}
          >
            {({ remainingTime, color }) => (
              <View style={styles.timer}>
                <Text style={{ color, fontSize: 50 }}>
                  {remainingTime}
                </Text>
                <Button
                  color={color}
                  title={isPlaying === false ? 'Play' : 'Pause'}
                  onPress={isPlaying === false ? () => setIsPlaying(true) : () => setIsPlaying(false)}
                />
              </View>
            )}
          </CountdownCircleTimer>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("Timer Screen");
            //   navigation.navigate("Forms");
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    overflow: "hidden",
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 64,
    justifyContent: "space-between",
    display: "flex",
    height: "100%",
  },
  heading: {
    fontSize: 48,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#fff",
    width: "100%",
  },
  subtext: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Arial",
    marginTop: 8,
    marginBottom: 32,
  },
  button: {
    width: "100%",
    height: 64,
    backgroundColor: "#E6F5FC",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: 8,
    borderRadius: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "Arial",
    color: "#2A2A2A",
    fontWeight: "bold",
  },
  timer: {
    alignItems: "center",
  },
});