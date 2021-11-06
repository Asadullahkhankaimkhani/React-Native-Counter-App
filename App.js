import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter Application</Text>
      <Button
        title="Increment"
        onPress={() => setNumber(number + 1)}
        color="blue"
      ></Button>
      <View style={styles.margin}>
        <Button
          title="Decrement"
          onPress={() => {
            if (number < 0) {
              setNumber(0);
            } else {
              setNumber(number - 1);
            }
          }}
          color="red"
        ></Button>
      </View>
      <View style={styles.margin}>
        <Button title="Reset" onPress={() => setNumber(0)}></Button>
      </View>
      <Text style={styles.margin}> {number}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    paddingBottom: 10,
  },
  margin: {
    marginTop: 20,
    fontSize: 20,
  },
});
