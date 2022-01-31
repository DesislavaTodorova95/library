
import NavComponent from '../NavComponent/NavComponent';
import './DetailsComponent.css'
import bookPhoto from './static/bookPhoto.png'
const DetailsComponent = ()=>{
    return(<>
    <NavComponent/>
    <div id='detailsContainer'>

    <img className='coverPhoto' src={bookPhoto} alt='book cover'></img>
   
<div className='infoDiv'>
    <div className='titleDiv'><span className='titleHead'>Harry Potter and the Goblet of Fire</span></div>
    <h5 className='bookAuthorDet'>Author</h5>
    <h5 className='bookGenreDetails'>Genre:<span className='spanDescribe'>Fiction</span></h5>
    <h5 className='createdOn'>Created on:<span className='spanDescribe'>22.12.2021</span></h5>
    <h5 className='updatedOn'>Updated on:<span className='spanDescribe'>25.12.2021</span></h5>
<div className='description'>
    <h4 className='descriptionHead'>Short description</h4>
    <p className='plot'>It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete. The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic.</p>
</div>


</div>

    </div></>)
}
export default DetailsComponent;