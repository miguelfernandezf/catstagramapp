import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

const BreedContext = createContext()

const BreedProvider = ({children}) =>{

    const [breeds, setBreeds] = useState([])
    const [breedSelected, setBreedSelected] = useState('')
    const [featuredBreeds, setFeaturedBreeds] = useState([])
    const [globalBreeds, setGlobalBreeds] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [breedClicked, setBreedClicked] = useState({})


    const getBreeds = async () => {
        const {data} = await axios('https://api.thecatapi.com/v1/breeds')
        // console.log(data)
        setBreeds(data)
    }

    const getFeaturedBreeds = async () =>{
        const {data} = await axios('https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=6&api_key=live_lqJRQZIbWnK0OyN6kiBad4pzmPMxJB5JK9gx6OQXlChpOHANqazbwIXBwZU8t7tl')
        // console.log(data)
        setFeaturedBreeds(data)
    }

    const getGlobalBreeds = useCallback(async () =>{
        const {data} = await axios(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=9&breed_ids=${breedSelected}&api_key=live_lqJRQZIbWnK0OyN6kiBad4pzmPMxJB5JK9gx6OQXlChpOHANqazbwIXBwZU8t7tl`)
        
       setGlobalBreeds(data)
    },[breedSelected])

    useEffect(()=>{
        getBreeds()
    },[])

    useEffect(()=>{
        getFeaturedBreeds()
    },[])

    useEffect(()=>{
        getGlobalBreeds()
    },[getGlobalBreeds])

    useEffect(()=>{
        getGlobalBreeds()
    },[breedSelected,getGlobalBreeds])

    const handleBreedSelected = valor =>{
        setBreedSelected(valor)
    }

    const handleModalClick = () =>{
        setShowModal(!showModal)
    }

    const handleBreedClicked = (breed) =>{
        console.log(breed)
        setBreedClicked(breed)
    }

    const handleNextGlobalBreeds = async () => {
        const {data} = await axios(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&breed_ids=${breedSelected}&api_key=live_lqJRQZIbWnK0OyN6kiBad4pzmPMxJB5JK9gx6OQXlChpOHANqazbwIXBwZU8t7tl`)
        // console.log(data)
        const breeds = [...globalBreeds, ...data]
        setGlobalBreeds(breeds)
        console.log(globalBreeds)
    }

    const handleSaveCat = async (e) =>{
       e.preventDefault()
        const {url, breeds} = breedClicked
        try {
            await axios.post('/api/cats',{
                url,
                breeds
            })
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <BreedContext.Provider value={{
            breeds,
            breedSelected,
            handleBreedSelected,
            featuredBreeds,
            globalBreeds,
            showModal,
            handleModalClick,
            breedClicked,
            handleBreedClicked,
            handleNextGlobalBreeds,
            handleSaveCat
        }}>
        {children}
        </BreedContext.Provider>
    )
}

export {
    BreedProvider
}

export default BreedContext