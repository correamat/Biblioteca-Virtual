import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const ContainerRolagem = styled.ScrollView`
    flex: 1;
`;

export const FundoSuperior =  styled.View`
    background-color: #E7f5f8;
    padding: 16px;
`;

export const ImagemLivro = styled.Image`
    height: 256px; 
    width: 100%;
    margin-top: 24px;
`;

export const TituloLivro = styled.Text`
    text-align: center;
    font-size: 24px;
    margin-top: 16px;
    font-weight: bold;
    color: #000;
`;

export const AutorLivro = styled.Text`
    text-align: center;
    font-size: 18px;
    color: #AAA;
`;

export const ContainerDescricao = styled.View`
    padding: 16px;
    marginTop: 8px;
`;

export const TituloDescricao = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

export const TextoDescricao = styled.Text`
    color: #aaa;
    font-size: 16px;
    text-align: justify;
`;

export const BotaoFavoritos = styled.TouchableOpacity`
    background-color: #023E89;
    height: 56px;
    border-radius: 8px;
    margin: 16px;
    justify-content: center;
    align-items: center;
`;

export const TextoBotaoFavoritos = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;