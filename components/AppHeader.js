import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Text to Speak</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "orange",
  },

  text: {
    color: "white",
    padding: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },
});
