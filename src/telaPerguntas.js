import Header from "./header";
import Footer from "./Footer";
import Perguntas from "./Perguntas";

function TelaPerguntas(){

      return (
        <div className="TelaPerguntas">
        <Header />

        <div className="content">
       <Perguntas />
       </div>
        <Footer />
        </div>
    )
}


export default TelaPerguntas;