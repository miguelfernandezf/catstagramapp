import { Image } from "primereact/image"
import useBreed from "../hooks/useBreed"

const GlobalBreed = ({breed}) => {
    const { handleModalClick, handleBreedClicked } = useBreed()
  return (
    <div className="flex border h-80 m-5 justify-center" >
        <img
            src={breed.url}
            alt={breed.id}
            width={'100%'}
            height={'100%'}
            className="object-contain"
            onClick={() => {
                handleModalClick()
                handleBreedClicked(breed)
            }}
        />
    </div>
  )
}

export default GlobalBreed