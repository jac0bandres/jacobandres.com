import { View, Text, Image} from 'react-native';
import { styles, colors } from './styles';

export default function Home() {
  return (
    <View style={{ padding: 16, gap: 16}}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%' }}>
    <Image source={require("../assets/images/profile.jpeg")} style={{ width: 300, height: 200 }} />
    </View>
        <Text style={styles.h2}>hey there</Text> 
      <Text style={styles.p}>My name is Jacob. 
          I'm studying computer science at the University of North Georgia.
    When I'm not bit fiddling, I'll be reading or moshing at hardcore shows.
        </Text>
        <Text style={styles.p}>
          Reach out at jacob@jacobandres.com
          </Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%' }}>
    <Image source={require("../assets/images/mosh.jpeg")} style={{ width: 300, height: 200, }} />
    <Image source={require("../assets/images/petting_mittens.jpeg")} style={{ width: 300, height: 200, }} />
    </View>
    </View>
  );
}
