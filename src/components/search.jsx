import React from "react";

const Search = (checkWarriorValue, onChangeInput) => {
  return (
    <div className="col-12 col-sm-12 col-md-12">
      <div className="input-group mb-3">
        {/* Search warriors */}
        <input
          type="text"
          placeholder={`Type name of warrior`}
          value={checkWarriorValue}
          onChange={onChangeInput}
          className="form-control"
          aria-label="Text input with segmented dropdown button"
        />
      </div>
    </div>
  );
};
export default Search;
