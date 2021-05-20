const FilterMobile = ({filterMale , filterFemale, checkGenderBox , eyeColorFilter }) =>{

    return (
        <div className="col-12 dropdown m-1 p-1">
  <button className="col-12 btn btn-secondary bg-white text-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     <span className="filter-logo">Filters</span>
  </button>
  <ul className="dropdown-menu col-12" aria-labelledby="dropdownMenuButton1">
  <div className="col-12 text-secondary m-1">
                    <h6 className="text-start">Gender:</h6>
                  </div>
    <li><span className="dropdown-item">
    <div className="col-12 form-check form-switch m-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={filterMale}
                      id="flexSwitchCheckDefault"
                      checked={checkGenderBox.male}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      <span className="genderFilter"> Male</span>
                    </label>
                  </div>
      </span></li>
    <li className="dropdown-item">
    <div className="col-12 form-check form-switch m-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={checkGenderBox.female}
                      onChange={filterFemale}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      <span className="genderFilter"> Female</span>
                    </label>
                  </div>
      </li>
      <div className="col-12 text-secondary m-1">
                    <h6 className="text-start">Eye color:</h6>
                  </div>
    <li className="dropdown-item">
    <div className="form-check m-1">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        defaultChecked
                        onChange={()=>eyeColorFilter('all')}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        All
                      </label>
                    </div>
    </li>
    <li className="dropdown-item">
    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Black')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Black
                      </label>
                    </div>
    </li>
    <li className="dropdown-item">

    </li>
    <li className="dropdown-item">
    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Blue')}
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Blue
                      </label>
                    </div>
    </li>
    <li className="dropdown-item">
    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Brown')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault4">
                        Brown
                      </label>
                    </div>
    </li>
    
    <li className="dropdown-item">
    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Red')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault5"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault5">
                        Red
                      </label>
                    </div>
    </li>
    <li className="dropdown-item">
    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Yellow')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault6"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault6">
                        Yellow
                      </label>
                    </div>
    </li>
  

  </ul>
</div>
    )
}

export default FilterMobile;