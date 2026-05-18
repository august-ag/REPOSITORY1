import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  
  return (
    <View style={s.screen}>
      <Image
        source={{ uri: 'https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/685565911_1002007175838490_3390482727752603286_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGGPxjr67w48K5FYkBfpiGI8SLQ0Ac_v7TxItDQBz-_tEbQDzzaKJx02Se3NrkeWOBryszwMgmhgdE08FRvcJLW&_nc_ohc=Xm5bO5AQclMQ7kNvwHtsnPm&_nc_oc=Ado5GkIepsTiW-mhSIIm1fGWeiwa3hVIAJy4qOp8ROYlojOXm1NdscblDTRVoH3qUeQ&_nc_zt=23&_nc_ht=scontent.fceb1-1.fna&_nc_gid=foZXHDgQizUdxya8XPlprA&_nc_ss=7b2a8&oh=00_Af7L2YL8tMBWKcfO-46RdBbTnuR3yz1AFEz9MAvL0utwIQ&oe=6A10F337' }}
        style={s.photo}
      />

      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: 200,
        }}
      />

      <Text style={s.name}>
        Hello, {name}!
      </Text>
    </View>
  );
}

// I changed the stylesheet to make the profile screen look better 5/18/2026
const s = StyleSheet.create({
  screen: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#E3F2FD' },
  photo: { width:120, height:120, borderRadius:60, borderWidth:2, borderColor:'#FFFFFF' },
  name: { fontSize:22, fontWeight:'bold', marginTop:12 },
  bio: { fontSize:14, color:'#888' }
});