import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #FFF; 
    flex: 1; 
    padding: 16px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
`;

export const NomeUsuario = styled.Text`
    flex: 1;
    font-size: 24px;
`;

export const BotaoCabecalho = styled.TouchableOpacity`
    height: 42px;
    width: 42px;
    align-items: center;
    justify-content: center;
`;

export const ListagemLivros = styled.FlatList`
    flex: 1;
`;