import React from 'react';

/* Importamos os recursos necessarios para nossa navegação */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

/* Importamos nossas páginas criadas para inserir dentro da navegação */
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

/* Criamos nosso navegador com a variavel Tab */
const Tab = createBottomTabNavigator();

/* Aqui nós informamos qual tela recebera o icone */
/* Em 'name' informamos o nome do ícone Ionicons */
const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  }
};

/* Definimos as cores do nosso tema */
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(242, 242, 80)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(119, 41, 158)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
  },
};

function App() {
  return(
    /* Abre container da navegação */
    <NavigationContainer theme={MyTheme}>
      {/* Insere a navegação Tab dentro container */}
      <Tab.Navigator 
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })  }
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
            