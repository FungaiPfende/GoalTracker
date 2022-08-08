import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { GoalItem } from "./GoalItem";

export const GoalList = ({ goalData, onDeleteItem }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalData}
        renderItem={({ item }) => {
          return (
            <GoalItem
              title={item.title}
              onDeleteItem={onDeleteItem}
              id={item.id}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
});
