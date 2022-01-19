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
    backgroundColor: "#548CFF",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  HeaderText: {
    fontSize: 30,
  },
});
