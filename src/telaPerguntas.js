import Header from "./header";
import Footer from "./Footer";

function TelaPerguntas(){
    return (
        <div className="TelaPerguntas">
        <Header />

        <div className="content">
        <ul className="pergunta">
            <li>Pergunta 1</li>
            <img src="./imgs/seta.svg" alt="botão seta" />
        </ul>
       
        </div>
        <Footer />
        </div>
    )
}


export default TelaPerguntas;