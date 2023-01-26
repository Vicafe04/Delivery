import { useState } from "react"
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';

import styles from './style';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("jair@gmail.com");
  const [senha, setSenha] = useState("senha123");

  const login = () => {
    fetch("http://10.87.207.34:4000/motoboy/login", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        "email": email,
        "senha": senha
      })
    })
      .then(res => { return res.json() })
      .then(data => {

        if (data.length > 0) {
          navigation.navigate("Home", {
            "id": data[0].id,
            "nome": data[0].nome
          })

        } else {
          console.log("LOGIN INVALIDO")
        }

      })
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.dog}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1858/1858002.png',
        }}
      />

      <TextInput style={styles.input} icon="mail" placeholder="E-mail" onChangeText={(e) => { setEmail(e); }} value={email}

      />
      <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={(e) => { setSenha(e); }} secureTextEntry
      />

      <View style={styles.hairline} />

      <TouchableOpacity style={styles.button} onPress={() => {
        login()
      }}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

    </View>
  )
}