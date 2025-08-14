// Busca do servidor, como paginas staticas, somente as paginas
// informadas nos "params" do array "path".
// As demais paginas irao vir do servidor dinamicamente.
// Ponto positivo: As paginas staticas (via path) sao buscadas do servidor 
// somente uma unica vez. Se o servidor estiver lento, essas paginas ainda 
// vao ser acessadas rapidamente pelo usuario.
export async function getStaticPaths() {

    return {
        // o ideal é buscar os paths de uma API ou do banco de dados.
        paths: [{
            params: {
                id: '1'
            }
        }, {
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
          // blocking = busca pagina do servidor (melhor para buscadores achar sua pagina)
          // True     = busca pagina do servidor
          // false    = mostra erro 404 na tela.
    }
}

// recebe o "context" que tem as paginnas e o conteudo delas. 
export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

// O que vai aparecer no client-side ê o que voce mandar via o "props"
function Produtos(props) {

    return <div>Id do produto: {props.id} </div>;

}

export default Produtos;