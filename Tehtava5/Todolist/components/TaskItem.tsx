import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

// Yksittäinen tehtävä-rivi
export default function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(task.id)}
    >
      {/* Yliviivaa teksti jos tehtävä on tehty */}
      <Text style={[styles.text, task.done && styles.textDone]}>
        {task.text}
      </Text>
    </TouchableOpacity>
  );
}

// Tyylit
const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  textDone: {
    textDecorationLine: "line-through",
    color: "#bbb",
  },
});
