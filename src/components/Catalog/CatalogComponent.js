import "./CatalogComponent.css";
import NavComponent from "../NavComponent/NavComponent";
import Maskbook from "./static/Maskbook.png";
import bookCov from "./static/bookCov.png";
import { Link } from "react-router-dom";
const CatalogComponent = () => {
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
            <div className="bookContainer">
              <div className="imageSection">
                <img className="bookImage" src={Maskbook} alt="bookcover"></img>
              </div>

              <div className="bookInfoSection">
                <h4 className="info bookTitle">Title</h4>
                <h5 className="info bookAuthor">Author</h5>
                <h5 className="info bookGenre">Genre</h5>
                <div className="AddedUpdatedInfo">
                  <h5 className="info created">created on: </h5>
                  <h5 className="info updated">updated on: </h5>
                </div>
              </div>
              <div className="btnDetailsDiv">
               <Link className="detailsLink" to="/details/:id"><button className="detailsBtn"></button></Link> 
              </div>
            </div>

            <div className="bookContainer">
              <div className="imageSection">
                <img className="bookImage" src={bookCov} alt="bookcover"></img>
              </div>
              <div className="bookInfoSection">
                <h4 className="info bookTitle">Title</h4>
                <h5 className="info bookAuthor">Author</h5>
                <h5 className="info bookGenre">Genre</h5>
                <div className="AddedUpdatedInfo">
                  <h5 className="info created">created on: </h5>
                  <h5 className="info updated">updated on: </h5>
             

              </div>   </div> <div className="btnDetailsDiv">
              <Link className="detailsLink" to="/details/:id"><button className="detailsBtn"></button></Link> 
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CatalogComponent;
