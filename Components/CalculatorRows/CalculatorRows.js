import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CalculatorButton from "../Button/CalculatorButton";

export default function CalculatorRows() {
  const OnNumberClick = (number) => {
    console.log(number);
  };

  return (
    <View style={styles.OuterBorder}>
      <View style={styles.Row1}>
        <CalculatorButton number={1} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={2} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={3} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={3} OnNumberClick={OnNumberClick} />
      </View>
      <View style={styles.Row2}>
        <CalculatorButton number={7} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={8} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={9} OnNumberClick={OnNumberClick} />
        <CalculatorButton number="*" OnNumberClick={OnNumberClick} />
      </View>
      <View style={styles.Row3}>
        <CalculatorButton number={4} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={5} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={6} OnNumberClick={OnNumberClick} />
        <CalculatorButton number="-" OnNumberClick={OnNumberClick} />
      </View>
      <View style={styles.Row4}>
        <CalculatorButton number={1} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={2} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={3} OnNumberClick={OnNumberClick} />
        <CalculatorButton number="+" OnNumberClick={OnNumberClick} />
      </View>
      <View style={styles.Row5}>
        <CalculatorButton number="+/-" OnNumberClick={OnNumberClick} />
        <CalculatorButton number={0} OnNumberClick={OnNumberClick} />
        <CalculatorButton number="." OnNumberClick={OnNumberClick} />
        <CalculatorButton number="=" OnNumberClick={OnNumberClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OuterBorder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
  Row1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  Row2: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Row3: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Row4: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Row5: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
