import { View, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '../app/styles';

export function Footer() {
  return (
    <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'center', gap: 24 }}>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/jac0bandres')}>
        <FontAwesome6 name="github" size={30} color={colors.brown0} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://x.com/jac0bandres')}>
        <FontAwesome6 name="x-twitter" size={30} color={colors.brown0} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://discordapp.com/users/jac0bandres')}>
        <FontAwesome6 name="discord" size={30} color={colors.brown0} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/jacob-andres-78927a237/')}>
        <FontAwesome6 name="linkedin" size={30} color={colors.brown0} />
      </TouchableOpacity>
    </View>
  );
}
