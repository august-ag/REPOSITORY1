import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={s.screen}>
      <Image
        source={{ url: 'https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-6/465777034_582512961121249_8697572000580023545_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHuUHC0O3ZTbPg_J59U9FcWh18Wi6Bs3NuHXxaLoGzc2112OK_KiJA7Qzq2aQ1Z-khgH7l_6UAouFFTh-NIuWxB&_nc_ohc=ylMDiq6mgQAQ7kNvwFZIrOY&_nc_oc=AdqgjsCWAtvZ8n1tj8pVUm6p2h7g8RFqBnn46VLWJEQjJcrzh8gxJPUTM2gCrZRZIhc&_nc_zt=23&_nc_ht=scontent.fceb1-4.fna&_nc_gid=gGM63r8UXkzoA-Jkagl6VA&_nc_ss=7b2a8&oh=00_Af7ctugTIAenYK0sivVeTH2lNm6LbzQzwBeh46nS1uB3Xg&oe=69FA83B7' }}
        style={s.photo}
      />
      <Text style={s.name}>Lady Amariah Francine Daquis</Text>
      <Text style={s.bio}>MMA Student | CS126</Text>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex:1, alignItems: 'center', justifyContent: 'center' },
  photo: { width:120, height:120, borderRadius:60},
  name: { fontSize:22, fontWeight:'bold', marginTop:12},
  bio: { fontSize:14, color: '#888'}
});