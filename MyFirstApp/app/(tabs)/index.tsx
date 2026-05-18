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
      <Image source={{ uri: 'https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/685565911_1002007175838490_3390482727752603286_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGGPxjr67w48K5FYkBfpiGI8SLQ0Ac_v7TxItDQBz-_tEbQDzzaKJx02Se3NrkeWOBryszwMgmhgdE08FRvcJLW&_nc_ohc=Xm5bO5AQclMQ7kNvwHtsnPm&_nc_oc=Ado5GkIepsTiW-mhSIIm1fGWeiwa3hVIAJy4qOp8ROYlojOXm1NdscblDTRVoH3qUeQ&_nc_zt=23&_nc_ht=scontent.fceb1-1.fna&_nc_gid=foZXHDgQizUdxya8XPlprA&_nc_ss=7b2a8&oh=00_Af7L2YL8tMBWKcfO-46RdBbTnuR3yz1AFEz9MAvL0utwIQ&oe=6A10F337' }} style={styles.image}/>
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
    flexGrow: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#f5f5f5',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
    color: 'black',
  },

  buttonContainer: {
    marginTop: 10,
    width: '60%',
  },
});