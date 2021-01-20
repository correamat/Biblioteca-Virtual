/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  ContainerRolagem,
  FundoSuperior,
  ImagemLivro,
  TituloLivro,
  AutorLivro,
  ContainerDescricao,
  TituloDescricao,
  TextoDescricao,
  BotaoFavoritos,
  TextoBotaoFavoritos
} from './styles';
import {buscaDetalheLivro} from '../../services/livro';

interface DetalheLivroDTO {
  id: number;
  nome: string;
  autor: string;
  imagem: string;
  descricao: string;
}

const DetalheLivro = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [detalheLivro, setDetalheLivro] = useState<DetalheLivroDTO | null>(
    null,
  );

  useEffect(() => {
    const carregaDetalheLivro = async () => {
      const livroId = route.params.livroId;
      const resposta = await buscaDetalheLivro(livroId);
      const json = await resposta.json();
      setDetalheLivro(json);
    };

    carregaDetalheLivro();
  }, []);

  if (detalheLivro === null) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size={42} color="#023E8A" />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#E7f5f8" />
      <Container>
        <ContainerRolagem>
          <FundoSuperior>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <ImagemLivro
              resizeMode="contain"
              source={{uri: detalheLivro.imagem}}
            />
            <TituloLivro> {detalheLivro.nome} </TituloLivro>
            <AutorLivro> {detalheLivro.autor} </AutorLivro>
          </FundoSuperior>
          <ContainerDescricao>
            <TituloDescricao> Descrição </TituloDescricao>
            <TextoDescricao>{detalheLivro.descricao}</TextoDescricao>
          </ContainerDescricao>
        </ContainerRolagem>
        <BotaoFavoritos>
          <TextoBotaoFavoritos>Adicionar aos favoritos</TextoBotaoFavoritos>
        </BotaoFavoritos>
      </Container>
    </>
  );
};

export default DetalheLivro;
