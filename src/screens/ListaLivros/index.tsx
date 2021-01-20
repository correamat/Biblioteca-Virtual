/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
import {buscaLivros} from '../../services/livro';

import {
  Container,
  ContainerRow,
  NomeUsuario,
  BotaoCabecalho,
  ListagemLivros,
} from './styles';

interface ListaLivrosDTO {
  id: number;
  autor: string;
  imagem: string;
  nome: string;
}

const ListaLivros = () => {
  const [listaDosLivros, setListaDosLivros] = useState<ListaLivrosDTO[]>([]);

  useEffect(() => {
    const carregaLivros = async () => {
      const resposta = await buscaLivros();
      const json = await resposta.json();
      setListaDosLivros(json);
    };

    carregaLivros();
  }, []);

  return (
    <Container>
      <ContainerRow>
        <NomeUsuario>Olá, Renato</NomeUsuario>
        <ContainerRow>
          <BotaoCabecalho>
            <Icon name="heart" size={24} color="black" />
          </BotaoCabecalho>
          <BotaoCabecalho>
            <Icon name="search" size={24} color="black" />
          </BotaoCabecalho>
        </ContainerRow>
      </ContainerRow>
      <ListagemLivros
        numColumns={2}
        data={listaDosLivros}
        renderItem={({item}: {item: ListaLivrosDTO}) => <Livro data={item} />}
        keyExtractor={(_, index) => {
          return 'item' + index;
        }}
      />
    </Container>
  );
};

export default ListaLivros;
