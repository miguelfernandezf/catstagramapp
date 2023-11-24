import useBreed from "../hooks/useBreed"
import FeaturedBread from "./FeaturedBread"


const FeaturedContent = () => {
    const {featuredBreeds} = useBreed()

  return (
    
    <div className="flex justify-between m-10 items-center w-81">
        {featuredBreeds?.length > 0 ?
            featuredBreeds.map(breed=>(
                <FeaturedBread key={breed.id} breed={breed}/>
            ))
            :
            <p>Elements not found</p>
        }
    </div>
    
  )
}

export default FeaturedContent