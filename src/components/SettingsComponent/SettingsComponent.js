import NavComponent from "../NavComponent/NavComponent";
import "./SettingsComponent.css";

const SettingsComponent = () => {
  return (
    <>
      <NavComponent />
      <div className="generalSettingsContainer">
        <h3 className="settingsHeading">General Settings </h3>
        <h5 className="headLine">Notifications and emails <span className='line'></span><span className="arrow"></span> </h5>
        <h5 className="headLine">user management <span className='line'></span> <span className="arrow"></span></h5>
        <h5 className="headLine">physical libraries <span className='line'></span><span className="arrow"></span> </h5>
        <h5 className="headLine">reading events<span className='line'></span> <span className="arrow"></span> </h5>
        <h5 className="headLine">invoicing <span className='line'></span><span className="arrow"></span></h5>
        <h5 className="headLine">book statistics <span className='line'></span><span className="arrow"></span></h5>
        <h5 className="headLine">reader statistics <span className='line'></span><span className="arrow"></span></h5>
        <h5 className="headLine">events statistics <span className='line'><span className="arrow"></span></span> </h5>

      </div>
      <div className="bookSettingsContainer">
        <h3 className="settingsHeading">Book Settings</h3>
        <h5 className="headLine">Manage genres <span className='line'></span><span className="arrow-right"></span> </h5>
        <h5 className="headLine">book visibility <span className='line'></span> <span className="arrow-right"></span></h5>
        <h5 className="headLine">authors database <span className='line'></span><span className="arrow-right"></span> </h5>
        <h5 className="headLine">book covers<span className='line'></span> <span className="arrow-right"></span> </h5>
        </div>
    </>
  );
};
export default SettingsComponent;
