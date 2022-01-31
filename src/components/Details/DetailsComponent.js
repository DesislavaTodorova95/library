
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
    
</div>

    </div></>)
}
export default DetailsComponent;