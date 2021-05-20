
const FilterPCdisplay = ({filterMale , filterFemale, checkGenderBox , eyeColorFilter })=>{

    return (
        <>
         <div className="col-12 col-sm-10 col-md-4 text-center p-1">
                <div className="col-12 shadow bg-white">
                  {/* filters fields */}
                  
                  <h4 className="filter-logo">Filters</h4>
                  <div className="col-12 text-secondary m-1">
                    <h6 className="text-start">Gender:</h6>
                  </div>
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
                      for="flexSwitchCheckDefault"
                    >
                      <span className="genderFilter"> Male</span>
                    </label>
                  </div>
  
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
                      for="flexSwitchCheckDefault"
                    >
                      <span className="genderFilter"> Female</span>
                    </label>
                  </div>
  
                  <div className="col-12 text-secondary m-1">
                    <h6 className="text-start">Eye color:</h6>
                  </div>
                  <div className="col-12 m-2">
                    <div className="form-check m-1">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        defaultChecked
                        onChange={()=>eyeColorFilter('all')}
                      />
                      <label className="form-check-label" for="flexRadioDefault1">
                        All
                      </label>
                    </div>
  
                    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Black')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label className="form-check-label" for="flexRadioDefault2">
                        Black
                      </label>
                    </div>
  
                    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Blue')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label className="form-check-label" for="flexRadioDefault3">
                        Blue
                      </label>
                    </div>
  
                    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Brown')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <label className="form-check-label" for="flexRadioDefault4">
                        Brown
                      </label>
                    </div>
  
                    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Red')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault5"
                      />
                      <label className="form-check-label" for="flexRadioDefault5">
                        Red
                      </label>
                    </div>
                    <div className="form-check m-1">
                      <input
                      onChange={()=>eyeColorFilter('Yellow')}
                      className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault6"
                      />
                      <label className="form-check-label" for="flexRadioDefault6">
                        Yellow
                      </label>
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}

export default FilterPCdisplay;