import { styles } from "@components/ListHeader/styles";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function ListHeader({ title }) {
  const [fontsLoaded] = useFonts({
    "Sarpanch-Medium": require("@assets/fonts/Sarpanch-Medium.ttf"),
    "Sarpanch-Regular": require("@assets/fonts/Sarpanch-Regular.ttf"),
    "Sarpanch-Bold": require("@assets/fonts/Sarpanch-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <View style={styles.header} onLayout={onLayoutRootView}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
