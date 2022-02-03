import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Book.css";

const Book = ({ _id, name, author, image, createOn, lastUpdateOn, genre }) => {
  createOn = createOn.slice(0, 10).split("-").join(".");
  lastUpdateOn = lastUpdateOn.slice(0, 10).split("-").join(".");

  return (
    <div className="bookContainer">
      <div className="imageSection">
        <img className="bookImage" src={image} alt="bookcover"></img>
      </div>
      <div className="bookInfoSection">
        <h4 className="info bookTitle">{name}</h4>
        <h5 className="info bookAuthor">{author}</h5>
        <h5 className="info bookGenre">
          Genre: <span className="semibold">{genre.name}</span>
        </h5>
        <div className="AddedUpdatedInfo">
          <h5 className="info created">
            Created on: <span className="semibold">{createOn}</span>
          </h5>
          <h5 className="info updated">
            Updated on: <span className="semibold">{lastUpdateOn}</span>
          </h5>
        </div>
      </div>
      <div className="btnDetailsDiv">
        <Link className="detailsLink" to={`/details/${_id}`}>
          <button className="detailsBtn"></button>
        </Link>
      </div>
    </div>
  );
};
export default Book;
