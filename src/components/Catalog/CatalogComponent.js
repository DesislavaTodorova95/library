import "./CatalogComponent.css";
import NavComponent from "../NavComponent/NavComponent";

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



</form>
      </div>
    </>
  );
};

export default CatalogComponent;
