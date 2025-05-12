import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function Index() {
  const [task, setTask] = React.useState<string>("");
  const [taskItems, setTaskItems] = React.useState<string[]>([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskwrapper}></View>
      <Text style={styles.sectionTitle}>Today&apos;s Tasks</Text>
      <View style={styles.items}>
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => completeTask(index)}
              activeOpacity={0.5}
              style={{ marginBottom: 20 }}
            >
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholderTextColor={"#C0C0C0"}
        />
        <TouchableOpacity onPress={handleTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    marginHorizontal: 20,
  },
  items: {
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#55BCF6",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0C0C0",
    borderWidth: 1,
  },
  addText: {
    color: "#fff",
    fontSize: 24,
  },
});
