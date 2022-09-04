import { useState } from 'react';
import {
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Header, TodoItem, TodoForm } from './components';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'cook breakfast',
      id: 1,
    },
    {
      text: 'eat breakfast',
      id: 2,
    },
    {
      text: 'wash the dishes',
      id: 3,
    },
    {
      text: 'buy groceries',
      id: 4,
    },
  ]);

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const addTodo = (text) => {
    if (text.length > 3) {
      setTodos((prevState) => [{ text, id: Math.random() }, ...prevState]);
    } else {
      Alert.alert('OPPS!', 'Todos must be at least 3 characters long.', [
        {
          text: 'Okay',
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex flex-1 bg-gray-100  w-full h-full">
        <Header />
        <View className="p-10 flex-1">
          <TodoForm addTodo={addTodo} />
          <View className="mt-5 flex flex-1 flex-col gap-4">
            <FlatList
              renderItem={({ item }) => (
                <TodoItem deleteTodo={deleteTodo} item={item} />
              )}
              keyExtractor={(item) => item.id}
              data={todos}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
