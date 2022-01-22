import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

export default function HistoryBox({ History, setHistory }) {
  // added testing data

  const history =
    History.length === 0 ? (
      <View style={styles.TextEntry}>
        <Text style={{ color: "gray" }}>No History</Text>
      </View>
    ) : (
      History.map((text, index) => {
        return (
          <View key={index} style={styles.TextEntry}>
            <Text>{text}</Text>
          </View>
        );
      })
    );

  const RemoveHistory = () => {
    setHistory([]);
  };

  return (
    <View style={styles.OuterBox}>
      <View style={styles.Inner}>
        <View style={styles.HistoryHeader}>
          <View style={styles.HistoryTextBox}>
            <Text style={styles.HistoryText}>History</Text>
          </View>
          <View style={styles.ClearButtonStyle}>
            <TouchableOpacity
              style={styles.TouchableOpacityStyle}
              onPress={RemoveHistory}
            >
              <Text style={styles.ClearButtonStyle2}>clear</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ScrolledHistory}>
          {/* Showing history */}
          <ScrollView style={{ height: 30 }}>{history}</ScrollView>
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
  HistoryHeader: {
    flex: 1,
    flexDirection: "row",
  },
  HistoryTextBox: {
    flex: 1,
  },
  ClearButtonStyle: {
    flex: 1,
  },
  TouchableOpacityStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  ClearButtonStyle2: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 9,
    width: "30%",
  },
  HistoryText: {
    fontSize: 12,
    color: "gray",
  },
  ScrolledHistory: {
    height: "85%",
  },
  TextEntry: {
    flex: 1,
    padding: 5,
    textAlign: "right",
  },
});
