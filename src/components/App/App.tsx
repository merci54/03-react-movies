import { Toaster } from 'react-hot-toast'
import SearchBar from '../SearchBar/SearchBar'
import './App.module.css'
import 'modern-normalize'

export default function App() {

  return (
    <>
      <div><Toaster
        position="top-center"
        reverseOrder={false}
      /></div>
      <SearchBar />
    </>
  )
}