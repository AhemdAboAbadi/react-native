import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState, useCallback } from "react";

export default function App() {
  const [name, setName] = useState("Ahmed");
  const handelChange = useCallback(
    (val) => {
      setName(val);
    },
    [name]
  );

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <TextInput
        multiline
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={(val) => handelChange(val)}
      />
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
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
