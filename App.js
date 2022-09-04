import { useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import { Header } from './components';

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

  return (
    <View className="flex bg-gray-100  w-full h-full">
      <Header />
      <View className="p-10">
        <View className="mt-5">
          <FlatList
            renderItem={({ item }) => <Text>{item.text}</Text>}
            keyExtractor={(item) => item.id}
            data={todos}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
