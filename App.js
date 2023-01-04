import FromInput from "@components/FromInput";
import ToInput from "@components/ToInput";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  const API_KEY = "PCa4LnOtgWpTNaig0xmibUd1P3hFbq3X";
  const [toValue, setToValue] = useState(1);
  const [fromValue, setFromValue] = useState(1);
  const [forwardRate, setForwardRate] = useState(0);
  const [backwardRate, setBackwardRate] = useState(0);
  const RUB_KZT = 6.4085;
  const KZT_RUB = 0.156;
  const FROM_CURRENCY = "RUB";
  const TO_CURRENCY = "KZT";

  const getForwardRate = async () => {
    const response = await fetch(
      `https://api.apilayer.com/fixer/latest?base=${FROM_CURRENCY}&symbols=${TO_CURRENCY}`,
      {
        headers: {
          apikey: API_KEY,
        },
      }
    );
    const json = await response.json();
    return json.rates[TO_CURRENCY];
  };

  const calclateBackwardRate = () => {
    console.log('what is here ', forwardRate)
    setBackwardRate(1 / forwardRate);
  };

  useEffect(() => {
    // setForwardRate(getForwardRate());
    calclateBackwardRate();
  }, []);
  return (
    <View style={styles.container}>
      <FromInput
        rate={forwardRate}
        onChange={setToValue}
        cb={setFromValue}
        value={fromValue}
      />
      <ToInput
        rate={backwardRate}
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
