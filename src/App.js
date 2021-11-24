import React, { useState } from "react";
import Movielist from "./component/Movielist";

import Addmovie from "./component/Addmovie";

import "./App.css";
import Searchbox from "./component/SearchBox";

function App() {
  const [Movie, setMovie] = useState([
    {
      Title: "Me before you  ",
      description: "film ",
      Poster:
        "http://www.zoom-cinema.fr/media/photos/14271/affiche-me-before-you.jpg",
    },
    {
      Title: " divergent",
      description: "film",
      Poster:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-150474-20140320-divergent-x1800-1395331805.jpg?resize=1800,1200&w=1800",
    },
    {
      Title: "Red Notice",
      description: "film",
      Poster:
        "https://fr.web.img4.acsta.net/c_310_420/pictures/21/10/21/15/41/2023058.jpg",
    },
  ]);
  const [searchtTerm, setSearchtTerm] = useState("");
  return (
    <div className="App">
      <Movielist movies={Movie} searchtTerm={searchtTerm} />

      <Addmovie movies={Movie} setMovie={setMovie} />
      <Searchbox movies={Movie} setSearchtTerm={setSearchtTerm} />
    </div>
  );
}

export default App;
