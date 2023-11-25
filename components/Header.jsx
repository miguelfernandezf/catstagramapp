import { Image } from "primereact/image"
import useBreed from "@/hooks/useBreed";
import DropdownBreed from "./DropdownBreed"
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
const Header = () => {
  const { handleShowFavs, getCatsFavs } = useBreed()
  const items = [{
      label: 'Catstagram',
      className: `uppercase pointer-events-none 
        text-3xl font-bold invisible md:visible
        w-0 md:w-auto
      `

    },
    {
      label: '',
      icon: 'pi pi-star-fill',
      className: `text-3xl text-indigo-600 mr-5 ml-5  `,
      command: ()=> {
        handleShowFavs()
        getCatsFavs()
      }
    }
  ]
  const start = <img alt="logo" 
    src="/catlogo.png" 
    height="40" 
    width="120" 
    className="ml-2"
    onClick={()=> handleShowFavs()}
    ></img>;
  const end = <DropdownBreed/>
  return (
    // <div className="bg-blue-300 w-full py-3 px-5 flex justify-between">
    //     <div className="w-1/2 flex gap-5 items-center">
    //         <Image
    //             src="/catlogo.png"
    //             alt="logo"
    //             width="100"
    //             height="200"
    //             className="w-50 h-100 md:max-h-200 md:max-w-100"
    //         />
    //         <span className="text-3xl uppercase font-bold invisible md:visible">Catstagram</span>
    //     </div>
    //     <div className="content-center w-1/3 md:w-1/2">
    //         <DropdownBreed/>
    //     </div>
    // </div>

    <div className="card">
      <Menubar model={items} start={start} end={end} className="bg-blue-300 w-full"/>
    </div>
  )
}

export default Header