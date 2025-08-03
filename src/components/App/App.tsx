import toast, { Toaster } from 'react-hot-toast'
import SearchBar from '../SearchBar/SearchBar'
import './App.module.css'
import 'modern-normalize'
import { useState } from 'react'
import { moviesRequest } from '../../services/moiveService'
import type { Movie } from '../../types/movie'
import MovieGrid from '../MovieGrid/MovieGrid'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loader from '../Loader/Loader'
import MovieModal from '../MovieModal/MovieModal'
export default function App() {

  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (query: string) => {
    try {
      setIsError(false)
      setMovies([])
      setIsLoading(true)

      const moviesObject = await moviesRequest(query);

      if (!(moviesObject.results.length > 0)) {
        toast.error('No movies found for your request.')
        return
      }

      setMovies(moviesObject.results)

    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }

  }
  const selectMovie = (movie: Movie | null) => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <MovieGrid movies={movies} onSelect={selectMovie} />
      {isModalOpen && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </>
  )
}