import React, { useState, useEffect, componentDidMount } from "react";
import { connect, Provider, useSelector, useDispatch } from "react-redux";
import { capitalize  , chunk} from "lodash";

const mapTostate = (state) => {
  return {
    allWarriors: state,
  };
};

const mapToDispatch = (dispatch) => {
  return {
    WarriorsDataBase: (arr) =>
      dispatch({
        type: "create-warriors-arr",
        payload: {
          warriors: arr,
        },
      }),
    FilteredWarriors: (value) =>
      dispatch({
        type: "filtered-warriors",
        payload: {
          checkValue: value,
        },
      }),
  };
};

export const WarriorsApp = (props) => {
  const [checkWarriorValue, setCheckWarriorValue] = useState("");
  const [filteredDataBase, setFilteredDataBase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listsButton , setListstButton] = useState(0)
  const { allWarriors } = props;
  const { WarriorsDataBase } = props;

  useEffect(async () => {
    const warriorsArr = [];
    for (let i = 0; i < 80; i++) {
      const URL = `https://swapi.dev/api/people/${i + 1}/`;
      const response = await fetch(URL);
      const data = await response.json();
      warriorsArr.push(data);
    }
    const response2 = await fetch('https://swapi.dev/api/people/');
    const dataBase2 = await response2.json();
    console.log('THIS NE DATABASE',dataBase2)
    const filteredArrayWithoutErr = warriorsArr.filter(({ name }) => name);
    setFilteredDataBase(filteredArrayWithoutErr);
    WarriorsDataBase(filteredArrayWithoutErr);
    setLoading(false)
  }, []);

  const WarriorsRender = (warriorsArr, pageNumber = 0) => {
    let partsOfCards = [];
console.log(warriorsArr)
    if(warriorsArr.length < 10 || warriorsArr.length === 10){
      partsOfCards.push(warriorsArr)
    }
    if(warriorsArr.length > 10){
     
      partsOfCards = chunk(warriorsArr,10)
    }
    const numberOfPages = partsOfCards.length;
    let buttonNextDisabled = numberOfPages === pageNumber + 1 ? true : false;
    let buttonPrevDisabled = pageNumber + 1 === 1 ? true : false;
    
    
    const cards =  partsOfCards[pageNumber].map(({ name, eye_color, gender, birth_year }) => {
      const [male , female , uknown] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/1200px-Man_silhouette.svg.png' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVf_1JQ-iuOKzPigHfMOY7wQovuA0gNaj0MShaP3XUE4Nl6Ga-U-L7pTE7hqMUFGTRC4&usqp=CAU' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtz_ZY4wBFQ5npbmxk6uz7KdwevErHzHTSw&usqp=CAU'];
      let imgUrl = uknown;
      if(gender === 'male'){
        imgUrl = male
      }
      if(gender === 'female'){
        imgUrl = female
      }  
      return (
        <div class="card col-6 col-sm-3 col-md-2 mb-1" style={{ width: "18 rem" }}>
          <img
            src={imgUrl}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div className="row">
              <div className="col-12">
                <h4>{name}</h4>
              </div>
              <div className="col-12">
                <p>Eye color : {eye_color}</p>
              </div>
              <div className="col-12">
                <p>Birth year : {birth_year}</p>
              </div>
              <div className="col-12">
                <p>Gender : {gender}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    const buttons = <div className="row text-center"><button
    disabled={buttonPrevDisabled}
    onClick={()=>setListstButton(pageNumber - 1)}
    className="col-4 col-sm-4 btn btn-primary m-1"
  >
    Prev
  </button>
 <div className="col-3 ">
   {pageNumber + 1} of {numberOfPages}
 </div>
  <button
    disabled={buttonNextDisabled}
    onClick={()=>setListstButton(pageNumber + 1)}
    className="col-4 col-sm-4 btn btn-primary m-1"
  >
    Next
  </button></div> 
    return (
      <>
      {cards}
      {buttons}
      </>
    )
  };

  const onChangeInput = (e) => {
    // e.preventDefault();
    const targetValue = e.target.value;
    setCheckWarriorValue(targetValue);

    const filteredWarriors = targetValue
      ? allWarriors.filter(({ name }) => name.includes(capitalize(targetValue)))
      : allWarriors;
      setListstButton(0)
    setFilteredDataBase(filteredWarriors);
  };

  return (
    <>
      <div className="row justify-content-around">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="main-logo">Star Wars</h1>
          </div>
          <div className="col-12 text-center justify-content-start">
            <a href="#" className="link-warning m-1">
              Star Wars
            </a>
            <a href="#" className="link-warning m-1">
              Data base
            </a>
            <a href="#" className="link-secondary m-1">
              People
            </a>
          </div>
        </div>
        {loading ? 
        <div className="row justify-content-center">
           <div class="col-4 spinner-grow text-primary m-1" role="status">
      </div>
           <div class="col-4 spinner-grow text-warning m-1" role="status">
      </div>
           <div class="col-4 spinner-grow text-info m-1" role="status">
      </div>
        </div>
       
      : 
      <div className="row justify-content-center">
          <div className="col-12 col-sm-4 col-md-2 text-center">
            <h4 className="filter-logo">Filters</h4>
          </div>
          <div className="col-12 col-sm-10 col-md-10">
            <div className="col-12 col-sm-12 col-md-8">
              <div class="input-group mb-3">
                {/* Search warriors */}
                <input
                  type="text"
                  value={checkWarriorValue}
                  onChange={onChangeInput}
                  class="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="row justify-content-center">
                {WarriorsRender(
                  filteredDataBase,
                  listsButton
                )}
              </div>
            </div>
           
          </div>
        </div>  
      }
        
      </div>
    </>
  );
};

export default connect(mapTostate, mapToDispatch)(WarriorsApp);

