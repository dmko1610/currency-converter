import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CurrencyConverterScreen from "@screens/CurrencyConverterScreen";
import BaseCurrencySelectorScreen from "@screens/BaseCurrencySelectorScreen";
import ResultCurrencySelectorScreen from "@screens/ResultCurrencySelectorScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="BaseCurrencySelector"
      >
        <Stack.Screen
          name="BaseCurrencySelector"
          component={BaseCurrencySelectorScreen}
        />
        <Stack.Screen
          name="ResultCurrencySelector"
          component={ResultCurrencySelectorScreen}
        />
        <Stack.Screen
          name="CurrencyConverter"
          component={CurrencyConverterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
