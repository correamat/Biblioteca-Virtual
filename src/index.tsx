import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListaLivros from './screens/ListaLivros';
import DetalheLivro from './screens/DetalheLivro';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="ListaLivros" component={ListaLivros} />
          <Stack.Screen name="DetalheLivro" component={DetalheLivro} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
