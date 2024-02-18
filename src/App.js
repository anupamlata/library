import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { faChevronLeft, faChevronRight, faRectangleList, faCirclePlus, faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Getapi from "./Getapi";
import Putapi from "./Putapi";
import Postapi from "./Postapi";
function App() {

  return (
    <div className="App">

      <div className='sidebar'>
        <h2 style={{paddingRight:"60px"}}>Hello admin!</h2>
        {/* <div className='side'>
          <div className='side22' style={{maxWidth:"22px"}}>
            <div className='para'>
              <div style={{ minWidth: "5px", paddingRight: "4px", marginRight: "5px" }}><FontAwesomeIcon size={"xl"} color="black" icon={faChevronLeft} /></div>
              <div style={{ minWidth: "40px", textAlign: "start" }}><p>Konyv Kiadasa</p></div>
            </div>
            <div className='para'>
              <div style={{ minWidth: "5px", paddingRight: "4px", marginRight: "5px" }} ><FontAwesomeIcon size={"xl"} color="black" icon={faChevronRight} /></div>
              <div style={{ minWidth: "40px", textAlign: "start" }}><p>Konyv Kiadasa</p></div>
            </div>
            <div className='para'>
              <div style={{ minWidth: "5px", paddingRight: "4px", marginRight: "5px" }}><FontAwesomeIcon size={"xl"} icon={faRectangleList} /></div>
              <div style={{ minWidth: "40px", textAlign: "start" }}><p>Konyv Kiadasa</p></div>
            </div>
            <div className='para'>
              <div style={{ minWidth: "5px", paddingRight: "4px", marginRight: "5px" }}><FontAwesomeIcon size={"xl"} icon={faCirclePlus} /></div>
              <div style={{ minWidth: "40px", textAlign: "start" }}><p>Konyv Kiadasa</p></div>
            </div>
            <div className='para'>
              <div style={{ minWidth: "5px", paddingRight: "4px", marginRight: "5px" }}><FontAwesomeIcon size={"xl"} icon={faCircleUser} /></div>
              <div style={{ minWidth: "40px", textAlign: "start" }}><p>Konyv Kiadasa</p></div>
            </div>
          </div>
          <div className='para1'>
            <FontAwesomeIcon size={"2x"} icon={faGear} />
            <p style={{ paddingLeft: "20px" }}>Beallistic</p>
          </div>
        </div> */}

        <div style={{marginTop:"140px"}}>
          <div style={{ margin: "0px 47px" }}>


            {
              [{
                icon:faChevronLeft,
                name: "Konyv Kiadasa",
              }, {
                icon:faChevronRight,
                name: "Konyv Vissadasa",
              }, {
                icon:faRectangleList,
                name: "Ossazec Disuza",
              }, {
                icon:faCirclePlus,
                name: "Konyvek Sfkutccv",
              }, {
                icon:faCircleUser,
                name: "Fellomersxzj",
              }].map((item, index) => (
                <div key={index} style={{ textAlign: "center", width: "100%", display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
                  <FontAwesomeIcon size={"xl"} color="black" icon={item.icon} style={{ margin: "0px 6px" }} />
                  <p style={{ textAlign: "start" }}>{item.name}</p>
                </div>
              ))
            }
          </div>
          <div className='para1'>
            <FontAwesomeIcon size={"2x"} icon={faGear} />
            <p style={{ paddingLeft: "10px" }}>Beallistic</p>
          </div>
        </div> 
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={< Page1 />} />
        <Route path="/2" exact element={< Page2 />} />
        <Route path="/3" exact element={< Page3 />} />
        <Route path="/get" exact element={< Getapi />} />
        <Route path="/put" exact element={< Putapi />} />
        <Route path="/post" exact element={< Postapi />} />
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
