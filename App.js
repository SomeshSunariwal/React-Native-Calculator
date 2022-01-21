import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

import CalculatorRows from "./Components/CalculatorRows/CalculatorRows";
import CalculatorHeader from "./Components/Header/Header";
import CalculationBox from "./Components/CalculationBox/CalculationBox";
import HistoryBox from "./Components/HistoryBox/HistoryBox";

export default function App() {
  const CalculatorCalculationProps = {
    UpperVariable: "",
    LowerVariable: "0",
    Operator: "",
  };

  const [CalculatorCalculation, setCalculatorCalculation] = useState(
    CalculatorCalculationProps
  );

  // When Any Number is pressed
  const KeyPressed = (key) => {
    key = key.toString();
    switch (key) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        setCalculatorCalculation((prev) => ({
          ...prev,
          LowerVariable:
            prev.Operator === ""
              ? prev.LowerVariable + key
              : prev.LowerVariable,
          UpperVariable:
            prev.Operator != "" ? prev.UpperVariable + key : prev.UpperVariable,
        }));

        break;
      case "X":
      case "÷":
      case "%":
      case "+":
      case "-":
        setCalculatorCalculation((prev) => ({
          ...prev,
          LowerVariable: "0",
          UpperVariable: prev.LowerVariable,
        }));
        break;
      case "C":
        setCalculatorCalculation(CalculatorCalculationProps);
        break;
      case "=":
        break;
      case "()":
        break;
      case "+/-":
        break;
      default:
        alert("Error " + key);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.OuterBox}>
      <View style={styles.container}>
        <CalculatorHeader />
      </View>
      <View style={styles.DesignBox}>
        <HistoryBox>History Box</HistoryBox>
      </View>
      <View style={styles.CalculationBoxStyle}>
        <CalculationBox CalculatorCalculation={CalculatorCalculation}>
          Calculation
        </CalculationBox>
      </View>
      <View style={styles.CalculatorButtonsBox}>
        <CalculatorRows KeyPressed={KeyPressed} />
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
    backgroundColor: "#F5F5F5",
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
