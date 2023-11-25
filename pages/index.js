import Image from 'next/image'
import Layout from '@/layout/Layout'
import { BreedProvider } from '@/context/BreedProvider'
import { PrimeReactProvider } from 'primereact/api'
import 'primeicons/primeicons.css';


export default function Home() {
  return (
    <PrimeReactProvider>
      <BreedProvider>
        <Layout/>
      </BreedProvider>
    </PrimeReactProvider>
  )
}
