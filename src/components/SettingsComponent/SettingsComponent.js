import NavComponent from "../NavComponent/NavComponent";
import "./SettingsComponent.css";

const SettingsComponent = () => {
  return (
    <>
      <NavComponent />
      <div className="generalSettingsContainer">
        <h3 className="settingsHeading">General Settings </h3>
        <h5 className="headLine">
          Notifications and emails
          <span className="line notificationsAndEmails"></span>
          <span className="arrow"></span>
        </h5>
        <h5 className="headLine">
          user management <span className="line userManagement"></span>
          <span className="arrow"></span>
        </h5>
        <h5 className="headLine">
          physical libraries <span className="line physicalLibraries"></span>
          <span className="arrow"></span>
        </h5>
        <h5 className="headLine">
          reading events<span className="line readingEvents"></span>
          <span className="arrow"></span>
        </h5>
        <h5 className="headLine">
          invoicing <span className="line invoicing"></span>
          <span className="arrow"></span>
        </h5>
        <h5 className="headLine">
          book statistics <span className="line bookStatistics"></span>
          <span className="arrow"></span>
        </h5>
        <h5 className="headLine">
          reader statistics <span className="line readerStatistics"></span>
          <span className="arrow"></span>
        </h5>
        <h5 className="headLine">
          events statistics
          <span className="line eventsStatistics">
            <span className="arrow"></span>
          </span>
        </h5>
      </div>
      <div className="bookSettingsContainer">
        <h3 className="settingsHeading">Book Settings</h3>
        <h5 className="headLine">
          Manage genres <span className="line manageGenres"></span>
          <span className="arrow-right"></span>
        </h5>
        <h5 className="headLine">
          book visibility <span className="line bookVisibility"></span>
          <span className="arrow-right"></span>
        </h5>
        <h5 className="headLine">
          authors database <span className="line authorsDatabase"></span>
          <span className="arrow-right"></span>
        </h5>
        <h5 className="headLine">
          book covers<span className="line bookCovers"></span>
          <span className="arrow-right"></span>
        </h5>
      </div>
    </>
  );
};
export default SettingsComponent;
