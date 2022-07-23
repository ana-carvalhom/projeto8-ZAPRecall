import Header from "./header";

function TelaPerguntas(){
    return (
        <div className="TelaPerguntas">
        <Header />

        <div className="content">
        <ul className="pergunta">
            <li>Pergunta 1</li>
            <img src="./imgs/seta.svg" alt="botão seta" />
        </ul>
        <ul className="pergunta selecionada">
            <li>O que é JSX?</li>
            <div className="botaoVetor">
            <img src="./imgs/Vector.svg" alt="botão virar carta"/>
            </div>
            </ul>

            
        <div className="pergunta aberta">
            <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
            <div className="opcoes">
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
        <ul className="pergunta riscada naoLembrei">
            <li>Pergunta 1</li>
            <img src="./imgs/naolembrei.svg" alt="x vermelho" />
        </ul>
        
        </div>

        </div>
    )
}


export default TelaPerguntas;