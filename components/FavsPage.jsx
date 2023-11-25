import useBreed from "@/hooks/useBreed"
import GlobalBreed from "./GlobalBreed"

const FavsPage = () => {
    const {cats} = useBreed()
  return (
    <>
        <div className="w-90 m-10 grid gap-4 grid-cols-1 
            xl:grid-cols-2 2xl:grid-cols-3 items-center "

        >

            {cats.length > 0 ? (cats.map(cat=>(
                    <GlobalBreed  key={cat.id} breed={cat}/>
                ))
            ):
                (<p>No elements found</p>)
            }
        </div>
    </>
  )
}

export default FavsPage