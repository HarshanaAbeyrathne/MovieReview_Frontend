import axios from 'axios';
import React from 'react';
import GetMoviePictures from '../component/GetMoviePictures.jsx';

function AddMovie() {
    const [movie, setMovie] = React.useState();

 

    const uploadMovie = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', movie);

        try {
            const response = await axios.post('http://localhost:5000/api/movie/addmovie', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("Movie uploaded successfully");
            // console.log(response.data);
            // Fetch updated movie list after successful upload
            // getMovie();
        } catch (error) {
            console.error("Error uploading movie", error);
        }
    }

    const handleSubmit = (e) => {
        // console.log(e.target.files[0]);
        setMovie(e.target.files[0]);
    }

   

    return (
        <div>
            <form onSubmit={uploadMovie}>
                <input type="file" accept="image/*" onChange={handleSubmit}></input>
                <button type="submit">Submit</button>
            </form>
            <GetMoviePictures />
        </div>
    );
}

export default AddMovie;
