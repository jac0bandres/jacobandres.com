import { View, Text, TouchableOpacity } from 'react-native';
import { styles, colors } from '../app/styles'
import { useRouter, usePathname} from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export function Header() {
    const router = useRouter()
    const pathname = usePathname()
    console.log('Current pathname:', pathname)
    return (
      <View style={{ paddingVertical: 16, marginBottom: 32, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.h1}>jacob andrés</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <TouchableOpacity onPress={() => router.push('/blog')}>
            <Text style={pathname == '/blog' ? styles.aSelected : styles.a}>blog</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/projects')}>
            <Text style={pathname == '/projects' ? styles.aSelected : styles.a}>projects</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}
