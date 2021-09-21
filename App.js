import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Modal, Button, TextInput } from "react-native";
import ListModal from "./components/ListModal";
import ListCard from "./components/ListCard";

export default function App() {
  const [lists, setLists] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleSave = (title, description) => {
    setLists([...lists, { title: title, description: description }]);
  };

  console.log(`lists`, lists);
  return (
    <View style={styles.container}>
      {lists &&
        lists.map((list) => (
          <ListCard title={list.title} description={list.description} />
        ))}
      <Button title="+ Add a list" onPress={toggleModal} />
      <ListModal
        modalVisible={modalVisible}
        handleSave={handleSave}
        toggleModal={toggleModal}
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
