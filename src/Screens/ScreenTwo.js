import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

const ScreenTwo = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.mainContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Login page</Text>
        </View>
        <View style={{paddingTop: 150}}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your Email"

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Password"
      />
        </View>
        <View style={{paddingTop: 30, top: 0, left: 0,}} >
        <TouchableOpacity 
        title="Go to Login"
        onPress={() => { Alert.alert("Thankyou")}}>
        <Text style={{alignSelf: 'center', backgroundColor: '#1e1e2a', padding: 10, color: 'white', paddingHorizontal: 80, fontSize: 20, borderRadius: 10, }}>Log in</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        // height: "100%",
        // width: "100%",
        flex: 1,

      },
      logo: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingTop: 50,
        paddingHorizontal: 30,
      },
      logoText: { fontWeight: "600", color: "black", fontSize: 17 },
      input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
      },
});
export default ScreenTwo;

