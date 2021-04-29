import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import {
  useDimentions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          flexDirection: "column", // sets the main axis
          justifyContent: "center", //main axis
          alignItems: "center", //secondary axis
        }}
      >
        <View
          style={{
            flexBasis: 100,
            width: "100%",
            height: 100,
            flexGrow: 1,
          }}
        >
          
          <ImageBackground
            source={require("./assets/background.jpg")}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            
            <View style={styles.logoContainer}>
              <Image 
                style={{
                  width: 100,
                  height: 100
                }}
                source={require('./assets/logo-red.png')}/>
              <Text>Sell What You Don't Need</Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: "salmon",
            width: "100%",
            height: 70,
          }}
        />
        <View
          style={{
            backgroundColor: "#00BFFF",
            width: "100%",
            height: 70,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //allows horizontal and vertical
    backgroundColor: "#fff",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    top: 60,
    alignItems: 'center'
  }
});
