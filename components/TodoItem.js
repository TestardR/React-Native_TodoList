import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const TodoItem = ({ itemData, deleteTodo, id }) => {
  const { value } = itemData.item;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={deleteTodo.bind(this, id)}>
      <View style={styles.todoItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#F6F6F6"
  }
});
