import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const CalculatorButton = () => {
  const OnPressHandle = () => {
    alert("You Pressed it");
  };
  return (
    <View styles={styles.container}>
      <Button onPress={OnPressHandle} title="7" />
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
