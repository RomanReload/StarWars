import React, { useState, useEffect } from "react";
import { capitalize, chunk } from "lodash";

const  WarriorsRender = (warriorsArr, pageNumber = 0 , setListstButton) => {
    let partsOfCards = [];
    console.log('???')
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
<div class="col-12 col-sm-6 col-md-3 card warrior-card mb-1" style={{ width: "15 rem" }}>
  <img src={imgUrl} class="card-img-top img-fluid mt-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Eye color: {eye_color}</p>
    <p class="card-text">Birth year: {birth_year}</p>
    <p class="card-text">Gender: {gender}</p>
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



export const tryFoo  = (props) =>{

    return (
        <div>
            <h1>HELLO FROM FOO</h1>
        </div>
    )
}


  export default WarriorsRender;