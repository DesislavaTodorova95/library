import "./CatalogComponent.css";
import NavComponent from "../NavComponent/NavComponent";
const CatalogComponent = () => {
  return (
    <>
      <NavComponent />
      <div id="catalogDiv">
        <p className="headCatalog">All books</p>
      </div>
    </>
  );
};

export default CatalogComponent;
