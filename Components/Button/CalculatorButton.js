import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CalculatorButton = ({ number, OnNumberClick }) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.TouchButton}
        onPress={() => OnNumberClick(number)}
      >
        <Text style={styles.ButtonStyle}>{number}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: 5,
    backgroundColor: "#52575D",
    width: "21%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  ButtonStyle: {
    textAlign: "center",
    fontSize: 35,
    color: "black",
  },
  TouchButton: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
    borderRadius: 50,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: "gray",
  },
});

export default CalculatorButton;
