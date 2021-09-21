import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Button, TextInput } from "react-native";

export default function ListModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // console.log(`props`, props);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="list name"
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={styles.input}
              placeholder="list description"
              value={description}
              onChangeText={setDescription}
            />
            {title.length < 5 ? (
              <>
                <Button
                  title="Save"
                  disabled
                  style={[styles.button, styles.buttonClose]}
                />
                <Text>Title must be at least 5 characters</Text>
              </>
            ) : (
              <Button
                title="Save"
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  props.handleSave(title, description);
                }}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
