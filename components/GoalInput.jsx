import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export const GoalInput = ({ setGoalList, modalVisibility, hideModal }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (value) => setGoal(value);

  const addGoalHandler = () => {
    if (goal) {
      setGoalList((prevGoals) => [
        ...prevGoals,
        { title: goal, id: Math.random() * 1000000000 },
      ]);
      setGoal("");
      hideModal();
    }
  };

  return (
    <Modal animationType="slide" visible={modalVisibility}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write down your goal!"
          onChangeText={goalInputHandler}
          value={goal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={hideModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    width: "100%",
    padding: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
