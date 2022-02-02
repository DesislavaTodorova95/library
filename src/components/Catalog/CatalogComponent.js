import "./CatalogComponent.css";
import NavComponent from "../NavComponent/NavComponent";
import Maskbook from "./static/Maskbook.png";
import bookCov from "./static/bookCov.png";
import { Link } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import { Redirect } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Book from "../BookComponent/Book";

const CatalogComponent = () => {
  const { token } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [searchTerm, setTerm] = useState("");

  const searchByName = async (e) => {
    e.preventDefault();
    if (token && searchTerm) {
      try {
         axios
          .post('https://books-library-dev.herokuapp.com/api/book/search',{ "pattern": `${searchTerm}` }, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            }, 
           
          }
         )
          .then(res => {console.log(res);
            setBooks(res.data)})
          .catch((error) => {
            throw new Error(error);
          });
          setTerm('')
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      axios
        .get("https://books-library-dev.herokuapp.com/api/book", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setBooks(res.data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <NavComponent />
      <div id="catalogDiv">
        <p className="headCatalog">All books</p>
        <form onSubmit={searchByName} id="searchBar">
          <input
            type="text"
            placeholder="Search"
            id="site-search"
            onChange={(e) => setTerm(e.target.value)}
            value={searchTerm}
          ></input>
          <button type="submit" id="searhButton" form="searchBar"></button>
          <div id="books">
            {books
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((book) => (
                <Book key={book._id} {...book} />
              ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default CatalogComponent;
