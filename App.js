import FromInput from "@components/FromInput";
import ToInput from "@components/ToInput";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  const [toValue, setToValue] = useState(1);
  const [fromValue, setFromValue] = useState(1);
  const RUB_KZT = 6.4085;
  const KZT_RUB = 0.156;

  return (
    <View style={styles.container}>
      <FromInput
        rate={RUB_KZT}
        onChange={setToValue}
        cb={setFromValue}
        value={fromValue}
      />
      <ToInput
        rate={KZT_RUB}
        onChange={setFromValue}
        cb={setToValue}
        value={toValue}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 40,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
