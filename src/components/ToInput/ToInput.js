import { ValueContext } from "@contexts/ValueContext";
import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

export default function ToInput({ rate, onChange, cb, value }) {
  const [focus, setFocus] = useState(false);
  const calculateValue = (value) => {
    cb(value);
    onChange(value * rate);
  };

  useEffect(() => {
    if (focus) {
      calculateValue(1);
    }
  }, [focus]);

  return (
    <TextInput
      // placeholder="0.0"
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
