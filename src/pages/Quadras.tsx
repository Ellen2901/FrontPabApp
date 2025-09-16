
import Headv from "../components/Headv";
import NavBar from "../components/NavBar";
import CardComBorda from "../components/Box";
import LinhaCinza from "../components/LinhaCinza";
import Quadra1 from "../img/Quadra 1.jpg"
import Quadra2 from "../img/Quadra 2.jpg"
import Quadra3 from "../img/Quadra 3.jpg"
import Quadra4 from "../img/Quadra 4.jpg"
import Quadra5 from "../img/Quadra 5.jpg"
import Botao from "../components/Botao";




export default function Noticias() {


    return (

        <div className="bg-gray-100 min-h-screen">

            <Headv title="Quadras" />
            


            <div className="ml-6 mt-10 text-gray-500">
                <p>Encontre uma quadra com boa avaliação para treinar</p>
            </div>


            <LinhaCinza />


            <CardComBorda image={Quadra1} title="Quadra do Socorro" conteudo="Rua Augusta, 1420 – Consolação, São Paulo – SP, 01305-100  " />

            <div className="ml-6 mt-10 mb-5 text-black">
                <p>Melhores avaliações ⭐⭐⭐⭐⭐</p>
                <br />
                <p>"Quadra muito boa para treinar, segura, tem iluminação de noite" ~Larrisa Luna</p>
            </div>


            <CardComBorda image={Quadra2} title="Quadra esporte clube" conteudo="Avenida Paulista, 1578 – Bela Vista, São Paulo – SP, 01310-200  " />

             <div className="ml-6 mt-10 mb-5 text-black">
                <p>Melhores avaliações ⭐⭐⭐⭐</p>
                <br />
                <p>"Quadra boa, mas a iluminação não é tão boa" ~Natalia Valente</p>
            </div>

            
            <CardComBorda image={Quadra3} title="Complexo total de futebol" conteudo="Rua da Consolação, 345 – Cerqueira César, São Paulo – SP, 01302-000  " />

            <div className="ml-6 mt-10 mb-5 text-black">
                <p>Melhores avaliações ⭐⭐⭐⭐⭐</p>
                <br />
                <p>"Perfeita para treino!!! Só venhammm" ~Caroline M.</p>
            </div>

              <CardComBorda image={Quadra4} title="Arena do futebol" conteudo="Alameda Santos, 2100 – Jardim Paulista, São Paulo – SP, 01418-200 " />

               <div className="ml-6 mt-10 mb-5 text-black">
                <p>Melhores avaliações ⭐⭐</p>
                <br />
                <p>"Péssimo, só é boa na foto" ~Ketllyn Augusto</p>
            </div>

            <CardComBorda image={Quadra5} title="Quadra mania" conteudo="Rua Oscar Freire, 1050 – Jardim Paulista, São Paulo – SP, 01426-001" />

            <div className="ml-6 text-black">
                <p>Melhores avaliações ⭐⭐⭐⭐⭐</p>
                <br />
                <p>"Gostei, é boa 👏🏽👏🏽👏🏽" ~Larrisa Luna</p>
            </div>

            <div className="p-8 mb-15">
            <Botao texto="Veja mais" caminho="" />

         </div>




           


            <NavBar />




        </div>









    );
};