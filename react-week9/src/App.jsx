import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const styleA = { color: "orange" };

  return (
    <>
      <Header />

      <MovieList />
    </>
  );
}

function Header() {
  return (
    <div id="header">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom"
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            Movie App
          </a>
        </div>
      </nav>
    </div>
  );
}

function MovieList() {
  const movie_list = [
    {
      id: 1,
      image: "https://picsum.photos/400/98",
      title: "Captan America",
      descr: "perfect and fantastic movie",
      is_active: true,
      is_new: true,
    },
    {
      id: 2,
      image: "https://picsum.photos/400/99",
      title: "Captan Avengers",
      descr: "perfect and fantastic movie",
      is_active: true,
      is_new: true,
    },
    {
      id: 3,
      image: "https://picsum.photos/400/100",
      title: "Captan man",
      descr: "perfect and fantastic movie",
      is_active: true,
      is_new: true,
    },
    {
      id: 4,
      image: "https://picsum.photos/400/298",
      title: "Captan man",
      descr: "perfect and fantastic movie",
      is_active: true,
      is_new: true,
    },
  ];

  return (
    <div className="container">
      <h2 className="title">Movie List</h2>

      {movie_list.filter((m) => m.is_active).length === 0 ? (
        <div>Film Bulunamadı</div>
      ) : (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
          {movie_list
            .filter((m) => m.is_active)
            .map((m, index) => (
              <Movie key={index} movieObj={m} />
            ))}
        </div>
      )}
    </div>
  );
}
function Movie({ movieObj }) {
  // const imageUrl = "https://picsum.photos/200/300";
  //const title = "Captan America";
  // const descr = "perfect and fantastic movie";

  //  const movieObj = {
  //   Image: "https://picsum.photos/200/300",
  //   title: "Captan America",
  //   descr: "perfect and fantastic movie",
  // };

  return (
    <div className="col">
      {movieObj.is_active && (
        <div className="card movie">
          <img src={movieObj.image} alt="" />
          <h3 className={`f30 red ${movieObj.is_new ? "new" : ""}`}>
            {movieObj.title}
          </h3>
          <p>{movieObj.descr}</p>
        </div>
      )}
    </div>
  );
}

export default App;
