import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { GoalItem } from "./GoalItem";

export const GoalList = ({ goalData }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalData}
        renderItem={(data) => {
          return <GoalItem title={data.item.title} />;
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
