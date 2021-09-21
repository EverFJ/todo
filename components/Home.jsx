import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ListModal from "./ListModal";

export default function Home(props) {
  const [lists, setLists] = useState([]);
  // useEffect()
  console.log(`lists`, lists);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {list.map((list) => (
        <ListModal title={list.title} description={list.description} />
      ))}
      <Button
        title="+ Add a list"
        onPress={() => {
          props.history.push("/listmodal");
        }}
      />
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
