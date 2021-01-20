import Livro from '../components/Livro';

export const buscaLivros = () => {
  const resposta = fetch('https://scot13.tst.marttech.com.br/api/Livros');
  return resposta;
};

export const buscaDetalheLivro = async (livroId: number) => {
  const resposta = fetch(
    `https://scot13.tst.marttech.com.br/api/Livros/${livroId}`,
  );
  return resposta;
};
