import EUR from "@assets/svg/EUR";
import KZT from "@assets/svg/KZT";
import RUB from "@assets/svg/RUB";
import USD from "@assets/svg/USD";
import { NavigationRouteContext } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export default function CurrencyListItem({ navigation, currency }) {
  const icons = new Map([
    ["KZT", KZT],
    ["USD", USD],
    ["RUB", RUB],
    ["EUR", EUR],
  ]);
  const renderIcon = (currency) => {
    const Icon = icons.get(currency);
    return <Icon width={60} height={40} />;
  };
  return (
    <Pressable
      style={styles.listItem}
      onPress={() => {
        navigation.push("ResultCurrencySelector");
      }}
    >
      <Text style={styles.listItemText}>{currency}</Text>
      {renderIcon(currency)}
    </Pressable>
  );
}
