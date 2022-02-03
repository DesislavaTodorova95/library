import "./CatalogComponent.css";
import NavComponent from "../NavComponent/NavComponent";
import UserContext from "../../Contexts/UserContext";
import { Redirect } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Book from "../BookComponent/Book";

const CatalogComponent = () => {
  const { token } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [searchTerm, setTerm] = useState("");
const [getAllBooks, setGetAllBooks] = useState(false)
  const searchByName = async (e) => {
    e.preventDefault();
    if (token && searchTerm!== '') {
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
        setGetAllBooks(false)
    }
  }, [token, getAllBooks]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <NavComponent />
      <div id="catalogDiv">
        <p className="headCatalog" onClick={(e)=>{e.preventDefault(); setGetAllBooks(true)}}>All books</p>
        <form onSubmit={searchByName} id="searchBar">
          <input
          form="searchBar"
            type="text"
            placeholder="Search"
            id="site-search"
            onChange={(e) => setTerm(e.target.value)}
            value={searchTerm}
          ></input>
          <button type="submit" id="searhButton" form="searchBar"></button>
          <div id="books">
            {
           (books.length<1) ? 
             <p className={'no-books'}>There are no books Found...</p>
             
            :
              books
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
