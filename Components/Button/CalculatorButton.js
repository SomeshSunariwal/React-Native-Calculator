import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const CalculatorButton = ({ number, OnNumberClick }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.ButtonStyle}>
        <Button
          color="transparent"
          onPress={() => OnNumberClick(number)}
          title={number.toString()}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: 5,
    backgroundColor: "red",
    width: "21%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  ButtonStyle: {
    textAlign: "center",
    fontSize: 30,
  },
});

export default CalculatorButton;
