import React from "react";
// import { FaFrownOpen } from "react-icons/fa";
const Day = (props) => {
  let box = 1;
  return (
    <>
      <div className="day-container">
        <div className="day-header">
          <span>MON</span>
        </div>
        <div className="initials-box-container">
          {props.mon.length ? (
            props.mon.map((data, key) => {
              box = Math.ceil(Math.sqrt(props.mon.length));
              let cellLength = 300 / box;
              let styles = {
                width: cellLength,
                height: cellLength,
              };
              return (
                <div
                  key={key}
                  className={"name-initials-box key" + key}
                  style={styles}
                >
                  <span className="initials">{data.name}</span>
                </div>
              );
            })
          ) : (
            <div className="empty-day">
              {/* <FaFrownOpen /> */}
            </div>
          )}
        </div>
      </div>
      <div className="day-container">
        <div className="day-header">
          <span>TUE</span>
        </div>
        <div className="initials-box-container">
          {props.tue.length ? (
            props.tue.map((data, key) => {
              box = Math.ceil(Math.sqrt(props.tue.length));
              let cellLength = 300 / box;
              let styles = {
                width: cellLength,
                height: cellLength,
              };
              return (
                <div
                  key={key}
                  className={"name-initials-box key" + key}
                  style={styles}
                >
                  <span className="initials">{data.name}</span>
                </div>
              );
            })
          ) : (
            <div className="empty-day">
              {/* <FaFrownOpen /> */}
            </div>
          )}
        </div>
      </div>
      <div className="day-container">
        <div className="day-header">
          <span>WED</span>
        </div>
        <div className="initials-box-container">
          {props.wed.length ? (
            props.wed.map((data, key) => {
              box = Math.ceil(Math.sqrt(props.wed.length));
              let cellLength = 300 / box;
              let styles = {
                width: cellLength,
                height: cellLength,
              };
              return (
                <div
                  key={key}
                  className={"name-initials-box key" + key}
                  style={styles}
                >
                  <span className="initials">{data.name}</span>
                </div>
              );
            })
          ) : (
            <div className="empty-day">
              {/* <FaFrownOpen /> */}
            </div>
          )}
        </div>
      </div>
      <div className="day-container">
        <div className="day-header">
          <span>THU</span>
        </div>
        <div className="initials-box-container">
          {props.thu.length ? (
            props.thu.map((data, key) => {
              box = Math.ceil(Math.sqrt(props.thu.length));
              let cellLength = 300 / box;
              let styles = {
                width: cellLength,
                height: cellLength,
              };
              return (
                <div
                  key={key}
                  className={"name-initials-box key" + key}
                  style={styles}
                >
                  <span className="initials">{data.name}</span>
                </div>
              );
            })
          ) : (
            <div className="empty-day">
              {/* <FaFrownOpen /> */}
            </div>
          )}
        </div>
      </div>
      <div className="day-container">
        <div className="day-header">
          <span>FRI</span>
        </div>
        <div className="initials-box-container">
          {props.fri.length ? (
            props.fri.map((data, key) => {
              box = Math.ceil(Math.sqrt(props.fri.length));
              let cellLength = 300 / box;
              let styles = {
                width: cellLength,
                height: cellLength,
              };
              return (
                <div
                  key={key}
                  className={"name-initials-box key" + key}
                  style={styles}
                >
                  <span className="initials">{data.name}</span>
                </div>
              );
            })
          ) : (
            <div className="empty-day">
              {/* <FaFrownOpen /> */}
            </div>
          )}
        </div>
      </div>
      <div className="day-container">
        <div className="day-header">
          <span>SAT</span>
        </div>
        <div className="initials-box-container">
          {props.sat.length ? (
            props.sat.map((data, key) => {
              box = Math.ceil(Math.sqrt(props.sat.length));
              let cellLength = 300 / box;
              let styles = {
                width: cellLength,
                height: cellLength,
              };
              return (
                <div
                  key={key}
                  className={"name-initials-box key" + key}
                  style={styles}
                >
                  <span className="initials">{data.name}</span>
                </div>
              );
            })
          ) : (
            <div className="empty-day">
              {/* <FaFrownOpen /> */}
            </div>
          )}
        </div>
      </div>
      <div className="day-container">
        <div className="day-header">
          <span>SUN</span>
        </div>
        <div className="initials-box-container">
          {props.sun.length ? (
            props.sun.map((data, key) => {
              box = Math.ceil(Math.sqrt(props.sun.length));
              let cellLength = 300 / box;
              let styles = {
                width: cellLength,
                height: cellLength,
              };
              return (
                <div
                  key={key}
                  className={"name-initials-box key" + key}
                  style={styles}
                >
                  <span className="initials">{data.name}</span>
                </div>
              );
            })
          ) : (
            <div className="empty-day">
              {/* <FaFrownOpen /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Day;
