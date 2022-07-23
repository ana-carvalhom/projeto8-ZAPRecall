import Header from "./header";
import Footer from "./Footer";
import PerguntasSelecionadas from "./PerguntasSelecionadas";
import Perguntas from "./Perguntas";

function TelaPerguntas(){

      return (
        <div className="TelaPerguntas">
        <Header />

        <div className="content">
       <PerguntasSelecionadas />
       
        </div>
        <Footer />
        </div>
    )
}


export default TelaPerguntas;