import CurrencyList from "@components/CurrencyList";
import ListHeader from "@components/ListHeader";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function BaseCurrencySelectorScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.androidAreaView}>
      <ListHeader title={"Pick the currency you want to convert from"} />
      <CurrencyList navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
