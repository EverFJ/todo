import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

export default function ListModal(props) {
  return (
    <View style={styles.container}>
      <Text>ListModal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});