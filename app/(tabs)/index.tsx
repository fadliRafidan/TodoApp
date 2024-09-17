import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Alert, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ShowModal from '@/components/ShowModalComponent';
import FilterItem from '@/components/FilterItemComponent';
import { Todo } from '@/interface/todo';
import { getFilteredTodos } from '@/utils/todoUtils';



const TodoApp: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    loadTodos();
  }, []);

  // Load todos from AsyncStorage
  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error("Failed to load todos", error);
    }
  };

  // Save todos to AsyncStorage
  const saveTodos = async (updatedTodos: Todo[]) => {
    try {
      setTodos(updatedTodos);
      await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
    } catch (error) {
      console.error("Failed to save todos", error);
    }
  };

  // Add new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      const updatedTodos = [...todos, { id: Date.now().toString(), text: newTodo, completed: false }];
      saveTodos(updatedTodos);
      setNewTodo('');
      setVisible(!visible)
    }
  };

  // Delete todo
  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(updatedTodos);
    Alert.alert("Task berhasil dihapus!")
  };

  // Toggle todo completion
  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updatedTodos);
    Alert.alert("Task berhasil diubah!")
  };

  const filteredTodos = getFilteredTodos(todos, filter, search);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.wrapperText}>Todo App</Text>
        <View style={styles.wrapperIcon}>
          <Ionicons onPress={() => setVisible(!visible)}
            name="add-circle-outline" size={25} style={styles.icon} />
        </View>
      </View>
      <ImageBackground
        source={require('@/assets/images/hero-card.png')}
        style={styles.heroCard}
        imageStyle={{ borderRadius: 30 }}
      >
        <Text style={styles.heroCardText}>Today's progress summary</Text>
        <Text style={styles.heroCardTotalTodosText}>
          {todos?.length} Tasks
        </Text>
      </ImageBackground>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        placeholder="Cari Task"
      />
      <View style={styles.filterContainer}>
        <FilterItem
          title="Semua"
          isActive={filter === 'all'}
          onPress={() => setFilter('all')}
        />
        <FilterItem
          title="Aktif"
          isActive={filter === 'active'}
          onPress={() => setFilter('active')}
        />
        <FilterItem
          title="Selesai"
          isActive={filter === 'completed'}
          onPress={() => setFilter('completed')}
        />
      </View>
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={[styles.todoText, item.completed && styles.completed]}>{item.text}</Text>
            <View style={styles.actions}>
              <Button title={item.completed ? "Undo" : "Selesaikan"} onPress={() => toggleTodo(item.id)} />
              <Button title="Hapus" color="red" onPress={() => deleteTodo(item.id)} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyTodoItem}>
            <Text>Tidak ada task</Text>
            <Pressable style={styles.buttonAddTask} onPress={() => setVisible(!visible)}>
              <Text style={styles.buttonAddTaskText}>Buat task baru</Text>
              <Ionicons name="add-outline" size={25} style={styles.icon} />
            </Pressable>
          </View>
        )}
      />
      <ShowModal
        setVisible={setVisible}
        visible={visible}
        handleSubmit={addTodo}
        input={newTodo}
        setInput={setNewTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapperIcon: {
    height: 35,
    width: 35,
    backgroundColor: '#FFFFFF',
    borderColor: '#2655BD',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  wrapperText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C484F'
  },
  icon: {
    color: '#2655BD',
  },
  heroCard: {
    height: 100,
    objectFit: 'cover',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    backgroundColor: 'white',
    marginBottom: 30,
    rowGap: 10
  },
  heroCardText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  heroCardTotalTodosText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  todoItem: {
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    shadowColor: "#000",
    backgroundColor: '#FFF',
    margin: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    alignItems: 'center'
  },
  emptyTodoItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    rowGap: 2
  },
  buttonAddTask: {
    backgroundColor: '#FFFFFF',
    padding: 4,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  buttonAddTaskText: {
    color: "#2655BD"
  },
});

export default TodoApp;