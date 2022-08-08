import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Write down your goal!"
          placeholderTextColor="#999"
          onChangeText={goalInputHandler}
          value={goal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#B180F0" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={hideModal} color="#F31282" />
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
    padding: 16,
    backgroundColor: "#311B6B",
  },

  image: {
    width: 100,
    height: 100,
    margin: 24,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#E4D0FF",
    backgroundColor: "#E4D0FF",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    color: "#120438",
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
