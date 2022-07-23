import Header from "./header";

function TelaPerguntas(){
    return (
        <div className="TelaPerguntas">
        <Header />

        <div className="content">
        <div className="pergunta">
            <p>Pergunta 1</p>
            <img src="./imgs/seta.svg" alt="botão seta" />
        </div>
        <div className="pergunta selecionada">
            <p>O que é JSX?</p>
            <img src="./imgs/Vector.svg" alt="botão virar carta" />
        </div>
        <div className="pergunta aberta">
            <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
            <div className="botao vermelho">
                <p>Não lembrei</p>
            </div>
            <div className="botao laranja">
                <p>Quase não lembrei</p>
            </div>
            <div className="botao verde">
                <p>Zap!</p>
            </div>
        </div>
        </div>

        </div>
    )
}


export default TelaPerguntas;