import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CalculationBox({ CalculatorCalculation }) {
  return (
    <View style={styles.OuterBox}>
      <View style={styles.Inner}>
        <View style={styles.CalculationBox}>
          <View style={styles.UpperBox}>
            <Text style={styles.UpperBoxText}>
              {CalculatorCalculation.UpperVariable}
            </Text>
          </View>
          <View style={styles.LowerBox}>
            <Text style={styles.OperatorSign}>
              {CalculatorCalculation.Operator}
            </Text>
            <Text style={styles.LowerBoxText}>
              {CalculatorCalculation.LowerVariable}
            </Text>
          </View>
        </View>
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
  CalculationBox: {
    flex: 1,
  },
  UpperBox: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  LowerBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  UpperBoxText: {
    flex: 1,
    padding: "4%",
    width: "100%",
    height: "100%",
    fontSize: 20,
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  OperatorSign: {
    marginRight: "4%",
    fontSize: 25,
    flex: 1,
    textAlign: "left",
  },
  LowerBoxText: {
    flex: 1,
    padding: "4%",
    width: "100%",
    height: "100%",
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});
