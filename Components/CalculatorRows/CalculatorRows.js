import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CalculatorButton from "../Button/CalculatorButton";

export default function CalculatorRows({ KeyPressed }) {
  return (
    <View style={styles.OuterBorder}>
      <View style={styles.Row}>
        <CalculatorButton number="C" OnNumberClick={KeyPressed} />
        <CalculatorButton number="()" OnNumberClick={KeyPressed} />
        <CalculatorButton number="%" OnNumberClick={KeyPressed} />
        <CalculatorButton number="÷" OnNumberClick={KeyPressed} />
      </View>
      <View style={styles.Row}>
        <CalculatorButton number={7} OnNumberClick={KeyPressed} />
        <CalculatorButton number={8} OnNumberClick={KeyPressed} />
        <CalculatorButton number={9} OnNumberClick={KeyPressed} />
        <CalculatorButton number="x" OnNumberClick={KeyPressed} />
      </View>
      <View style={styles.Row}>
        <CalculatorButton number={4} OnNumberClick={KeyPressed} />
        <CalculatorButton number={5} OnNumberClick={KeyPressed} />
        <CalculatorButton number={6} OnNumberClick={KeyPressed} />
        <CalculatorButton number="-" OnNumberClick={KeyPressed} />
      </View>
      <View style={styles.Row}>
        <CalculatorButton number={1} OnNumberClick={KeyPressed} />
        <CalculatorButton number={2} OnNumberClick={KeyPressed} />
        <CalculatorButton number={3} OnNumberClick={KeyPressed} />
        <CalculatorButton number="+" OnNumberClick={KeyPressed} />
      </View>
      <View style={styles.Row}>
        <CalculatorButton number="+/-" OnNumberClick={KeyPressed} />
        <CalculatorButton number={0} OnNumberClick={KeyPressed} />
        <CalculatorButton number="." OnNumberClick={KeyPressed} />
        <CalculatorButton number="=" OnNumberClick={KeyPressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OuterBorder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#41444B",
  },
  Row: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
