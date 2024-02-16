import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { IoHomeOutline, IoMenu, IoClose } from "react-icons/io5";
import { LuPlane, LuWallet } from "react-icons/lu";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaLocationDot, FaArrowRightArrowLeft, FaUser } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value: number) {
  let scaledValue = value;

  while (scaledValue >= 5000) {
    scaledValue /= 5000;
  }

  return `$${scaledValue}`;
}

function calculateValue(value: number) {
  return 50 * value;
}

export default function Home() {
  // CONSTANTS

  const locationOne = "NEW YORK (JFK)";
  const locationTwo = "MUMBAI (BOM)";

  // sTATES
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [flights, setFlights] = useState(true);
  const [wallet, setWallet] = useState(false);
  const [reports, setReports] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [settings, setSettings] = useState(false);
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [multiCity, setMultiCity] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [departure, setDeparture] = useState(locationOne);
  const [destination, setDestination] = useState(locationTwo);
  const [travellers, setTravellers] = useState("2 TRAVELLERS");
  const [flightType, setFlightType] = useState("FIRST CLASS");
  const [ticketClass, setTicketClass] = useState("TICKET OF CLASS");
  const [value, setValue] = useState<number[]>([10, 50]);

  // FUNCTIONS

  const handleDashboard = () => {
    setDashboard(true);
    setFlights(false);
    setReports(false);
    setWallet(false);
    setStatistics(false);
    setSettings(false);
    setMenuOpen(false);
  };

  const handleFlights = () => {
    setDashboard(false);
    setFlights(true);
    setReports(false);
    setWallet(false);
    setStatistics(false);
    setSettings(false);
    setMenuOpen(false);
  };

  const handleWallet = () => {
    setDashboard(false);
    setFlights(false);
    setReports(false);
    setWallet(true);
    setStatistics(false);
    setSettings(false);
    setMenuOpen(false);
  };

  const handleReports = () => {
    setDashboard(false);
    setFlights(false);
    setReports(true);
    setWallet(false);
    setStatistics(false);
    setSettings(false);
    setMenuOpen(false);
  };

  const handleStatistics = () => {
    setDashboard(false);
    setFlights(false);
    setReports(false);
    setWallet(false);
    setStatistics(true);
    setSettings(false);
    setMenuOpen(false);
  };

  const handleSettings = () => {
    setDashboard(false);
    setFlights(false);
    setReports(false);
    setWallet(false);
    setStatistics(false);
    setSettings(true);
    setMenuOpen(false);
  };

  const handleOneWay = () => {
    setOneWay(true);
    setRoundTrip(false);
    setMultiCity(false);
  };

  const handleRoundTrip = () => {
    setOneWay(false);
    setRoundTrip(true);
    setMultiCity(false);
  };

  const handleMultiCity = () => {
    setOneWay(false);
    setRoundTrip(false);
    setMultiCity(true);
  };

  const handleToggleLocation = () => {
    if (departure === locationOne) {
      setDeparture(locationTwo);
      setDestination(locationOne);
    } else {
      setDeparture(locationOne);
      setDestination(locationTwo);
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <>
      <div className="sidebar">
        <div className="side-header">
          <div className="profile">
            <Image
              src="/img/profile.jpg"
              alt="profile"
              width={70}
              height={70}
            />
          </div>
          <h4>ALEX JOHNSON</h4>
          <p>alex.johnson@gmail.com</p>
        </div>
        <div className="nav">
          <div
            className={dashboard ? "nav-active" : "nav-opt"}
            onClick={handleDashboard}
          >
            <IoHomeOutline size={18} color="#d6a217" />
            <p>DASHBOARD</p>
          </div>
          <div
            className={flights ? "nav-active" : "nav-opt"}
            onClick={handleFlights}
          >
            <LuPlane size={20} color="#d6a217" />
            <p>FLIGHTS</p>
          </div>
          <div
            className={wallet ? "nav-active" : "nav-opt"}
            onClick={handleWallet}
          >
            <LuWallet size={18} color="#d6a217" />
            <p>WALLET</p>
          </div>
          <div
            className={reports ? "nav-active" : "nav-opt"}
            onClick={handleReports}
          >
            <HiOutlineNewspaper size={20} color="#d6a217" />
            <p>REPORTS</p>
          </div>
          <div
            className={statistics ? "nav-active" : "nav-opt"}
            onClick={handleStatistics}
          >
            <AiOutlinePieChart size={20} color="#d6a217" />
            <p>STATISTICS</p>
          </div>
          <div
            className={settings ? "nav-active" : "nav-opt"}
            onClick={handleSettings}
          >
            <FiSettings size={20} color="#d6a217" />
            <p>SETTINGS</p>
          </div>
        </div>
        <div className="active-users">
          <p className="users-text">ACTIVE USERS</p>
          <div className="users">
            <div className="user">
              <Image
                src="/img/user-one.jpg"
                alt="profile"
                width={40}
                height={40}
              />
            </div>
            <div className="user user-shift">
              <Image
                src="/img/user-two.png"
                alt="profile"
                width={70}
                height={70}
              />
            </div>
            <div className="user user-shift">
              <Image
                src="/img/profile.jpg"
                alt="profile"
                width={70}
                height={70}
              />
            </div>
            <div className="user user-shift">
              <Image
                src="/img/user-three.png"
                alt="profile"
                width={70}
                height={70}
              />
            </div>
            <div className="user-shift plus">
              <p>+78</p>
            </div>
          </div>
        </div>
        <div className="map">
          <Image src="/img/map-1.png" alt="profile" width={281} height={176} />
        </div>
      </div>
      {menuOpen && (
        <div className="sidebar-mobile">
          <div className="side-header">
            <div className="profile">
              <Image
                src="/img/profile.jpg"
                alt="profile"
                width={70}
                height={70}
              />
            </div>
            <h4>ALEX JOHNSON</h4>
            <p>alex.johnson@gmail.com</p>
          </div>
          <div className="nav">
            <div
              className={dashboard ? "nav-active" : "nav-opt"}
              onClick={handleDashboard}
            >
              <IoHomeOutline size={18} color="#d6a217" />
              <p>DASHBOARD</p>
            </div>
            <div
              className={flights ? "nav-active" : "nav-opt"}
              onClick={handleFlights}
            >
              <LuPlane size={20} color="#d6a217" />
              <p>FLIGHTS</p>
            </div>
            <div
              className={wallet ? "nav-active" : "nav-opt"}
              onClick={handleWallet}
            >
              <LuWallet size={18} color="#d6a217" />
              <p>WALLET</p>
            </div>
            <div
              className={reports ? "nav-active" : "nav-opt"}
              onClick={handleReports}
            >
              <HiOutlineNewspaper size={20} color="#d6a217" />
              <p>REPORTS</p>
            </div>
            <div
              className={statistics ? "nav-active" : "nav-opt"}
              onClick={handleStatistics}
            >
              <AiOutlinePieChart size={20} color="#d6a217" />
              <p>STATISTICS</p>
            </div>
            <div
              className={settings ? "nav-active" : "nav-opt"}
              onClick={handleSettings}
            >
              <FiSettings size={20} color="#d6a217" />
              <p>SETTINGS</p>
            </div>
          </div>
          <div className="active-users">
            <p className="users-text">ACTIVE USERS</p>
            <div className="users">
              <div className="user">
                <Image
                  src="/img/user-one.jpg"
                  alt="profile"
                  width={40}
                  height={40}
                />
              </div>
              <div className="user user-shift">
                <Image
                  src="/img/user-two.png"
                  alt="profile"
                  width={70}
                  height={70}
                />
              </div>
              <div className="user user-shift">
                <Image
                  src="/img/profile.jpg"
                  alt="profile"
                  width={70}
                  height={70}
                />
              </div>
              <div className="user user-shift">
                <Image
                  src="/img/user-three.png"
                  alt="profile"
                  width={70}
                  height={70}
                />
              </div>
              <div className="user-shift plus">
                <p>+78</p>
              </div>
            </div>
          </div>
          <div className="map">
            <Image
              src="/img/map-1.png"
              alt="profile"
              width={281}
              height={176}
            />
          </div>
        </div>
      )}
      <main className="main-content">
        <div className="menu">
          {menuOpen ? (
            <div onClick={() => setMenuOpen(false)}>
              <IoClose size={30} />
            </div>
          ) : (
            <div onClick={() => setMenuOpen(true)}>
              <IoMenu size={30} />
            </div>
          )}
        </div>
        {dashboard && (
          <div className="dashboard">
            <h1>DashBoard</h1>
          </div>
        )}
        {flights && (
          <div className="flights">
            <div className="search">
              <div className="upper-search">
                <div className="locations">
                  <div className="departure">
                    <FaLocationDot />
                    <select
                      className="select"
                      value={departure}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setDeparture(e.target.value)
                      }
                    >
                      <option value={locationOne}>{locationOne}</option>
                      <option value={locationTwo}>{locationTwo}</option>
                    </select>
                  </div>
                  <div
                    className="toggle-location"
                    onClick={handleToggleLocation}
                  >
                    <FaArrowRightArrowLeft />
                  </div>
                  <div className="destination">
                    <FaLocationDot />
                    <select
                      className="select"
                      value={destination}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setDestination(e.target.value)
                      }
                    >
                      <option value={locationTwo}>{locationTwo}</option>
                      <option value={locationOne}>{locationOne}</option>
                    </select>
                  </div>
                </div>
                <div className="date-travel">
                  <div className="date">
                    <DatePicker
                      selected={startDate}
                      onChange={(date: any) => setStartDate(date)}
                      minDate={new Date()}
                      dateFormat="dd MMMM yyyy"
                      showIcon
                      toggleCalendarOnIconClick
                      icon={
                        <MdCalendarMonth
                          style={{
                            marginTop: "-4px",
                            fontSize: "18px",
                            marginLeft: "-5px",
                          }}
                        />
                      }
                      className="date-input"
                    />
                  </div>
                  <div className="travellers">
                    <FaUser />
                    <select
                      className="select"
                      value={travellers}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setTravellers(e.target.value)
                      }
                    >
                      <option value="1 TRAVELLER">1 TRAVELLER</option>
                      <option value="2 TRAVELLERS">2 TRAVELLERS</option>
                      <option value="3 TRAVELLERS">3 TRAVELLERS</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="lower-search">
                <div className="trip-type">
                  <div
                    className={oneWay ? "trip-type-active" : "trip-type-norm"}
                    onClick={handleOneWay}
                  >
                    <p>ONE WAY</p>
                  </div>
                  <div
                    className={
                      roundTrip ? "trip-type-active" : "trip-type-norm"
                    }
                    onClick={handleRoundTrip}
                  >
                    <p>ROUND TRIP</p>
                  </div>
                  <div
                    className={
                      multiCity ? "trip-type-active" : "trip-type-norm"
                    }
                    onClick={handleMultiCity}
                  >
                    <p>MULTI CITY</p>
                  </div>
                </div>
                <div className="flight-btn">
                  <div className="flight-type">
                    <FaUserTie />
                    <select
                      className="select"
                      value={flightType}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setFlightType(e.target.value)
                      }
                    >
                      <option value="FIRST CLASS">FIRST CLASS</option>
                      <option value="BUSINESS CLASS">BUSINESS CLASS</option>
                      <option value="ECONOMY CLASS">ECONOMY CLASS</option>
                    </select>
                  </div>
                  <div className="search-btn">SEARCH</div>
                </div>
              </div>
            </div>
            <div className="result">
              <div className="result-no">
                <p>RESULT (25)</p>
              </div>
              <div className="result-inputs">
                <div className="filter-btn">
                  <p>FILTER</p>
                </div>
                <select
                  className="select"
                  value={ticketClass}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setTicketClass(e.target.value)
                  }
                >
                  <option value="TICKET OF CLASS">TICKET OF CLASS</option>
                </select>
              </div>
            </div>
            <div className="flight-details">
              <div className="flight-book">
                <div className="first booking">
                  <div className="logo-img">
                    <Image
                      src="/img/emirates.png"
                      alt="profile"
                      width={75}
                      height={50}
                    />
                  </div>
                  <div className="from">
                    <p className="place">JFK</p>
                    <p className="time">13:00</p>
                  </div>
                  <div className="airline">
                    <p className="airline-name">EMIRATES</p>
                    <p className="airline-duration">11H 20M</p>
                    <p className="airline-type">NON-STOP</p>
                  </div>
                  <div className="to">
                    <p className="place">BOM</p>
                    <p className="time">14:20</p>
                  </div>
                  <div className="book-placement">
                    <p className="amount">$1,572</p>
                    <div className="book-btn">
                      <p>BOOK NOW</p>
                    </div>
                  </div>
                  <div className="bottom left cut"></div>
                  <div className="bottom right cut"></div>
                </div>
                <div className="booking center">
                  <div className="logo-img">
                    <Image
                      src="/img/qatar.png"
                      alt="profile"
                      width={75}
                      height={50}
                    />
                  </div>
                  <div className="from">
                    <p className="place">JFK</p>
                    <p className="time">13:00</p>
                  </div>
                  <div className="airline">
                    <p className="airline-name">EMIRATES</p>
                    <p className="airline-duration">11H 20M</p>
                    <p className="airline-type">NON-STOP</p>
                  </div>
                  <div className="to">
                    <p className="place">BOM</p>
                    <p className="time">14:20</p>
                  </div>
                  <div className="book-placement">
                    <p className="amount">$2,072</p>
                    <div className="book-btn">
                      <p>BOOK NOW</p>
                    </div>
                  </div>
                  <div className="top left cut"></div>
                  <div className="top right cut"></div>
                  <div className="bottom left cut"></div>
                  <div className="bottom right cut"></div>
                </div>
                <div className="booking center">
                  <div className="logo-img-lu">
                    <Image
                      src="/img/luftansa.png"
                      alt="profile"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="from">
                    <p className="place">JFK</p>
                    <p className="time">13:00</p>
                  </div>
                  <div className="airline">
                    <p className="airline-name">EMIRATES</p>
                    <p className="airline-duration">11H 20M</p>
                    <p className="airline-type">NON-STOP</p>
                  </div>
                  <div className="to">
                    <p className="place">BOM</p>
                    <p className="time">14:20</p>
                  </div>
                  <div className="book-placement">
                    <p className="amount">$1,872</p>
                    <div className="book-btn">
                      <p>BOOK NOW</p>
                    </div>
                  </div>
                  <div className="top left cut"></div>
                  <div className="top right cut"></div>
                  <div className="bottom left cut"></div>
                  <div className="bottom right cut"></div>
                </div>
                <div className="booking last">
                  <div className="logo-img">
                    <Image
                      src="/img/qatar.png"
                      alt="profile"
                      width={75}
                      height={50}
                    />
                  </div>
                  <div className="from">
                    <p className="place">JFK</p>
                    <p className="time">13:00</p>
                  </div>
                  <div className="airline">
                    <p className="airline-name">EMIRATES</p>
                    <p className="airline-duration">11H 20M</p>
                    <p className="airline-type">NON-STOP</p>
                  </div>
                  <div className="to">
                    <p className="place">BOM</p>
                    <p className="time">14:20</p>
                  </div>
                  <div className="book-placement">
                    <p className="amount">$1,872</p>
                    <div className="book-btn">
                      <p>BOOK NOW</p>
                    </div>
                  </div>
                  <div className="top left cut"></div>
                  <div className="top right cut"></div>
                </div>
              </div>
              <div className="flight-diagram">
                <div className="locs">
                  <div className="locs-from">
                    <p className="from">FROM</p>
                    <p className="jfk">JFK</p>
                  </div>
                  <div className="locs-non">
                    <p>NON-STOP</p>
                  </div>
                  <div className="locs-to">
                    <p className="to">TO</p>
                    <p className="jfk">BOM</p>
                  </div>
                </div>
                <div className="maps">
                  <Image
                    src="/img/map-2.png"
                    alt="profile"
                    width={281}
                    height={176}
                  />
                </div>
                <div className="stops">
                  <div className="non-stops">
                    <p>NON STOP</p>
                  </div>
                  <div className="one-stops">
                    <p>ONE STOP</p>
                  </div>
                  <div className="more-stops">
                    <p>MORE STOP</p>
                  </div>
                </div>
                <div className="price">
                  <p className="price-text">PRICE</p>
                  <Box sx={{ marginTop: "1em" }}>
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={value}
                      onChange={handleChange}
                      scale={calculateValue}
                      valueLabelFormat={valueLabelFormat}
                      getAriaValueText={valueLabelFormat}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                      sx={{ color: "#d6a217" }}
                    />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        )}
        {wallet && (
          <div className="dashboard">
            <h1>Wallet</h1>
          </div>
        )}
        {reports && (
          <div className="dashboard">
            <h1>Reports</h1>
          </div>
        )}
        {statistics && (
          <div className="dashboard">
            <h1>Statistics</h1>
          </div>
        )}
        {settings && (
          <div className="dashboard">
            <h1>Settings</h1>
          </div>
        )}
      </main>
    </>
  );
}
