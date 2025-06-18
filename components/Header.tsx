import { View, Text, TouchableOpacity } from 'react-native';
import { styles, venom_colors } from '../app/styles'
import { useRouter, usePathname} from 'expo-router'; 
import { Icons } from './Icons';

export function Header() {
    const router = useRouter()
    const pathname = usePathname()
    console.log('Current pathname:', pathname)
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", 
          flexWrap: "wrap", maxWidth: 960, width: '100%', position: 'sticky', top: 0, zIndex: 1000, backgroundColor: venom_colors.background }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1,}}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.h1}>jacob andrés</Text>
        </TouchableOpacity>
        </View>
        <Icons />
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', flex: 1}}>
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
