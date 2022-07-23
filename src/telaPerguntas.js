import Header from "./header";
import Footer from "./Footer";

function TelaPerguntas(){

    const perguntas = ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4'];

    return (
        <div className="TelaPerguntas">
        <Header />

        <div className="content">
        <ul className="perguntas">
            

            {perguntas.map(pergunta => <li className="pergunta">{pergunta}
            <img src="./imgs/seta.svg" alt="botão seta" /></li>)}
            
            
        </ul>
       
        </div>
        <Footer />
        </div>
    )
}


export default TelaPerguntas;