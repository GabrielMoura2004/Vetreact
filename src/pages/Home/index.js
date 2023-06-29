import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList } from 'react-native';



const products = [
  {
    id: 1,
    name: 'Dicas de como cuidar de seu pet',
   
    image: 'https://www.petz.com.br/blog/wp-content/uploads/2022/10/cachorro-fugindo-final.jpg',
    
    description: 'Alimentação adequada: Forneça uma dieta equilibrada e adequada para a espécie e raça do seu animal de estimação. Consulte um veterinário para obter orientações sobre a quantidade e o tipo de alimento mais adequado' 

  
  },
  {
    id: 2,
    name: 'Atendemos o seu pet',
    
    image:'https://i0.statig.com.br/bancodeimagens/2n/y9/zl/2ny9zlk3myviabfr6wd6k8ccz.jpg',
    description: 'Atendemos o seu pet com muito amor e carinho'
  },
  {
    id: 3,
    name: 'Fazemos cirurgias ',
    
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzUTp3_yu8go_ewmXA0KsZI-Jcli_FNOD3g&usqp=CAU',
    description: 'Fazemos cirurgias, como castração. '
  },
  
   
  
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  }

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  }

  return (

    <View style={styles.container}>
   
 
 


  <View style={styles.header}>
    <Text style={styles.headerText}>Lucky veterinária</Text>
    
  </View>
 
  <FlatList
    data={products}
    renderItem={({ item }) => (
      <TouchableOpacity
        key={item.id}
        style={styles.productItem}
        onPress={() => handleProductPress(item)}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
        />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity
          style={styles.viewMoreButton}
          onPress={() => handleProductPress(item)}
        >
          <Text style={styles.viewMoreButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id.toString()}
  />

      {selectedProduct && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <Image
              source={{ uri: selectedProduct.image }}
              style={styles.modalProductImage}
            />
            <Text style={styles.modalProductName}>{selectedProduct.name}</Text>
            <Text style={styles.modalProductPrice}>{selectedProduct.price}</Text>
            <Text style={styles.modalProductDescription}>{selectedProduct.description}</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        
      )}


    </View>
   

         
    

   
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D6FF',
  
     },
  header: {
  height: 50,
  backgroundColor: '#E8D6FF',
  justifyContent: 'center',
  alignItems: 'center',
  },
  headerText: {
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold',
  },
  productList: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  marginTop: 20,
  },
  productItem: {
  alignItems: 'center',
  marginBottom: 20,
  },
  productImage: {
  width: 150,
  height: 150,
  borderRadius: 75,
  },
  productName: {
  fontWeight: 'bold',
  fontSize: 16,
  textAlign: 'center',
  marginBottom: 5,
  color: 'black',
  },
  productPrice: {
  color: 'black',
  fontSize: 14,
  marginBottom: 5,
  },
  viewMoreButton: {
  backgroundColor: 'red',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 10,
  },
  viewMoreButtonText: {
  color: 'white',
  fontSize: 12,
  },
  modalContainer: {
  flex: 1,
  backgroundColor: '#E8D6FF',
  alignItems: 'center',
  justifyContent: 'center',
  },
  modalProductImage: {
  width: 250,
  height: 250,
  borderRadius: 125,
  marginBottom: 20,
  },
  modalProductName: {
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
  marginBottom: 10,
  },
  modalProductPrice: {
  color: 'black',
  fontSize: 18,
  marginBottom: 10,
  },
  modalProductDescription: {
  textAlign: 'center',
  paddingHorizontal: 20,
  marginBottom: 20,
  },
  modalCloseButton: {
  backgroundColor: 'black',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 10,
  marginTop: 20,
  },
  modalCloseButtonText: {
  color: 'white',
  fontSize: 16,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    height: 50,
    paddingHorizontal: 20,
  },
  });
  
  export default HomeScreen;
            