/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { ListaLivrosDTO } from '../../screens/ListaLivros';

import { ContainerBotao , LivroImagem, NomeLivro, NomeAutor } from './styles';

interface LivroProps {
  data: ListaLivrosDTO;
};

const Livro = (props: LivroProps) => {
  
  const navigation = useNavigation();
  return (
    <ContainerBotao
      onPress={() => {
        navigation.navigate('DetalheLivro', {
        livroId: props.data.id,
      });
      }}>
      <LivroImagem
        resizeMode="cover"
        source={{uri: props.data.imagem}}
      />
      <NomeLivro> {props.data.nome} </NomeLivro>
      <NomeAutor> {props.data.autor} </NomeAutor>
    </ContainerBotao>
  );
};

export default Livro;
