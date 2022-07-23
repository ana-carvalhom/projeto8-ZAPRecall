function PerguntasAbertas(){
    const respostas = ['JSX é uma sintaxe para escrever HTML dentro do JS', 'Resposta 2', 'Resposta 3', 'Resposta 4']
    return (
        <ul className="perguntas">
        {respostas.map(resposta => <li className="pergunta aberta">{resposta}
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
        
        
        
        </li>)}
        
       
    </ul>
    );
}

export default PerguntasAbertas;