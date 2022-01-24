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

  const [History, setHistory] = useState([]);

  const Calculator = () => {
    let result = 0;
    switch (CalculatorCalculation.Operator) {
      case "+":
        result =
          parseFloat(CalculatorCalculation.UpperVariable) +
          parseFloat(CalculatorCalculation.LowerVariable);
        break;
      case "-":
        result =
          parseFloat(CalculatorCalculation.UpperVariable) -
          parseFloat(CalculatorCalculation.LowerVariable);
        break;
      case "x":
        result =
          parseFloat(CalculatorCalculation.UpperVariable) *
          parseFloat(CalculatorCalculation.LowerVariable);
        break;
      case "÷":
        if (parseFloat(CalculatorCalculation.LowerVariable) !== 0) {
          result =
            parseFloat(CalculatorCalculation.UpperVariable) /
            parseFloat(CalculatorCalculation.LowerVariable);
        } else {
          alert("Zero Division Error");
        }
        break;
      case "%":
        result =
          parseFloat(CalculatorCalculation.UpperVariable) %
          parseFloat(CalculatorCalculation.LowerVariable);
        break;
      case "xⁿ":
        result = Math.pow(
          parseFloat(CalculatorCalculation.UpperVariable),
          parseFloat(CalculatorCalculation.LowerVariable)
        );
        break;
    }
    return result;
  };

  // When Any Number is pressed
  const KeyPressed = (key) => {
    let result = 0;
    key = key.trim();
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
        setCalculatorCalculation((prev) => ({
          ...prev,
          LowerVariable:
            prev.LowerVariable === "0" ? key : prev.LowerVariable + key,
        }));

        break;

      case ".":
        if (CalculatorCalculation.LowerVariable.split(".").length == 1) {
          console.log(CalculatorCalculation.LowerVariable.split(".").length);
          setCalculatorCalculation((prev) => ({
            ...prev,
            LowerVariable: prev.LowerVariable + key,
          }));
        }
        break;

      case "x":
      case "÷":
      case "%":
      case "+":
      case "-":
      case "xⁿ":
        result = 0;
        if (
          CalculatorCalculation.Operator != "" &&
          CalculatorCalculation.LowerVariable != "" &&
          CalculatorCalculation.LowerVariable !== "0" &&
          CalculatorCalculation.UpperVariable != ""
        ) {
          result = Calculator();
          setCalculatorCalculation((prev) => ({
            ...prev,
            LowerVariable: "0",
            UpperVariable: result,
          }));
          // Setting the History into table
          let op =
            CalculatorCalculation.Operator === "xⁿ"
              ? "pow"
              : CalculatorCalculation.Operator;
          setHistory((prev) => [
            ...prev,
            CalculatorCalculation.UpperVariable +
            " " +
            op +
            " " +
            CalculatorCalculation.LowerVariable +
            " = " +
            result,
          ]);
        } else {
          setCalculatorCalculation((prev) => ({
            ...prev,
            LowerVariable: "0",
            UpperVariable:
              prev.LowerVariable === "0"
                ? prev.UpperVariable
                : prev.LowerVariable,
            Operator: key,
          }));
        }
        break;

      case "C":
        setCalculatorCalculation(CalculatorCalculationProps);
        break;

      case "=":
        result = 0;
        if (
          CalculatorCalculation.Operator != "" &&
          CalculatorCalculation.LowerVariable != "" &&
          CalculatorCalculation.UpperVariable != ""
        ) {
          result = Calculator();
          setCalculatorCalculation((prev) => ({
            ...prev,
            LowerVariable: "0",
            UpperVariable: result,
          }));
          // Setting the History into table
          let op =
            CalculatorCalculation.Operator === "xⁿ"
              ? "pow"
              : CalculatorCalculation.Operator;
          setHistory((prev) => [
            ...prev,
            CalculatorCalculation.UpperVariable +
            " " +
            op +
            " " +
            CalculatorCalculation.LowerVariable +
            " = " +
            result,
          ]);
        }
        break;

      case "+/-":
        // Handling switching between making number reverse
        setCalculatorCalculation((prev) => ({
          ...prev,
          LowerVariable:
            prev.LowerVariable.charAt(0) === "-"
              ? prev.LowerVariable.slice(1)
              : "-" + prev.LowerVariable,
        }));
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
        <HistoryBox History={History} setHistory={setHistory}>
          History Box
        </HistoryBox>
      </View>
      <View style={styles.CalculationBoxStyle}>
        <CalculationBox CalculatorCalculation={CalculatorCalculation} />
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
