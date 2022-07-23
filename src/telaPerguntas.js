import Header from "./header";
import Footer from "./Footer";
import PerguntasSelecionadas from "./PerguntasSelecionadas";
import PerguntasAbertas from "./PerguntasAbertas";
import Perguntas from "./Perguntas";

function TelaPerguntas(){

      return (
        <div className="TelaPerguntas">
        <Header />

        <div className="content">
       <PerguntasAbertas />
       
        </div>
        <Footer />
        </div>
    )
}


export default TelaPerguntas;