import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import NavComponent from "../NavComponent/NavComponent";
import "./DetailsComponent.css";

const DetailsComponent = ({match}) => {
const [currentBook, setCurrentBook]= useState('');
const {token, }= useContext(UserContext);

useEffect(()=>{
axios.get(`https://books-library-dev.herokuapp.com/api/book/${match.params.id}`, {headers:{"Content-Type": "application/json", 
"Authorization": `Bearer ${token}`}}).then(res=> setCurrentBook(res.data)).catch((error)=>{throw new Error(error)})
}, [token, match.params.id]);

console.log('current, ', currentBook)
if(!token){
  return <Redirect to='/login'/>
}
// const createdOn = currentBook.createOn.slice(0,10).split('-').join('.');
// const lastUpdate = currentBook.lastUpdateOn.slice(0, 10).split('-').join('.');
  return (
    <>
      <NavComponent />
      <div id="detailsContainer">
        <img className="coverPhoto" src={currentBook.image} alt="book cover"></img>

        <div className="infoDiv">
          <div className="titleDiv">
            <span className="titleHead">
              {currentBook.name}
            </span>
          </div>
          <h5 className="bookAuthorDet">{currentBook.author}</h5>
          <h5 className="bookGenreDetails">
            Genre:<span className="spanDescribe">{currentBook.genre.name}</span>
          </h5>
          <h5 className="createdOn">
            Created on:<span className="spanDescribe">{currentBook.createOn.slice(0, 10).split('-').join('.')}</span>
          </h5>
          <h5 className="updatedOn">
            Updated on:<span className="spanDescribe">{currentBook.lastUpdateOn.slice(0, 10).split('-').join('.')}</span>
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
