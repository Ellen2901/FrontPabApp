import Headv from "../components/Headv"
import NavBar from "../components/NavBar"
import Botao from "../components/Botao"
import Calendario from "../components/Calendario";
import Slideshow from "../components/Event";
import Carousel from "../components/CalendarEvents";
import img1 from '../img/futsal.png'
import img2 from '../img/bate-papo.png'
import img3 from '../img/workshop.png'



const Eventos: React.FC = () => {


    const imagens = 
    [
        img1,
        img2,
        img3
    ];

    const cards = [
        { title: "Futsal Feminino", date: "18/09/2025", time: "14h às 16h", image: img1 },
        { title: "Bate-papo (elas no campo)", date: "19/09/2025", time: "16h às 18h", image: img2 },
        { title: "Workshop - nutrição para atletas", date: "20/09/2025", time: "10h às 12h", image: img3 },

    ];


    return (
        <div className="bg-gray-100 min-h-screen">
            <Headv title="Eventos" />

            <div className="flex justify-center items-center mt-2 bg-gray-100">
                <Slideshow images={imagens} interval={2000} />
            </div>

             <div className="ml-6 mt-10 text-gray-500">
               <p>Acompanhe os próximos eventos do Passa a bola</p>
            </div>



            <div className="flex flex-col items-center justify-center mt-10 ">
                <Calendario />

            </div>

            <div className="h-100 flex items-center justify-center bg-gray-100">
                <Carousel cards={cards} />
            </div>

            <div className="p-4 mb-25" >

                <Botao texto="Minha agenda" caminho="/Agendamentos" />

            </div>

          

           

            <NavBar />
        </div>


    );
};

export default Eventos;