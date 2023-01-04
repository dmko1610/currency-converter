import CurrencyListItem from "@components/CurrencyListItem";
import { ScrollView } from "react-native";
import uuid from "react-native-uuid";
import { styles } from "./styles";

export default function CurrencyList({ navigation }) {
  const currencyList = ["RUB", "KZT", "USD", "EUR"];
  return (
    <ScrollView style={styles.list}>
      {currencyList.map((currency) => (
        <CurrencyListItem
          navigation={navigation}
          key={uuid.v4()}
          currency={currency}
        />
      ))}
    </ScrollView>
  );
}
