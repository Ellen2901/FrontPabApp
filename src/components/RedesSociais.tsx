import Instagram from "../img/instagram.png"
import Parceiros from "../components/Parceiros"
import instagram from "../img/instagramlogo.png"
import youtube from "../img/youtube.png"


const RedesSociais = () => {



    const items = [
    { title: "", imageUrl: instagram },
    { title: "", imageUrl: youtube },
  
    
  ];
    return (



        
            <div className=" w-full h-185 mr-0 bg-[#FDE3FD] backdrop-blur-md flex flex-col -mt-9 mb-18 ">


            <div className="font-semibold text-lg text-black mb-5 mt-4 ml-6">

               <h2>Siga nossas redes sociais</h2>
            </div>

            <div className="flex justify-center mt-4 mb-10">
               <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                   <img src={Instagram} alt="Instagram" className="w-80 h-140 mx-2" />
               </a>
            </div>

           <div className="px-2  ">
            
        <Parceiros items={items} />
      </div>

            

           

            
        </div>

        

    )
}

export default RedesSociais;