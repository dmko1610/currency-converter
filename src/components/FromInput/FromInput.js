import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

export default function FromInput({ rate, onChange, cb, value }) {
  const [focus, setFocus] = useState(false);
  const calculateValue = (value) => {
    cb(value);
    onChange(value * rate);
  };

  useEffect(() => {
    calculateValue(1);
  }, []);

  useEffect(() => {
    if (focus) {
      calculateValue(1);
    }
  }, [focus]);

  return (
    <TextInput
      keyboardType="numeric"
      onChangeText={calculateValue}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      style={styles.input}
      value={value.toString()}
      defaultValue="1"
    />
  );
}
