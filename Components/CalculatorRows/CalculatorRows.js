import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CalculatorButton from "../Button/CalculatorButton";

export default function CalculatorRows() {
  return (
    <View>
      <CalculatorButton number={1} />
      <CalculatorButton number={2} />
      <CalculatorButton number={3} />
      <CalculatorButton number={4} />
      <CalculatorButton number={5} />
      <CalculatorButton number={6} />
      <CalculatorButton number={6} />
    </View>
  );
}

const styles = StyleSheet.create({
  OuterBorder: {},
});
