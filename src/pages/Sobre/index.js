import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


function Sobre() {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Entre em contato conosco!</Text>
      <Image
        source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipMdlLOXScXY5iPx-Rek4iLCzn6gUjxg6CXC5oFO=w231-h231-n-k-no-nu' }} // URL da imagem desejada
        style={styles.image}
      />
          
      <Text style={styles.text}>.Telefone: (11) 99360-8575</Text>
      <Text style={styles.text}>.E-mail: contato@exemplo.com</Text>
      <Text style={styles.text}>.Av. Japão, 460 - Vila Ipiranga, Mogi das Cruzes - SP, 08730-330</Text>
      <Text style={styles.text}>.Lucky veterinária é uma clínica segura, limpa e familiar, pronta para receber o seu pet, com muito carinho e cuidado. </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8D6FF', // Cor de fundo desejada
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color:'black',
  },
  title: {
    fontSize: 19,
    marginTop: 15,
    color:'black', 
  }
});

export default Sobre;

