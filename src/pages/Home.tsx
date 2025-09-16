import NavBar from "../components/NavBar";
import Head from "../components/Head";
import CardComBorda from "../components/Box";
import LinhaCinza from "../components/LinhaCinza";
import Botao from "../components/Botao";
import Onda from "../img/ondahome.png";
import Cpab from "../img/cpab.png";
import Oportunidades1 from "../img/oportunidades1.jpg";
import Oportunidades2 from "../img/oportunidades2.png";
import img1 from "../img/palmeiras.png";
import noticia1 from '../img/noticia1.png';
import noticia2 from '../img/noticia2.png';
import Carrosel from "../components/Carrosel";
import LiveBox from "../components/Aovivo";
import aovivo from '../img/aovivo.png';
import luanaeale from '../img/luanaeale.png';
import Podcast from "../img/podcast.png";
import Parceiros from "../components/Parceiros"
import adidas from "../img/adidaslogo.png"
import logoguarana from "../img/logoguarana.png"
import logoamazon from "../img/logoamazon.png";
import MapadeQuadras from "../components/MapadeQuadras";
import Quadra1 from "../img/Quadra 1.jpg";
import Quadra2 from "../img/Quadra 2.jpg";
import Quadra3 from "../img/Quadra 3.jpg";
import Quadra4 from "../img/Quadra 4.jpg";
import Quadra5 from "../img/Quadra 5.jpg";



export default function Home() {

   const cards = [
      { title: "Assista Palmeiras x Corinthians ao vivo", image: aovivo },
      { title: "Copa América Feminina: Arthur Elias convocará a Seleção na segunda-feira", image: noticia1 },
      { title: "Pérolas Negras vai enfrentar o Santos na segunda fase da Copa do Brasil feminina", image: noticia2 },


   ];

   const cardsData = [
      { id: 1, title: "Quadra do Socorro", image: Quadra1, location: "Rua Augusta, 1420 – Consolação, São Paulo – SP, 01305-100" },
      { id: 2, title: "Quadra esporte clube ", image: Quadra2, location: "Avenida Paulista, 1578 – Bela Vista, São Paulo – SP, 01310-200" },
      { id: 3, title: "Complexo total de futebol", image: Quadra3, location: "Rua da Consolação, 345 – Cerqueira César, São Paulo – SP, 01302-000" },
      { id: 4, title: "Arena do futebol", image: Quadra4, location: "Alameda Santos, 2100 – Jardim Paulista, São Paulo – SP, 01418-200" },
      { id: 5, title: "Quadra mania", image: Quadra5, location: "Rua Oscar Freire, 1050 – Jardim Paulista, São Paulo – SP, 01426-001" },
   ];


   const items = [
      { title: "", imageUrl: adidas },
      { title: "", imageUrl: logoguarana },
      { title: "  ", imageUrl: logoamazon },

   ];


   return (

      <div className="bg-gray-100 min-h-screen ">

         <Head />

         <LiveBox
            imageUrl={img1}
            liveText="Transmissão Ao Vivo"
         />


         <div>
            <div className="ml-6 mt-10 text-gray-500">
               <p>Principais notícias do futebol feminino</p>
            </div>
            <div className="h-90 flex items-center justify-center bg-gray-100">

               <Carrosel cards={cards} />
            </div>
         </div>


         <div className="p-8 mb-5">
            <Botao texto="Veja as notícias" caminho="/noticias" />

         </div>

         <div className="font-semibold text-lg text-black mb-5 ml-6">

            <h2>Quadras para treino</h2>

         </div>

         <LinhaCinza />



         <div className="ml-6  text-gray-500">
            <p>Encontre uma quadra perto de você para treinar</p>
         </div>





         <div className="h-90 flex items-center justify-center bg-gray-100">

            <MapadeQuadras cards={cardsData} />
         </div>

         <div className="p-8 ">
            <Botao texto="Veja mais quadras" caminho="/quadras" />

         </div>


         <div className="flex justify-center">
            <img src={Onda} alt="Onda" className="w-full max-w-md" />
         </div>
         <div className=" w-full h-155 mr-0 bg-[#FDE3FD] backdrop-blur-md flex flex-col -mt-9 mb-18 ">

            <div className="font-semibold text-lg text-black mb-5 ml-6">

               <h2>Conheça o Passa a bola</h2>
            </div>




            <CardComBorda image={luanaeale} title="Alê e Luana" conteudo="O Passa a Bola é um canal de YouTube criado em 2021 por Luana Maluf e Alê Xavier, com o objetivo de dar visibilidade ao futebol feminino e promover o protagonismo das mulheres no esporte. O canal surgiu de um coletivo que reunia semanalmente mais de 200 mulheres para jogar futebol, e desde então se transformou em um veículo de comunicação, entretenimento e discussão sobre a modalidade " />

            
         </div>




         <h2 className="font-semibold text-lg text-black mb-2 ml-6">Nossos projetos </h2>

         <LinhaCinza />
         <div className="flex flex-col items-center justify-center p-4 ">
            <div
               className="w-full h-40 bg-cover bg-center rounded-2xl z-1 object-contain"
               style={{
                  backgroundImage: `url(${Podcast})`,
               }}

            >
            </div>
            <div className="ml-6 mt-5 text-gray-500">
               <p>Assista nosso canal no Youtube</p>
            </div>
         </div>

         <div className="p-4 ">
            <Botao texto="Assista agora" caminho="https://www.youtube.com/@passabola" />
         </div>

         <div className="flex flex-col items-center justify-center p-4 ">
            <div
               className="w-full h-40 bg-cover bg-center rounded-2xl z-1 object-contain"
               style={{
                  backgroundImage: `url(${Cpab})`,
               }}
            ></div>


            <div className="ml-6 mt-5 text-gray-500 text-center">
               <p>Está lançado o desafio, uma copa para você e seu time se divertir e trocar muita experiência</p>
            </div>
         </div>

         <div className="p-4 ">
            <Botao texto="Participe" caminho="/Agendamentos" />
         </div>


         <div>


            <h2 className="font-semibold text-lg text-black mb-2 ml-6 mt-10">Oportunidades </h2>
            <LinhaCinza />
            <div className="ml-6 mt-2 mb-5 text-gray-500 ">
               <p>Fique atento as oportunidades para atletas</p>
            </div>

            <CardComBorda image={Oportunidades1} title=" " conteudo="University of South Florida, abriga o time de futebol da divisão NCAA I. Com bolsas integrais que cobrem mensalidade, moradia e alimentação." />
            <div className="p-4 ">
               <Botao texto="Saiba mais" caminho="https://www.usf.edu/admissions/international/admission-information/cost-of-attendance/scholarships.aspx" />
            </div>

            <CardComBorda image={Oportunidades2} title=" " conteudo="Na USP, atletas de alto rendimento têm acesso ao Programa de Apoio ao Esporte" />
            <div className="p-4 ">
               <Botao texto="Saiba mais" caminho="https://jornal.usp.br/ciencias/carreiras-de-atletas-de-alto-rendimento-devem-ser-vistas-de-forma-global-avalia-especialista/" />
            </div>
         </div>

         <h2 className="font-semibold text-lg text-black mb-2 ml-6 mt-10">Parceiros </h2>
         <div className="ml-6 mt-2 mb-5 text-gray-500 ">
            <p>Conheça quem ajuda o Passa a Bola</p>
         </div>


         <div className="px-2 ">
            <Parceiros items={items} />
         </div>









         <NavBar />



      </div >
   );
} 
