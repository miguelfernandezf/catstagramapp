import { Dropdown } from "primereact/dropdown"
import useBreed from "../hooks/useBreed"

const DropdownBreed = () => {
    const {breeds, breedSelected, handleBreedSelected} = useBreed()
    return (
        <div className="flex rounded-md bg-white mt-2 justify-end">
            <Dropdown 
                className="w-full bg-white p-3 gap-20 rounded-md" 
                placeholder="Select a Breed" 
                options={breeds}
                optionLabel="name"
                optionValue="id"
                value={breedSelected}
                onChange={e=>handleBreedSelected(e.value)}
            />
        </div>
    )
}

export default DropdownBreed