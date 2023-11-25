import Header from '../components/Header'
import FeaturedContent from '../components/FeaturedContent'
import GlobalContent from '../components/GlobalContent'
import DetailsPage from '../components/DetailsPage'
import useBreed from '../hooks/useBreed'
import FavsPage from '@/components/FavsPage'

const Layout = () => {
    const {breedClicked, showFavs} = useBreed()
  return (
    <>
        <Header/>
        {showFavs?<FavsPage/> :(
          <>
            <FeaturedContent/>
            <GlobalContent/>
          </>
        )}
        { breedClicked.id
            ? (<DetailsPage breed={breedClicked}/>)
            : ''
        }
    </>
  )
}

export default Layout