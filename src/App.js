import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axiosInstance from './api/axiosInstance';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {

  
  const [searchTerm, setSerachTerm] = useState('Fast and Furious');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasSearch, setHasSearch]= useState(false);

  //Load movies in start using useState
  useEffect(() => {
    search();
  }, [page, hasSearch]);



  function search(){

    //search starts here
    setLoading(true);

    const params = {
      'apikey': '737f3d5e',
      's': searchTerm,
      'page': page
    }

    axiosInstance.get('', {params})
    .then((response)=>{
      setData(response.data);
      console.log(response);
      setMovies((prevMovies)=>prevMovies.concat((response.data.Search ||[])));
      setLoading(false);

      //search completed
      // setHasSearch(false);
    })
    .catch((err) =>{
      console.log(err);
      setError(err.message);
      setLoading(false);
    });

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMovies([]);
    setPage(1);
    setHasSearch(!hasSearch);
    // search();     
  }

  
  return (
    <div className="App">
    <Navbar searchTerm={searchTerm} setSearchTerm={setSerachTerm} handleSubmit={handleSubmit}/>
    <div className="container my-4">
      {loading && <p>Loading....</p>}
      {!loading && error && <p>Something went wrong: {error}</p>}
      {data?.totalResults == 0 ? <h2>No Results Found</h2>:
      (
      <InfiniteScroll className="row"
      dataLength={movies?.length}
      next={()=>{setPage(page+1)}}
      hasMore={movies?.length < data?.totalResults}
      loader={<h2>Loading......</h2>}
      >
          {movies.map((movie, index)=>{
            return <MovieCard movie={movie} key={index}/>
          })}
      </InfiniteScroll>
      )}
    </div>

      
    </div>
  );
}

export default App;
