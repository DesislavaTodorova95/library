import "./CatalogComponent.css";
import NavComponent from "../NavComponent/NavComponent";
import Maskbook from './static/Maskbook.png'
import bookCov from './static/bookCov.png'
const CatalogComponent = () => {
  return (
    <>
      <NavComponent />
      <div id="catalogDiv">
        <p className="headCatalog">All books</p>
        <form id="searchBar">
          
<input type="search" placeholder="Search" id="site-search" name="q"
       aria-label="Search"></input>
      <button type="submit" id='searhButton' form="searchBar"></button>
<div id="books">
 <div className="bookContainer">
  <section className="imageSection"><img src={Maskbook} alt="bookcover"></img></section>
  
   <section className="bookInfoSection">
     <h4 className="bookTitle">Title</h4>
     <h5 className="bookAuthor">Author</h5>
     <h5 className="bookGenre">Genre</h5>
     <div className="createdOrUpdated"><h5 className="updated">created on: </h5>
     <h5 className="created">updated on: </h5></div>
   </section>
   </div>


 <div className="bookContainer">
   <section className="imageSection"><img src={bookCov} alt='bookcover'></img></section>
 </div>
</div>




</form>
      </div>
    </>
  );
};

export default CatalogComponent;
