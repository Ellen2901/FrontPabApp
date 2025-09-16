
import Headv from "../components/Headv";
import NavBar from "../components/NavBar";
import CardComBorda from "../components/Box";
import LinhaCinza from "../components/LinhaCinza";
import Fundo2 from "../img/fut4.jpg";
import Fundo3 from "../img/fut5.jpg";
import RedesSociais from "../components/RedesSociais";
import LiveBox from "../components/Aovivo";
import img1 from "../img/palmeiras.png";
import Onda from "../img/ondahome.png"
import Fundo4 from "../img/historiadofutebol.png"




export default function Noticias() {


    return (

        <div className="bg-gray-100 min-h-screen">

            <Headv title="Notícias" />
            <div className="mb-5 mt-5">
                <LiveBox
                    imageUrl={img1}
                    liveText="Transmissão Ao Vivo"
                />
            </div>


            <div className="ml-6 mt-10 text-gray-500">
                <p>Principais notícias do futebol feminino</p>
            </div>






            <LinhaCinza />


            <CardComBorda image={Fundo2} title="Copa América Feminina: Arthur Elias convocará a Seleção na segunda-feira" conteudo="Arthur Elias, treinador da Seleção, convocará 23 atletas na próxima segunda-feira, dia 9, às 11h, para disputa da Copa América Feminina. A competição acontecerá entre os dias 12 de julho e 2 de agosto. As jogadoras terão um amistoso contra a França antes da competição oficial, no próximo dia 27.
            O Brasil está no Grupo B da competição e estreia contra a Venezuela, no dia 13 de julho. Depois, a seleção brasileira enfrentará Bolívia, Paraguai e Colômbia, nesta ordem. Toda primeira fase da equipe brasileira será disputada em Quito, no Equador" />

            <LinhaCinza />

            <CardComBorda image={Fundo3} title="Pérolas Negras vai enfrentar o Santos na segunda fase da Copa do Brasil feminina" conteudo="O Pérolas Negras, time de futebol feminino do Rio de Janeiro, vai enfrentar o Santos na segunda fase da Copa do Brasil feminina. A equipe carioca superou o Criciúma na primeira fase e agora encara o Santos em jogo único. A partida será realizada na casa do time de melhor ranking no CBF Feminino." />


            <div className="flex justify-center">
                <img src={Onda} alt="Onda" className="w-full max-w-md" />
            </div>

            <RedesSociais />

            <div className="font-semibold text-lg text-black mb-5 ml-6">

                <h2>Confira também</h2>
            </div>

            <div className="ml-6 mt-2 text-gray-500 mb-5">
                <p>Um artigo com a história do futebol feminino para você se interar</p>
            </div>


            <div className="p-25 -mt-20">

            <CardComBorda image={Fundo4} title="A história do futebol feminino" conteudo="O futebol feminino no Brasil tem uma trajetória marcada por desafios e conquistas. Durante décadas, as mulheres foram proibidas de jogar futebol — entre 1941 e 1979, havia uma lei que vetava a prática por considerá-la 'incompatível com a natureza feminina'. Após a revogação dessa proibição, o esporte começou a se desenvolver lentamente. Nos anos 1990, o Brasil começou a se destacar internacionalmente, especialmente com a geração de jogadoras como Sissi, Pretinha e, mais tarde, Marta, que se tornaria um ícone mundial. A seleção brasileira feminina conquistou a medalha de prata nas Olimpíadas de 2004 e 2008, e foi vice-campeã da Copa do Mundo de 2007.
            Apesar do talento das atletas, o futebol feminino ainda enfrenta desigualdade em relação ao masculino, com menos investimento, visibilidade e apoio. No entanto, nos últimos anos, houve avanços importantes, como a exigência da CBF para que clubes da Série A tenham equipes femininas e o crescimento da cobertura midiática.
            Hoje, o futebol feminino brasileiro vive um momento de renovação e esperança, com novas gerações de jogadoras e maior reconhecimento do público."/>
            </div>






            <NavBar />




        </div>









    );
};