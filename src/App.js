import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axiosInstance from './api/axiosInstance';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';

function App() {

  
  const [searchTerm, setSerachTerm] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function search(searchItem){
    const params = {
      'apikey': '737f3d5e',
      's': searchItem
    }

    axiosInstance.get('', {params})
    .then((response)=>{
      console.log(response);
      setData(response.data);
      setLoading(false);
    })
    .catch((err) =>{
      console.log(err);
      setError(err.message);
      setLoading(false);
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    search(searchTerm);
  }

  
  return (
    <div className="App">
    <Navbar searchTerm={searchTerm} setSearchTerm={setSerachTerm} handleSubmit={handleSubmit}/>
    <div className="container my-4">
      {loading && <p>Loading....</p>}
      {!loading && (error ? <p>Something went wrong: {error}</p> :
        <div className="row">
          {data && data.Search.map((movie, index)=>{
            return <MovieCard movie={movie} key={index}/>
          })}
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
