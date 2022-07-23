function PerguntasSelecionadas(){
    const perguntas = ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4'];


    return (
        <ul className="perguntas">
        {perguntas.map(pergunta => <li className="pergunta selecionada">{pergunta} 
        <div className="botaoVetor">
        <img src="./imgs/Vector.svg" alt="botão virar carta"/>
        </div>
        </li>)}
        
        </ul>
    );
}

export default PerguntasSelecionadas;