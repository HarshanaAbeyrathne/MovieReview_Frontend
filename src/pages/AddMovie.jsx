import axios from 'axios';
import React from 'react'

function AddMovie() {

    const [movie, setMovie] = React.useState();
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        getMovie();
    }, []);
    
    const uploadMovie = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', movie);

        const response = await axios.post('http://localhost:5000/api/movie/addmovie', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
        return response.data;
    }

    const handleSubmit = (e) => {
        console.log(e.target.files[0]);
        setMovie(e.target.files[0]);
    }

    //get the image from the user
    const getMovie = async () => {
        const response = await axios.get('http://localhost:5000/api/movie/getmovie');
        console.log(response);
        setMovies(response.data);
        
    }

  return (
   <div>
        <form onSubmit={uploadMovie}>
            <input type="file" accept="image/*" onChange={handleSubmit}></input>
            <button type="submit">Submit</button>
        </form>
   </div>
  )
}

export default AddMovie