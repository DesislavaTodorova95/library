import NavComponent from '../NavComponent/NavComponent';
import './SettingsComponent.css';

const SettingsComponent= ()=>{
return (<>
<NavComponent/>
<div className="generalSettingsContainer">general settings</div>
<div className="bookSettingsContainer">book settings</div>
</>

)
}
export default SettingsComponent;