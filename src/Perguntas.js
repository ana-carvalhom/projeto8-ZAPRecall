
//COMPONENTE ITEM DE MENU - SEPARAR
function PerguntaItem(props){
    console.log(props);
    return (
        <li className="pergunta">{props.tituloPergunta}
        <img src={props.URLImagem} alt={props.URLAlt} /></li>
    );
}




//COMPONENTE TODAS AS PERGUNTAS
function Perguntas(){

    const todasPerguntas = [
        <PerguntaItem URLImagem="./imgs/seta.svg" URLAlt="botão seta" tituloPergunta="Pergunta 1"/>,
        <PerguntaItem URLImagem="./imgs/seta.svg" URLAlt="botão seta" tituloPergunta="Pergunta 2"/>,
        <PerguntaItem URLImagem="./imgs/seta.svg" URLAlt="botão seta" tituloPergunta="Pergunta 3"/>,
        <PerguntaItem URLImagem="./imgs/seta.svg" URLAlt="botão seta" tituloPergunta="Pergunta 4"/>
    ];

    const todasPerguntasNew = [
        {
            URLImagem: "./imgs/seta.svg",
            URLAlt: "botão seta", 
            tituloPergunta: "Pergunta 1",
        }, 
        {
            URLImagem: "./imgs/seta.svg",
            URLAlt: "botão seta", 
            tituloPergunta: "Pergunta 2",
        },
        {
            URLImagem: "./imgs/seta.svg",
            URLAlt: "botão seta", 
            tituloPergunta: "Pergunta 3",
        }
    ];

    const arrayPerguntas = todasPerguntasNew.map((pergunta) =>  <PerguntaItem URLImagem={todasPerguntasNew.URLImagem} 
        URLAl={todasPerguntasNew.URLAlt} 
        tituloPergunta={todasPerguntasNew.tituloPergunta}/>
    )

    return (        

        <div className="content">
        <ul className="perguntas">
            
       {todasPerguntas}
        
        </ul>
       
        </div>
       
       
    )
}


export default Perguntas;