import { useFonts, FiraMono_400Regular } from '@expo-google-fonts/fira-mono';
import { Slot, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles, colors, venom_colors} from './styles'
import { Header } from '../components/Header';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
    const [loaded] = useFonts({
        FiraMono_400Regular,
    });

    if (!loaded) return null;

    return (
        <PaperProvider>
        <View style={{ flex: 1, backgroundColor: venom_colors.background, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'auto'}}>
        <View style={{ flex: 1, backgroundColor: venom_colors.background, padding: 16, maxWidth: 960, width: '100%' }}>
        <Header />
        <Slot />
        </View>
        </View>
        </PaperProvider>
    );
}
