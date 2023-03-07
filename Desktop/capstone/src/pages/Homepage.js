import React, { useEffect, useState } from "react";
import "./homepage.css";
import Chip from "./components/Chips";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import timerButton from ".././images/timerButton.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const details = JSON.parse(localStorage.getItem("details"));
const preferences = JSON.parse(localStorage.getItem("preferences"));
const location = localStorage.getItem("location");



  
  

function getDate(x) {
  var date = new Date(x);
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();
  return `${d}/${m}/${y}`;
}
function getTime(x) {
  var date = new Date(x);
  var h = date.getHours();
  var m = date.getMinutes();
  console.log('start');

  return `${h}:${m}`;
}

export default function Homepage() {
  const [blog, setBlog] = useState({
    status: "ok",
    totalResults: 98494,
    articles: [
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Insider Monkey Transcripts",
        title:
          "AVITA Medical, Inc. (NASDAQ:RCEL) Q4 2022 Earnings Call Transcript",
        description:
          "AVITA Medical, Inc. (NASDAQ:RCEL) Q4 2022 Earnings Call Transcript February 23, 2023 Operator: Good day and thank you for standing by. Welcome to AVITA...",
        url: "https://finance.yahoo.com/news/avita-medical-inc-nasdaq-rcel-111216593.html",
        urlToImage:
          "https://media.zenfs.com/en/insidermonkey.com/f90f8366dd6ecc85d3b487051d267b39",
        publishedAt: "2023-02-26T11:12:16Z",
        content:
          "AVITA Medical, Inc. (NASDAQ:RCEL) Q4 2022 Earnings Call Transcript February 23, 2023\r\nOperator: Good day and thank you for standing by. Welcome to AVITA Medical Fourth Quarter 2022 Earnings Conferenc… [+14195 chars]",
      },
    ],
  });


  const navigate = useNavigate();

  const [music, setMusic] = useState();
  const [userData, setUserData] = useState();
  const [weather, setWeather] = useState();
  const [DisableBtn, setDisableBtn] = useState(false);
  const [countBtnDisable, setcountBtnDisable] = useState(true);
  const [showNotes, setshowNotes] = useState();
  const [isTextAreaEnabled, setIsTextAreaEnabled] = useState(false);
  const [pointerEvents, setPointerEvents] = useState("auto");
  const [increaseHours, setincreaseHours] = useState(0);
  const [increaseMinutes, setincreaseMinutes] = useState(0);
  const [increaseSeconds, setincreaseSeconds] = useState(0);
  const [increaseHoursset, setincreaseHoursset] = useState(0);
  const [increaseMinutesset, setincreaseMinutesset] = useState(0);
  const [increaseSecondsset, setincreaseSecondsset] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0);
  const liveTime = new Date();
  var hours = liveTime.getHours(),
    minutes = liveTime.getMinutes(),
    ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  var Time = hours + ":" + minutes + " " + ampm;
  
  useEffect(() => {
    console.log("USE EFFECT 2");
    const url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9cfa008654b04706bd26f469f8e4d78a";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBlog(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  // console.log(Date(blog.articles[0].publishedAt).toDateString);
  const [loc, setLoc] = useState({
    current: {
      temp_c: "...",
      condition: {
        text: "...",
        icon: "https://i.ibb.co/2qV7BRH/Youtube-loading-symbol-1-wobbly.gif",
      },
      wind_mph: "...",
      wind_kph: "...",
      pressure_mb: "...",
      humidity: "...",
    },
  });
  useEffect(() => {
    console.log("USEEFFECT 1");
    const lat = JSON.parse(location).latitude;
    const lng = JSON.parse(location).longitude;
    const url = `http://api.weatherapi.com/v1/current.json?key=a124fc156be0496fbca154859221606&q=${lat},${lng}&aqi=no
    `;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setLoc(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const [niggas, setNigga] = useState(preferences);
  const closeChipHandler = (e) => {
    setNigga({ ...niggas, [e]: false });
  };

  function timeIncreaseHnadle(e) {
    if (e.target.id === "1") {
      setDisableBtn(true);

      if (increaseHours < 23) {
        setincreaseHours(increaseHours + 1);
      } else {
        setincreaseHours(0);
      }
      if (increaseHours >= 0) {
        setDisableBtn(true);
      } else if (increaseHours < 1) {
        setDisableBtn(false);
      }
    } else if (e.target.id === "2") {
      if (increaseMinutes < 59) {
        setincreaseMinutes(increaseMinutes + 1);
      } else {
        setincreaseMinutes(0);
      }
    } else if (e.target.id === "3") {
      if (increaseSeconds < 59) {
        setincreaseSeconds(increaseSeconds + 1);
      } else {
        setincreaseSeconds(0);
      }
    } else if (e.target.id === "4") {
      if (increaseHours === 0) {
        setincreaseHours(0);
      } else {
        setincreaseHours(increaseHours - 1);
      }
    } else if (e.target.id === "5") {
      if (increaseMinutes === 0) {
        setincreaseMinutes(0);
      } else {
        setincreaseMinutes(increaseMinutes - 1);
      }
    } else if (e.target.id === "6") {
      if (increaseSeconds === 0) {
        setincreaseSeconds(0);
      } else {
        setincreaseSeconds(increaseSeconds - 1);
      }
    }

    if (increaseHours >= 0 || increaseMinutes >= 0 || increaseSeconds >= 0) {
      setDisableBtn(true);
    } else if (
      increaseHours <= 1 ||
      increaseMinutes <= 1 ||
      increaseSeconds <= 1
    ) {
      setDisableBtn(false);
    }
  }
  const renderTime = ({ remainingTime }) => {
    let seconds = Math.floor(remainingTime % 60);
    let minutes = Math.floor((remainingTime / 60) % 60);
    let hour = Math.floor(remainingTime / 3600);
    if (remainingTime === 0) {
      setPointerEvents("auto");
      setincreaseHoursset(0);
      setincreaseMinutesset(0);
      setincreaseSecondsset(0);
    } else {
      setDisableBtn(false);
      setcountBtnDisable(false);
    }
    return (
      <div className="timer">
        <div className="text"></div>
        <div className="liveTimer">
          {hour < 10 ? (
            <div className="value">{"0" + hour}</div>
          ) : (
            <div className="value">{hour}</div>
          )}
          <div>:</div>
          {minutes < 10 ? (
            <div className="value">{"0" + minutes}</div>
          ) : (
            <div className="value">{minutes}</div>
          )}
          <div>:</div>
          {seconds < 10 ? (
            <div className="value">{"0" + seconds}</div>
          ) : (
            <div className="value">{seconds}</div>
          )}
        </div>
      </div>
    );
  };
  function timerStartHandler() {
    setPointerEvents("none");
    setDisableBtn(false);
    setIsPlaying(true);
    setincreaseHours("00");
    setincreaseMinutes("00");
    setincreaseSeconds("00");

    setincreaseHoursset(increaseHours);
    setincreaseMinutesset(increaseMinutes);
    setincreaseSecondsset(increaseSeconds);
    setincreaseHours(increaseHours);
    setincreaseMinutes(increaseHours);
    setincreaseSeconds(increaseHours);
  }
  return (
    <>
      <div className="homepage">
        <div className="homepage-left">
          <div className="left-container1">
            <div className="homep-img-c">
              <img src="https://iili.io/HMDqD74.png" alt="" />
            </div>
            <div className="homep-text-top-section">
              <p>
                <span className="span1">{details.Name}</span>
                <br />
                <span className="span2">{details.Email}</span>
                <br />
                <span className="span3">{details.UserName}</span>
              </p>

              <div className="homep-chip-container">
                {Object.keys(niggas).map((key) => {
                  if (niggas[key] === true) {
                    return (
                      <>
                        <Chip
                          color="#9F94FF"
                          handler={closeChipHandler}
                          field={key}
                        ></Chip>
                      </>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </div>
            </div>
          </div>
          <div className="left-container2">
            <div className="c2-top">
              <p>{new Date().toLocaleDateString()}</p>
              <p>{date.toLocaleTimeString()}</p>
            </div>

            <div className="c2-bottom flex-row">
              <div className="bottom1">
                <img
                  id="b1-1"
                  src={loc ? loc.current.condition.icon : "Loading...."}
                  alt=""
                />
                <p id="b1-2">
                  {loc ? loc.current.condition.text : "Loading ..."}
                </p>
              </div>

              <div className="bottom2">
                <p id="b2-1">🌡️{loc ? loc.current.temp_c : "Loading ..."}°C</p>
                <p id="b2-2">
                  {loc ? loc.current.pressure_mb : "Loading ... "} ‎mbar <br />
                  Pressure
                </p>
              </div>

              <div className="bottom3">
                <p id="b3-1">
                  💨{loc ? loc.current.wind_kph : "Loading ..."} km/h
                  <br /> <span>Wind</span>
                </p>
                <br />
                <p id="b3-2">
                  💦{loc ? loc.current.humidity : "Loading ..."}%
                  <br />
                  <span>Humidity</span>
                </p>
              </div>
            </div>

            <div className="LeftInnerDivSecond">
          <div className="timerDiv">
            <CountdownCircleTimer
              className="timerCircle"
              // isPlaying
              isPlaying={isPlaying}
              key={key}
              duration={
                increaseHoursset * 3600 +
                increaseMinutesset * 60 +
                increaseSecondsset
              }
              colors={"#FF6A6A"}
              onComplete={() => {
                setKey((prevKey) => prevKey + 1);
                // setIsPlaying(false);
              }}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <div className="HourParentDiv">
            <div className="hourDiv">
              <div className="hourDivInner">
                <p>Minutes</p>
                <img
                  className="timerChangeImage"
                  onClick={timeIncreaseHnadle}
                  id="1"
                  src={timerButton}
                  style={{ pointerEvents: pointerEvents }}
                  disabled={!countBtnDisable}
                ></img>
                {increaseHours < 10 ? (
                  <p className="time">{"0" + increaseHours}</p>
                ) : (
                  <p className="time">{increaseHours}</p>
                )}
                <img
                  className="timerChangeImage"
                  onClick={timeIncreaseHnadle}
                  style={{ pointerEvents: pointerEvents }}
                  id="4"
                  src={timerButton}
                  disabled={!countBtnDisable}
                ></img>
              </div>
              <div className="lineDiv">:</div>
              <div className="hourDivInner">
                <p>Minutes</p>
                <img
                  className="timerChangeImage"
                  onClick={timeIncreaseHnadle}
                  id="2"
                  src={timerButton}
                  style={{ pointerEvents: pointerEvents }}
                  disabled={!countBtnDisable}
                ></img>
                {increaseMinutes < 10 ? (
                  <p className="time">{"0" + increaseMinutes}</p>
                ) : (
                  <p className="time">{increaseMinutes}</p>
                )}
                <img
                  className="timerChangeImage"
                  onClick={timeIncreaseHnadle}
                  style={{ pointerEvents: pointerEvents }}
                  id="5"
                  src={timerButton}
                  disabled={!countBtnDisable}
                ></img>
              </div>
              <div className="lineDiv">:</div>

              <div className="hourDivInner">
                <p>Seconds</p>
                <img
                  className="timerChangeImage"
                  onClick={timeIncreaseHnadle}
                  style={{ pointerEvents: pointerEvents }}
                  id="3"
                  src={timerButton}
                  disabled={!countBtnDisable}
                ></img>
                {increaseSeconds < 10 ? (
                  <p className="time">{"0" + increaseSeconds}</p>
                ) : (
                  <p className="time">{increaseSeconds}</p>
                )}
                <img
                  disabled={!countBtnDisable}
                  className="timerChangeImage"
                  onClick={timeIncreaseHnadle}
                  style={{ pointerEvents: pointerEvents }}
                  id="6"
                  src={timerButton}
                ></img>
              </div>
            </div>
            <button
              onClick={timerStartHandler}
              disabled={!DisableBtn}
              className="startButton"
            >
              Start
            </button>
          </div>
        </div>


          </div>
        </div>

        
        <div className="homepage-right">
          <div className="right-container flex-column">
            <div
              style={{
                backgroundImage: `url(${blog.articles[0].urlToImage})`,
              }}
              className="right-top flex"
              alt=""
            >
              <div className="blog-title">
                <p>{blog.articles[0].title}</p>
                <p>
                  {" "}
                  {getDate(blog.articles[0].publishedAt)} |{" "}
                  {getTime(blog.articles[0].publishedAt)}
                </p>
              </div>
            </div>

            <div className="blog-body">
              <p className="blog-body-p">{blog.articles[0].content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
