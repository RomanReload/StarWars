import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { capitalize } from "lodash";
import WarriorsRender from "./components/warriorsRender";
import FilterPCdisplay from "./components/filterPCdis";
import filterMobile from "./components/filterMobile";
import Search from "./components/search";
import logo from "./components/logo";


const mapTostate = (state) => {
  const { warriors } = state;
  const { filteredWarriors } = state;
  const { genderFilter } = state;
  const { filteredByGender } = state;
  return {
    allWarriors: warriors,
    filteredWarriorsRedux: filteredWarriors,
    genderFilteredWarriors: genderFilter,
    filteredByGender: filteredByGender,
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
    filteredFromInput: (value) =>
      dispatch({
        type: "filtered-warriors",
        payload: {
          checkValue: capitalize(value),
        },
      }),

    genderMaleFilter: (boolean = false) => {
      dispatch({
        type: "gender-male-filter",
        payload: {
          male: boolean,
        },
      });
    },
    genderFemaleFilter: (boolean = false) => {
      dispatch({
        type: "gender-female-filter",
        payload: {
          female: boolean,
        },
      });
    },
    colorEyeFilter: (eyeColor) => {
      dispatch({
        type: "EYE-FILTER",
        payload: {
          eyeColor: eyeColor,
        },
      });
    },
  };
};

export const WarriorsApp = (props) => {
  const [checkWarriorValue, setCheckWarriorValue] = useState("");
  const [displayWidth] = useState(window.innerWidth);
  const [checkGenderBox, setCheckGenderBox] = useState({
    male: false,
    female: false,
  });
  const [loading, setLoading] = useState(true);
  const [listsButton, setListstButton] = useState(0);

  const { filteredWarriorsRedux } = props;
 
  const {
    WarriorsDataBase,
    filteredFromInput,
    genderMaleFilter,
    genderFemaleFilter,
    colorEyeFilter,
  } = props;
 
  useEffect(() => {
    async function fetchData() {
      const allWarriorsFromDB = [];
      for (let i = 0; i < 8; i++) {
        const URL = `https://swapi.dev/api/people/?page=${i + 1}`;
        const response = await fetch(URL);
        const data = await response.json();
        const { results } = data;
        allWarriorsFromDB.push(...results);
      }
      const filteredArrayWithoutErr = allWarriorsFromDB.filter(
        ({ name }) => name
      );
      WarriorsDataBase(filteredArrayWithoutErr);
      filteredFromInput();
      setLoading(false);
    }
    fetchData();
  }, [WarriorsDataBase,filteredFromInput]);

  const filterFemale = (e) => {
    const checked = e.target.checked;
    setCheckGenderBox({ male: checkGenderBox.male, female: checked });
    genderFemaleFilter(checked);
    setListstButton(0);
  };
  const filterMale = (e) => {
    const checked = e.target.checked;
    setCheckGenderBox({ male: checked, female: checkGenderBox.female });
    genderMaleFilter(checked);
    setListstButton(0);
  };

  const eyeColorFilter = (eyeColor) => {
    colorEyeFilter(eyeColor);
    setListstButton(0);
  };

  const onChangeInput = (e) => {
    genderMaleFilter();
    genderFemaleFilter();

    const targetValue = e.target.value;
    setCheckWarriorValue(targetValue);
    filteredFromInput(targetValue);
    setCheckGenderBox({ male: false, female: false });
    setListstButton(0);
  };

  return (
    <>
      <div className="row justify-content-around">
       {logo()}
        {loading ? (
          <div className="row justify-content-center">
            <div
              class="col-4 spinner-grow text-primary m-1"
              role="status"
            ></div>
            <div
              class="col-4 spinner-grow text-warning m-1"
              role="status"
            ></div>
            <div class="col-4 spinner-grow text-info m-1" role="status"></div>
          </div>
        ) : (
          <div className="row justify-content-around">
            {displayWidth > 400
              ? FilterPCdisplay(
                  filterMale,
                  filterFemale,
                  checkGenderBox,
                  eyeColorFilter
                )
              : filterMobile(
                  filterMale,
                  filterFemale,
                  checkGenderBox,
                  eyeColorFilter
                )}

            <div className="col-12 col-sm-10 col-md-8 p-1">
              {Search(checkWarriorValue, onChangeInput)}
              {/* Warriors Field */}
              <div className="col-12">
                <div className="row justify-content-start shadow m-1 p-1">
                  {WarriorsRender(
                    filteredWarriorsRedux,
                    listsButton,
                    setListstButton
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default connect(mapTostate, mapToDispatch)(WarriorsApp);
