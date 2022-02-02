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
        <form id="searchBar">
          <input
            type="search"
            placeholder="Search"
            id="site-search"
            name="q"
            aria-label="Search"
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
