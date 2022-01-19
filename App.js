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
import CalculationBox from "./Components/CalculationBox/CalculationBox";

export default function App() {
  return (
    <SafeAreaView style={styles.OuterBox}>
      <View style={styles.container}>
        <CalculatorHeader />
      </View>
      <View style={styles.DesignBox}>
        <Text>Design Area</Text>
      </View>
      <View style={styles.CalculationBoxStyle}>
        <CalculationBox>Calculation</CalculationBox>
      </View>
      <View style={styles.CalculatorButtonsBox}>
        <CalculatorRows />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OuterBox: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  DesignBox: {
    backgroundColor: "#93FFD8",
    flex: 1,
  },
  CalculationBoxStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#F5F5F5",
  },
  CalculatorButtonsBox: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
