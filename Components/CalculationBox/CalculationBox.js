import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CalculationBox() {
  return (
    <View style={styles.OuterBox}>
      <View style={styles.Inner}>
        <Text>Calculation</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OuterBox: {
    borderColor: "#F5F5F5",
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderRadius: 5,
    width: "100%",
    height: "100%",
    borderStyle: "solid",
  },
  Inner: {
    backgroundColor: "#E0E0E0",
    borderColor: "#E0E0E0",
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopWidth: 10,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    borderStyle: "solid",
  },
});
