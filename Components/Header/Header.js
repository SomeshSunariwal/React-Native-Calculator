import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>Calculator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#41444B",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  HeaderText: {
    color: "white",
    fontSize: 30,
  },
});
