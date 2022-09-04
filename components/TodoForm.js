import { useState } from 'react';
import { Button, View, TextInput } from 'react-native';

const TodoItem = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        className="px-2 py-2 mb-2 border-b border-gray-200"
        placeholder="new todo..."
        onChangeText={(value) => setText(value)}
      />
      <Button
        color="rgb(59, 130, 246)"
        title="Add todo"
        onPress={() => addTodo(text)}
      />
    </View>
  );
};

export default TodoItem;
