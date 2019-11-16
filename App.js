import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import { TodoItem } from "./components/TodoItem";
import { TodoInput } from "./components/TodoInput";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTodo = todo => {
    setTodoList(currentTodoList => [
      ...currentTodoList,
      { key: Math.random().toString(), value: todo }
    ]);
    setIsAddMode(false);
  };

  const deleteTodo = id => {
    setTodoList(currentTodoList =>
      currentTodoList.filter(todo => todo.key !== id)
    );
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Todo" onPress={() => setIsAddMode(true)} />
      <TodoInput
        addTodo={addTodo}
        cancelHandler={cancelHandler}
        visible={isAddMode}
      ></TodoInput>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={todoList}
        renderItem={itemData => (
          <TodoItem
            itemData={itemData}
            id={itemData.item.key}
            deleteTodo={deleteTodo}
          ></TodoItem>
        )}
        style={styles.todoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
});
