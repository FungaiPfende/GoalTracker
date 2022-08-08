import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { GoalInput } from "./components/GoalInput";
import { GoalList } from "./components/GoalList";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const deleteGoal = (id) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoalList={setGoalList} />
      <GoalList goalData={goalList} onDeleteItem={deleteGoal} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
