import { Image } from "primereact/image"
import useBreed from "../hooks/useBreed"

const FeaturedBread = ({breed}) => {
    const { handleModalClick, handleBreedClicked } = useBreed()
    const {name} = breed.breeds[0]
  return (
    <div className="inline-block">
        <img
            className="inline-block h-10 w-10 md:h-20 md:w-20 rounded-full ring-2 ring-black"
            src={breed.url}
            width={100}
            height={100}
            alt=""
            onClick={() => {
                handleModalClick()
                handleBreedClicked(breed)
            }}
        />
        {/* <span>{name}</span> */}
        {/* <Image
            className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
            src={breed.url}
            width={100}
            height={100}
            alt=""
        /> */}
    </div>
  )
}

export default FeaturedBread