import { Image } from "primereact/image"
import DropdownBreed from "./DropdownBreed"

const Header = () => {
  return (
    <div className="bg-blue-300 w-full py-3 px-5 flex justify-between">
        <div className="w-1/2 flex gap-5 items-center">
            <Image
                src="/catlogo.png"
                alt="logo"
                width="100"
                height="200"
                className="w-50 h-100 md:max-h-200 md:max-w-100"
            />
            <span className="text-3xl uppercase font-bold invisible md:visible">Catstagram</span>
        </div>
        <div className="content-center w-1/3 md:w-1/2">
            <DropdownBreed/>
        </div>
    </div>
  )
}

export default Header