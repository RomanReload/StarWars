import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { capitalize, chunk } from "lodash";

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
const [checkGenderBox , setCheckGenderBox] = useState({male:false,female:false})
  const [loading, setLoading] = useState(true);
  const [listsButton, setListstButton] = useState(0);
  // const [maleFilterState , setMaleFilterState] = useState(false)
  // const [femaleFilterState , setFemaleFilterState] = useState(false)
  // redux data / dispatch
  const { allWarriors, filteredWarriorsRedux, filteredByGender } = props;
  const {
    WarriorsDataBase,
    filteredFromInput,
    genderMaleFilter,
    genderFemaleFilter,
    colorEyeFilter,
  } = props;
  console.log(filteredByGender);
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
      // setFilteredDataBase(filteredArrayWithoutErr);
      WarriorsDataBase(filteredArrayWithoutErr);
      filteredFromInput();
      setLoading(false);
    }
    fetchData();
  }, [WarriorsDataBase]);

  const WarriorsRender = (warriorsArr, pageNumber = 0) => {
    let partsOfCards = [];
    if (warriorsArr.length < 10 || warriorsArr.length === 10) {
      partsOfCards.push(warriorsArr);
    }
    if (warriorsArr.length > 10) {
      partsOfCards = chunk(warriorsArr, 10);
    }
    const numberOfPages = partsOfCards.length;
    let buttonNextDisabled = numberOfPages === pageNumber + 1 ? true : false;
    let buttonPrevDisabled = pageNumber + 1 === 1 ? true : false;

    const cards = partsOfCards[pageNumber].map(
      ({ name, eye_color, gender, birth_year }) => {
        const [male, female, uknown] = [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/1200px-Man_silhouette.svg.png",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVf_1JQ-iuOKzPigHfMOY7wQovuA0gNaj0MShaP3XUE4Nl6Ga-U-L7pTE7hqMUFGTRC4&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtz_ZY4wBFQ5npbmxk6uz7KdwevErHzHTSw&usqp=CAU",
        ];
        let imgUrl = uknown;
        if (gender === "male") {
          imgUrl = male;
        }
        if (gender === "female") {
          imgUrl = female;
        }
        return (
          <div
            class="card col-6 col-sm-5 col-md-3 mb-1 p-1"
            style={{ width: "18 rem" }}
          >
            <img src={imgUrl} class="card-img-top img-fluid" alt="..." />
            <div class="col-12 card-body p-1">
              {/* <div className="row">
                <div className="col-12">
                  <h4>{name}</h4>
                </div>
                <div className="col-12">
                  <p>Eye color : {eye_color}</p>
                </div>
                <p className="row justify-content-center">
                  <div className="col-6">Birth year :</div>
                  <div className="col-6">{birth_year}</div>
                </p>
                <div className="col-12">
                  <p>Gender : {gender}</p>
                </div>
              </div> */}
              <table className="table">
                <tbody>
                  <tr scope="row">
                    <td className="text-center border-0">
                      {" "}
                      <h3>{name}</h3>
                    </td>
                  </tr>
                  <tr scope="row">
                    <td className="text-center border-0">
                      Eye color: {eye_color}
                    </td>
                  </tr>
                  <tr scope="row">
                    <td className="text-center border-0">
                      Birth year: {birth_year}
                    </td>
                  </tr>
                  <tr scope="row">
                    <td className="text-center border-0">Gender: {gender}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      }
    );
    const buttons = (
      <div className="row text-center">
        <button
          disabled={buttonPrevDisabled}
          onClick={() => setListstButton(pageNumber - 1)}
          className="col-4 col-sm-4 btn  text-white m-1 buttonList"
        >
          Prev
        </button>
        <div className="col-3 ">
          {pageNumber + 1} of {numberOfPages}
        </div>
        <button
          disabled={buttonNextDisabled}
          onClick={() => setListstButton(pageNumber + 1)}
          className="col-4 col-sm-4 btn text-white  m-1 buttonList"
        >
          Next
        </button>
      </div>
    );
    return (
      <>
        {cards}
        {buttons}
      </>
    );
  };

  const filterFemale = (e) => {
    const checked = e.target.checked;
    setCheckGenderBox({male:checkGenderBox.male , female:checked})
    genderFemaleFilter(checked);
    setListstButton(0);
  };
  const filterMale = (e) => {
    const checked = e.target.checked;
    setCheckGenderBox({male:checked , female:checkGenderBox.female})
    genderMaleFilter(checked);
    setListstButton(0);
  };

  const eyeColorFilter = (eyeColor)=>{
    colorEyeFilter(eyeColor)
    setListstButton(0)
  }

  const onChangeInput = (e) => {
  genderMaleFilter()
  genderFemaleFilter()
 
    const targetValue = e.target.value;
    setCheckWarriorValue(targetValue);
    filteredFromInput(targetValue);
    setCheckGenderBox({male:false , female:false})
    setListstButton(0);
 
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
          <div className="row justify-content-center">
            <div className="col-12 col-sm-4 col-md-4 text-center">
              <div className="col-12 shadow bg-white">
                {/* filters fields */}
                <h4 className="filter-logo">Filters</h4>
                <div className="col-12 text-secondary m-1">
                  <h6 className="text-start">Gender:</h6>
                </div>
                <div class="col-12 form-check form-switch m-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onChange={filterMale}
                    id="flexSwitchCheckDefault"
                    checked={checkGenderBox.male}
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    <span className="genderFilter"> Male</span>
                  </label>
                </div>

                <div className="col-12 form-check form-switch m-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={checkGenderBox.female}
                    onChange={filterFemale}
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    <span className="genderFilter"> Female</span>
                  </label>
                </div>

                <div className="col-12 text-secondary m-1">
                  <h6 className="text-start">Eye color:</h6>
                </div>
                <div className="col-12 m-2">
                  <div class="form-check m-1">
                    <input
                      class="form-check-input "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                      onChange={()=>eyeColorFilter('all')}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      All
                    </label>
                  </div>

                  <div class="form-check m-1">
                    <input
                    onChange={()=>eyeColorFilter('Black')}
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Black
                    </label>
                  </div>

                  <div class="form-check m-1">
                    <input
                    onChange={()=>eyeColorFilter('Blue')}
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Blue
                    </label>
                  </div>

                  <div class="form-check m-1">
                    <input
                    onChange={()=>eyeColorFilter('Brown')}
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                    />
                    <label class="form-check-label" for="flexRadioDefault4">
                      Brown
                    </label>
                  </div>

                  <div class="form-check m-1">
                    <input
                    onChange={()=>eyeColorFilter('Red')}
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                    />
                    <label class="form-check-label" for="flexRadioDefault5">
                      Red
                    </label>
                  </div>
                  <div class="form-check m-1">
                    <input
                    onChange={()=>eyeColorFilter('Yellow')}
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault6"
                    />
                    <label class="form-check-label" for="flexRadioDefault6">
                      Yellow
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8">
              <div className="col-12 col-sm-12 col-md-12">
                <div class="input-group mb-3">
                  {/* Search warriors */}
                  <input
                    type="text"
                    placeholder={`Type name of warrior`}
                    value={checkWarriorValue}
                    onChange={onChangeInput}
                    class="form-control"
                    aria-label="Text input with segmented dropdown button"
                  />
                </div>
              </div>
              {/* Warriors Field */}
              <div className="col-12">
                <div className="row justify-content-around shadow">
                  {WarriorsRender(filteredWarriorsRedux, listsButton)}
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
