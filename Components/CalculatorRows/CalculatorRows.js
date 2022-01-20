import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CalculatorButton from "../Button/CalculatorButton";

export default function CalculatorRows() {
  const OnNumberClick = (number) => {
    console.log(number);
    alert("You have pressed : " + number);
  };

  return (
    <View style={styles.OuterBorder}>
      <View style={styles.Row}>
        <CalculatorButton number="C" OnNumberClick={OnNumberClick} />
        <CalculatorButton number="()" OnNumberClick={OnNumberClick} />
        <CalculatorButton number="%" OnNumberClick={OnNumberClick} />
        <CalculatorButton number="%" OnNumberClick={OnNumberClick} />
      </View>
      <View style={styles.Row}>
        <CalculatorButton number={7} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={8} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={9} OnNumberClick={OnNumberClick} />
        <CalculatorButton number="*" OnNumberClick={OnNumberClick} />
      </View>
      <View style={styles.Row}>
        <CalculatorButton number={4} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={5} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={6} OnNumberClick={OnNumberClick} />
        <CalculatorButton number="-" OnNumberClick={OnNumberClick} />
      </View>
      <View style={styles.Row}>
        <CalculatorButton number={1} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={2} OnNumberClick={OnNumberClick} />
        <CalculatorButton number={3} OnNumberClick={OnNumberClick} />
        <CalculatorButton number="+" OnNumberClick={OnNumberClick} />
      </View>
      <View style={styles.Row}>
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
