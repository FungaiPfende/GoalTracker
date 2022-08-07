import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (value) => setGoal(value);

  const addGoalHandler = () => {
    setGoalList((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write down your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        {goalList.map((item) => (
          <Text key={Math.round(Math.random() * 100)}>{item}</Text>
        ))}
      </View>

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

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },

  goalsContainer: {
    flex: 5,
  },
});
