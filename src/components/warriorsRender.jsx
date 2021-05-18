import React from "react";
import { chunk , uniqueId } from "lodash";

const  WarriorsRender = (warriorsArr, pageNumber = 0 , setListstButton) => {
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
<>
<div key={uniqueId(name)} className="col-6 col-sm-6 col-md-3 card warrior-card mb-1" style={{ width: "15 rem" }}>
  <img src={imgUrl} className="card-img-top img-fluid mt-1" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Eye color: {eye_color}</p>
    <p className="card-text">Birth year: {birth_year}</p>
    <p className="card-text">Gender: {gender}</p>
  </div>
</div>
</>


        );
      }
    );
    return (
      <>
        {cards}
        {buttons}
      </>
    );
  };



  export default WarriorsRender;