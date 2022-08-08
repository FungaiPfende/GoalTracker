import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = ({ title, onDeleteItem, id }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5E0ACC",
  },

  goalText: {
    color: "#FFF",
  },
});
