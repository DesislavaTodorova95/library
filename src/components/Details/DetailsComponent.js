import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import NavComponent from "../NavComponent/NavComponent";
import "./DetailsComponent.css";

const DetailsComponent = ({ match }) => {
  const [currentBook, setCurrentBook] = useState([]);
  const { token } = useContext(UserContext);
  const [bookData, setBookData] = useState("");

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://books-library-dev.herokuapp.com/api/book/${match.params.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setBookData(res.data);
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    } else {
      return <Redirect to="/login" />;
    }
  }, [token, match.params.id]);
  useEffect(() => {
    if (bookData) {
      const book = bookData;
      console.log(book);
      book.createOn = book.createOn.slice(0, 10).split("-").join(".");
      book.lastUpdateOn = book.lastUpdateOn.slice(0, 10).split("-").join(".");
      book.genre = book.genre.name;
      setCurrentBook(book);
    }
  }, [bookData]);

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <NavComponent />
      <div id="detailsContainer">
        <img
          className="coverPhoto"
          src={currentBook.image}
          alt="book cover"
        ></img>
        <div className="infoDiv">
          <div className="titleDiv">
            <span className="titleHead">{currentBook.name}</span>
          </div>
          <h5 className="bookAuthorDet">{currentBook.author}</h5>
          <h5 className="bookGenreDetails">
            Genre:
            <span className="spanDescribe">{currentBook.genre}</span>
          </h5>
          <h5 className="createdOn">
            Created on:
            <span className="spanDescribe">{currentBook.createOn}</span>
          </h5>
          <h5 className="updatedOn">
            Updated on:
            <span className="spanDescribe">{currentBook.lastUpdateOn}</span>
          </h5>
          <div className="description">
            <h4 className="descriptionHead">Short description</h4>
            <p className="plot">
              It follows Harry Potter, a wizard in his fourth year at Hogwarts
              School of Witchcraft and Wizardry, and the mystery surrounding the
              entry of Harry's name into the Triwizard Tournament, in which he
              is forced to compete. The book was published in the United Kingdom
              by Bloomsbury and in the United States by Scholastic.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailsComponent;
