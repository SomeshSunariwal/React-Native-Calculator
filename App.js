import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  SafeAreaViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CalculatorButton from "./Components/Button/CalculatorButton";

export default function App() {
  return (
    <SafeAreaView style={styles.OuterBox}>
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <CalculatorButton />
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OuterBox: {
    marginTop: 45,
  },
  container: {
    backgroundColor: "red",
  },
});
