const filterMobile = (filterMale , filterFemale, checkGenderBox , eyeColorFilter ) =>{
console.log('USE MOBILE')
    return (
        <div class="col-12 dropdown m-1 p-1">
  <button class="col-12 btn btn-secondary bg-white text-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Filters
  </button>
  <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton1">
  <div className="col-12 text-secondary m-1">
                    <h6 className="text-start">Gender???:</h6>
                  </div>
    <li><span className="dropdown-item">
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
      </span></li>
    <li className="dropdown-item">
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
      </li>
      <div className="col-12 text-secondary m-1">
                    <h6 className="text-start">Eye color:</h6>
                  </div>
    <li className="dropdown-item">
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
    </li>
    <li className="dropdown-item">
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
    </li>
    <li className="dropdown-item">

    </li>
    <li className="dropdown-item">
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
    </li>
    <li className="dropdown-item">
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
    </li>
    
    <li className="dropdown-item">
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
    </li>
    <li className="dropdown-item">
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
    </li>
  

  </ul>
</div>
    )
}

export default filterMobile;