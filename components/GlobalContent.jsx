import useBreed from "../hooks/useBreed"
import GlobalBreed from "./GlobalBreed"
import InfiniteScroll from "react-infinite-scroll-component"

const GlobalContent = () => {
    const {globalBreeds, handleNextGlobalBreeds} = useBreed()
  return (
    <>
        <InfiniteScroll className="w-90 m-10 grid gap-4 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 items-center "
            dataLength={globalBreeds.length}
            next={handleNextGlobalBreeds}
            hasMore={true}
        >
            {globalBreeds?.map(breed=>(
                <GlobalBreed key={breed.id} breed={breed}/>
            ))}
        </InfiniteScroll>

    </>
  )
}

export default GlobalContent