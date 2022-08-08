import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const GoalItem = ({ title }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{title}</Text>
    </View>
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
