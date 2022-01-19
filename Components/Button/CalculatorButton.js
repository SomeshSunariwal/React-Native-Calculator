import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const CalculatorButton = ({ number, OnNumberClick }) => {
  // const OnPressHandle = () => {
  //   alert("You Pressed it me");
  // };
  return (
    <View styles={styles.container}>
      <Button onPress={() => OnNumberClick(number)} title={number.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 10,
  },
});

export default CalculatorButton;
