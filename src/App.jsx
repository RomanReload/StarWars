import React, { useState, useEffect, componentDidMount } from "react";
import { connect, Provider, useSelector, useDispatch } from "react-redux";

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
      FilteredWarriors: (value) => dispatch({
          type:'filtered-warriors',
          payload:{
              checkValue : value,
          }
      })
  };
};

export const WarriorsApp = (props) => {
  const [numberForSlice, setNumberForSlice] = useState(0);
  const [checkWarriorValue, setCheckWarriorValue] = useState('');

  const { allWarriors } = props;
  const { WarriorsDataBase , FilteredWarriors } = props;

  useEffect(async () => {
    const warriorsArr = [];
    for (let i = 0; i < 50; i++) {
      const URL = `https://swapi.dev/api/people/${i + 1}/`;
      const response = await fetch(URL);
      const data = await response.json();
      warriorsArr.push(data);
    }
    WarriorsDataBase(warriorsArr);
  }, []);

  const WarriorsRender = (warriorsArr, numberForSlice1, numberForSlice2) => {
    const slicedWarriorsArr = warriorsArr.slice(
      numberForSlice1,
      numberForSlice2
    );



    return slicedWarriorsArr.map(({ name, eye_color, gender , birth_year }) => {
      return (
        <div class="card col-2 m-3" style={{ width: "18 rem" }}>
          <img
            src="https://ggscore.com/media/logo/t32910.png"
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
  };


const onChangeInput = (e)=>{
    e.preventDefault();
    setCheckWarriorValue(e.target.value);
    FilteredWarriors(e.target.value)
}
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Star Wars</h1>
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
        <div className="row">
          <div className="col-2">
            <h4>Filters</h4>
          </div>
          <div className="col-10">
            <div className="col-12">
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
              <div className="row">
                {WarriorsRender(
                  allWarriors,
                  numberForSlice,
                  numberForSlice + 10
                )}
              </div>
            </div>
            <div className="row justify-content-lg-center">
              <button disabled={numberForSlice === 0 ? true : false} onClick={()=>setNumberForSlice(numberForSlice-10)} className="col-3 btn btn-primary m-1">Prev</button>
              <button disabled={numberForSlice === 40 ? true : false} onClick={()=>setNumberForSlice(numberForSlice+10)} className="col-3 btn btn-primary m-1">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapTostate, mapToDispatch)(WarriorsApp);

console.log('LUKE Walker'.includes('r'))
