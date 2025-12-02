// App.tsx - Pääkomponentti
import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { Task } from "./types";
import useTodos from "./hooks/useTodos";

export default function App() {
  // Haetaan tehtävät ja toiminnot custom hookista (käyttää useReduceria)
  const { tasks, addTask, toggleTask } = useTodos();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>Simple Todo</Text>

      <TaskInput onAdd={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item: Task) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} />
        )}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}

// Tyylit
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    backgroundColor: "#5b5fc7",
    paddingVertical: 20,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
});

