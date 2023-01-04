import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CurrencyList from "@components/CurrencyList";
import ListHeader from "@components/ListHeader";

export default function ResultCurrencySelectorScreen() {
  return (
    <SafeAreaView style={styles.androidAreaView}>
      <ListHeader title={"Pick the currency you want to convert to"} />
      <CurrencyList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
