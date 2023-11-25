import { Dialog } from "primereact/dialog"
import useBreed from "../hooks/useBreed"
import { Card } from "primereact/card"
import { Image } from "primereact/image"
import { Button } from "primereact/button"

const DetailsPage = ({breed}) => {
    const {showModal, handleModalClick, handleSaveCat, showFavs, handleDeleteCat} = useBreed()

    const {name, description} = breed.breeds[0]
    
    const header = (
        <div className="p-3">
            <Image
                src={breed.url}
                alt={breed.id}
            />
        </div>
    )

    const title = (
        <h1 className="m-3 text-3xl font-bold">{name}</h1>
    )

    const footer = (
        <form className="flex justify-end"
        onSubmit={handleSaveCat}
        >
            <Button 
                type="submit"
                label="Save"
                visible={!showFavs}
                className="bg-indigo-600 hover:bg-indigo-800 
                    text-white px-10 py-3 m-5 font-bold rounded"
                
            />
            <Button label={showFavs ? 'Delete' : 'Cancel'}
                type="button"
                className="bg-red-700 hover:bg-red-900 
                    text-white font-bold rounded px-10 py-3 m-5"
                onClick={()=>{
                    if(showFavs){
                        handleDeleteCat(breed.id)
                    }
                    handleModalClick()
                }}
            />
        </form>
    );

  return (
    <Dialog 
        className="w-90 md:w-1/3 h-auto m-3 
            overflow-hidden bg-slate-50 rounded-md border shadow-md"
        visible={showModal} 
        onHide={()=>handleModalClick()}
    >
        <Card title={title} footer={footer} header={header} className="md:w-25rem">
            <p className="p-3 text-justify">
                {description}
            </p>
        </Card>
    </Dialog>
  )
}

export default DetailsPage