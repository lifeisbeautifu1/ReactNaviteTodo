import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View className="h-20 w-full pt-8 bg-blue-500">
      <Text className="text-white text-center font-bold text-xl">My Todos</Text>
    </View>
  );
};

export default Header;
