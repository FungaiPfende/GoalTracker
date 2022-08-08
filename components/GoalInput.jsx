import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export const GoalInput = ({ setGoalList }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (value) => setGoal(value);

  const addGoalHandler = () => {
    setGoalList((prevGoals) => [
      ...prevGoals,
      { title: goal, id: Math.random() * 1000000000 },
    ]);
    setGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write down your goal!"
        onChangeText={goalInputHandler}
        value={goal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    width: "70%",
    padding: 8,
    marginRight: 8,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
});
