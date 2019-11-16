import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

export const TodoInput = ({ addTodo, cancelHandler, visible }) => {
  const [todo, setTodo] = useState("");

  const inputHandler = txt => {
    setTodo(txt);
  };

  const addTodoHandler = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Todo List"
          style={styles.input}
          onChangeText={inputHandler}
          value={todo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelHandler} />
          </View>
          <Button title="ADD" style={styles.button} onPress={addTodoHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    backgroundColor: "#F6F6F6",
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});
