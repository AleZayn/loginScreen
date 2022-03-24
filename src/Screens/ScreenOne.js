import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";

const ScreenOne = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContaine}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>React Native</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', paddingTop: '40%'}}>
        <Text style={{color: '#1e1e2a', fontSize: 40, fontWeight: 'bold', letterSpacing: 2}}>Hey User</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', paddingTop: 20}}>
        <Text style={{color: '#1e1e2a', fontSize: 20, letterSpacing: 1, textAlign: 'center'}}>Design Simple Login Screen {'\n'}in React Native.</Text>
        </View>
        <View style={{paddingTop: 30, top: 0, left: 0,}} >
        <TouchableOpacity 
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}>
        <Text style={{alignSelf: 'center', backgroundColor: '#1e1e2a', padding: 10, color: 'white', paddingHorizontal: 80, fontSize: 20, borderRadius: 10, }}>Go to Login Page</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View
        style={styles.bottombg}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  logo: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  logoText: { fontWeight: "bold", color: "#1e1e2a", fontSize: 17 },
  secondContaine: {
    backgroundColor: "white",
    width: "100%",
    height: "85%",
    borderBottomLeftRadius: 200,
    // marginBottom: 10,
  },
  bottombg: {
    backgroundColor: "pink",
    paddingTop: 200,
    borderTopRightRadius: 300,
    marginRight: 150,
  }
});
export default ScreenOne;
