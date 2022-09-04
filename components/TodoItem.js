import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
      <View className="p-4 mt-4 flex-1 flex-row items-center rounded-[10px] border border-gray-200">
        <MaterialIcons name="delete" size={18} color="#444" />
        <Text className="ml-2">{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
