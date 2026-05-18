import { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const message =
    count > 0
      ? `${name}, you tapped ${count} times!`
      : "Tap the + button to start";
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://scontent.fdvo1-2.fna.fbcdn.net/v/t39.30808-6/685565911_1002007175838490_3390482727752603286_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGGPxjr67w48K5FYkBfpiGI8SLQ0Ac_v7TxItDQBz-_tEbQDzzaKJx02Se3NrkeWOBryszwMgmhgdE08FRvcJLW&_nc_ohc=ozU2Pmwt7nEQ7kNvwGxJZaJ&_nc_oc=AdpThyRMKWuqGTjwrX2GgiRq9xHd9UZ2GVQkFt_RhjGn-mdjUS3jH-JHXY8c_9_rz3k&_nc_zt=23&_nc_ht=scontent.fdvo1-2.fna&_nc_gid=nJvHVacht9nmDVFUjR6yBw&_nc_ss=7b2a8&oh=00_Af4WkJJFke_LDbzpMeeZpTsQshqPGngpAmbXNXvYLzTXdA&oe=69FA89B7' }} style={styles.image}/>
      <TextInput placeholder="Enter your name" onChangeText={setName} style={styles.input}/>
      <Text style={styles.text}>{name === '' ? "Please enter your name" :  `Hello, ${name}!`}</Text>
      <Text style={styles.text}>{message}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10
  },
  text: { fontSize: 16, marginVertical: 5},
  buttonContainer: { marginTop: 10, width: '60%'}
});