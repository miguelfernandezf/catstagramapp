import Header from '../components/Header'
import FeaturedContent from '../components/FeaturedContent'
import GlobalContent from '../components/GlobalContent'
import DetailsPage from '../components/DetailsPage'
import useBreed from '../hooks/useBreed'

const Layout = () => {
    const {breedClicked} = useBreed()
  return (
    <>
        <Header/>
        <FeaturedContent/>
        <GlobalContent/>
        { breedClicked.id
            ? (<DetailsPage breed={breedClicked}/>)
            : ''
        }
    </>
  )
}

export default Layout