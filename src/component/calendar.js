import React, { useState, useEffect } from "react";
import "./a.css";
import Day from "./day";
import birthData from "./data";

const BirthCal = () => {
  
  const [mon, setMonValue] = useState([]);
  const [tue, setTueValue] = useState([]);
  const [wed, setWedValue] = useState([]);
  const [thu, setThuValue] = useState([]);
  const [fri, setFriValue] = useState([]);
  const [sat, setSatValue] = useState([]);
  const [sun, setSunValue] = useState([]);

  const [valueState, setValueState] = useState("2022");

  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [textvalue, setTextValue] = useState(birthData);

  Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
  };

  const renderDay = () => {
    let mn = [],
      te = [],
      wd = [],
      tu = [],
      fi = [],
      st = [],
      sn = [];

    if (!textvalue[0]) {
      setMonValue("");
      setTueValue("");
      setWedValue("");
      setThuValue("");
      setFriValue("");
      setSatValue("");
      setSunValue("");
    } else {
      textvalue.map((data, key) => {
        //console.log("kanika=> ", data);

        const actualBirth = data.birthday;

        let d = new Date(actualBirth);

        if (d.isValid() == false) {
          setMonValue("");
          setTueValue("");
          setWedValue("");
          setThuValue("");
          setFriValue("");
          setSatValue("");
          setSunValue("");
          return;
        }

        if (!actualBirth) {
          setMonValue("");
          setTueValue("");
          setWedValue("");
          setThuValue("");
          setFriValue("");
          setSatValue("");
          setSunValue("");
          return;
        }
        if (!data.name) {
          setMonValue("");
          setTueValue("");
          setWedValue("");
          setThuValue("");
          setFriValue("");
          setSatValue("");
          setSunValue("");
          return;
        }
        if (actualBirth !== "") {
          let bdate = data.birthday;

          bdate = new Date(bdate);
          if (!bdate) return;
          let birthday = new Date(
            valueState,
            bdate.getMonth(),
            bdate.getDate()
          );

          let day1 = birthday.getDay();

          const weekday = day[day1];

          let name = data.name;
          name = name.split(" ");

          let fname = name[0];
          let mname = name[1];
          let lname = name[2];
          fname = fname.substring(0, 1);
          if (mname) {
            mname = mname.substring(0, 1);
          } else {
            mname = "";
          }
          if (lname) {
            lname = lname.substring(0, 1);
          } else {
            lname = "";
          }

          name =
            fname.toUpperCase() + mname.toUpperCase() + lname.toUpperCase();
          if (weekday === "MON") {
            setMonValue("");
            mn.push({
              name: name,
              date: new Date(actualBirth),
            });
            mn = mn.sort((a, b) => b.date - a.date);
            setMonValue(mn);
          }
          if (weekday === "TUE") {
            setTueValue("");

            te.push({
              name: name,
              date: new Date(actualBirth),
            });
            te = te.sort((a, b) => b.date - a.date);
            setTueValue(te);
          }
          if (weekday === "WED") {
            setWedValue("");

            wd.push({
              name: name,
              date: new Date(actualBirth),
            });
            wd = wd.sort((a, b) => b.date - a.date);
            setWedValue(wd);
          }
          if (weekday === "THU") {
            console.log("check");
            setThuValue("");

            tu.push({
              name: name,
              date: new Date(actualBirth),
            });
            tu = tu.sort((a, b) => b.date - a.date);
            setThuValue(tu);

          }
          if (weekday === "FRI") {
            setFriValue("");

            fi.push({
              name: name,
              date: new Date(actualBirth),
            });
            fi = fi.sort((a, b) => b.date - a.date);
            setFriValue(fi);
          }
          if (weekday === "SAT") {
            setSatValue("");

            st.push({
              name: name,
              date: new Date(actualBirth),
            });
            st = st.sort((a, b) => b.date - a.date);
            setSatValue(st);
          }
          if (weekday === "SUN") {
            setSunValue("");
            sn.push({
              name: name,
              date: new Date(actualBirth),
            });
            sn = sn.sort((a, b) => b.date - a.date);
            setSunValue(sn);
          }
        }
        return null;
      });
    }
  };

  const handler = (event) => {
    const value = event.target.value;
    setValueState(value);
    setMonValue("");
    setTueValue("");
    setWedValue("");
    setThuValue("");
    setFriValue("");
    setSatValue("");
    setSunValue("");
    // renderDay();
  };

  const handleText = (ev) => {
    // let val=ev.target.value;
    if (ev.target.value === "") {
      setTextValue([{}]);
      setMonValue("");
      setTueValue("");
      setWedValue("");
      setThuValue("");
      setFriValue("");
      setSatValue("");
      setSunValue("");
    }
    try {
      // let parseval = JSON.parse(ev.target.value);
      setMonValue("");
      setTueValue("");
      setWedValue("");
      setThuValue("");
      setFriValue("");
      setSatValue("");
      setSunValue("");
    } catch (e) {
      console.log("val  err : " + e);
      // our error handling code threw an error. just throw now
      return;
    }
    setTextValue(JSON.parse(ev.target.value));
  };

  useEffect(() => {
    renderDay();
  }, [valueState, textvalue]);

  return (
    <>
      <header className="header">
        <span>Birthday Calendar</span>
      </header>
      <div className="calendar-container">
        <Day
          mon={mon}
          tue={tue}
          wed={wed}
          thu={thu}
          fri={fri}
          sat={sat}
          sun={sun}
        />
      </div>
      <div className="input-section">
        <textarea
          rows={25}
          cols={50}
          value={JSON.stringify(textvalue,undefined,4)}
          onChange={handleText}
        />

        <div className="app__actions">
          <label>Year</label>
          <select className="year-select" value={valueState} onChange={handler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default BirthCal;
