
const Search = (checkWarriorValue, onChangeInput) => {


    return (
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
    )
}
export default Search;