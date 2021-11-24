import React from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
const MovieList = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      {props.movies
        .filter((el) =>
          el.Title.toLowerCase().includes(props.searchtTerm.toLowerCase())
        )
        .map((movie, index) => (
          <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="movie"></img>
            <p>Titel :{movie.Title}</p>
          </div>
        ))}
    </div>
  );
};

export default MovieList;
