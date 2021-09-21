import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Modal, Button, TextInput } from "react-native";
import ListModal from "./components/ListModal";
import ListCard from "./components/ListCard";

export default function App() {
  const [lists, setLists] = useState([]);

  const handleSave = (title, description) => {
    setLists([...lists, { title: title, description: description }]);
  };

  console.log(`lists`, lists);
  return (
    <View style={styles.container}>
      <Text>TODO LIST</Text>
      {lists &&
        lists.map((list) => (
          <ListCard title={list.title} description={list.description} />
        ))}
      <Button
        title="+ Add a list"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <ListModal modalVisible={modalVisible} handleSave={handleSave} />
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
