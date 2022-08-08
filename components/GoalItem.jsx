import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = ({ title, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5E0ACC",
  },

  goalText: {
    color: "#FFF",
    padding: 8,
  },

  pressedItem: {
    backgroundColor: "#210699",
    borderRadius: 6,
  }
});
