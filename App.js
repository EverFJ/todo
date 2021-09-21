import React, { useState } from "react";
import { StyleSheet, Button, ScrollView } from "react-native";
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

  // console.log(`lists`, lists);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {lists &&
        lists.map((list) => (
          <ListCard title={list.title} description={list.description} />
        ))}
      {modalVisible ? (
        <ListModal
          modalVisible={modalVisible}
          handleSave={handleSave}
          toggleModal={toggleModal}
        />
      ) : (
        <Button title="+ Add a task" onPress={toggleModal} />
      )}
    </ScrollView>
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
