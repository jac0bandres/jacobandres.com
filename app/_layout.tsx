import { useFonts, FiraMono_400Regular } from '@expo-google-fonts/fira-mono';
import { Slot, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles, colors } from './styles'

export default function RootLayout() {
  const [loaded] = useFonts({
    FiraMono_400Regular,
  });

  const router = useRouter();

  if (!loaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.text}>jacob andrés</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <TouchableOpacity onPress={() => router.push('/projects')}>
            <Text style={{ fontSize: 16 }}>projects</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/blog')}>
            <Text style={{ fontSize: 16 }}>blog</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Route content */}
      <Slot />
    </View>
  );
}
