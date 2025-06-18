import { View, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { venom_colors } from '../app/styles';

export function Icons() {
  return (
    <View style={{ padding: 16, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/jac0bandres')}>
        <FontAwesome6 name="github" size={24} color={venom_colors.bluegreen} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://x.com/jac0bandres')}>
        <FontAwesome6 name="x-twitter" size={24} color={venom_colors.bluegreen} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://discordapp.com/users/jac0bandres')}>
        <FontAwesome6 name="discord" size={24} color={venom_colors.bluegreen} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/jacob-andres-78927a237/')}>
        <FontAwesome6 name="linkedin" size={24} color={venom_colors.bluegreen} />
      </TouchableOpacity>
    </View>
  );
}
