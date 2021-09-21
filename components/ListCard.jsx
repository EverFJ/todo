import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ListCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
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
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  description: {
    fontStyle: "italic",
    fontSize: 20,
  },
});
