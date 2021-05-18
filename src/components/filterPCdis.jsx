
const FilterPCdisplay = (filterMale , filterFemale, checkGenderBox , eyeColorFilter )=>{
  console.log('USE MOBILE')
    return (
        <>
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
        </>
    )
}

export default FilterPCdisplay;