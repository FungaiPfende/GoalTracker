import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (value) => setGoal(value);

  const addGoalHandler = () => {
    setGoalList((prevGoals) => [
      ...prevGoals,
      { text: goal, id: Math.random() * 1000000000 },
    ]);
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
        <FlatList
          data={goalList}
          renderItem={(data) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{data.item}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
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
    borderBottomColor: "#CCC",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    width: "70%",
    padding: 8,
    marginRight: 8,
  },

  goalsContainer: {
    flex: 5,
  },

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
