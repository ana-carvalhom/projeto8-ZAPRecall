function PerguntasAbertas(){
    return (
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
    );
}

export default PerguntasAbertas;