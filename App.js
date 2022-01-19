import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import CalculatorRows from "./Components/CalculatorRows/CalculatorRows";
import CalculatorHeader from "./Components/Header/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.OuterBox}>
      <View style={styles.container}>
        <CalculatorHeader />
      </View>
      <View>
        <CalculatorRows />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OuterBox: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
