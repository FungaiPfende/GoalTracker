import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";

import { GoalInput } from "./components/GoalInput";
import { GoalList } from "./components/GoalList";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const showModal = () => {
    setModalVisibility(true);
  };

  const hideModal = () => {
    setModalVisibility(false);
  };

  const deleteGoal = (id) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add new goal" color="#5E0ACC" onPress={showModal} />
      <GoalInput
        setGoalList={setGoalList}
        modalVisibility={modalVisibility}
        hideModal={hideModal}
      />
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
