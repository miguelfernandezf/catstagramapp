import { useContext } from "react";
import BreedContext from "../context/BreedProvider";

const useBreed = () =>{
    return useContext(BreedContext)
}

export default useBreed