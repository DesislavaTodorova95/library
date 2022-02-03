import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Book.css";

/*"_id": "618a75abefb465359670fd1c",
        "name": "Devolution",
        "author": "Max Brooks",
        "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/Devolution.jpeg",
        "createOn": "2021-10-09T21:00:00.000Z",
        "lastUpdateOn": "2021-10-09T21:00:00.000Z",
        "genre": {
            "_id": "618a7602efb465359670fd21",
            "name": "Horror" */
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
