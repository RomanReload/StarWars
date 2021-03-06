const initialState = {
  filteredWarriors: [],
  genderState: {
    male: false,
    female: false,
  },
  filteredByGender: [],
};

const WarriorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE-WARRIORS-ARR": {
      const { warriors } = action.payload;
      return { ...state, warriors: [...warriors] };
    }
    case "FILTERED-WARRIORS": {
      const { checkValue } = action.payload;
      const { warriors } = state;
      const filteredWarriors = checkValue
        ? warriors.filter(({ name }) => name.includes(checkValue))
        : warriors;
      return { ...state, filteredWarriors: filteredWarriors };
    }

    case "GENDER-MALE-FILTER": {
      const { male } = action.payload;
      const { genderState } = state;
      const { female } = genderState;
      genderState.male = male;
      const { warriors } = state;
      const onlyMaleWarriors =
        male === true && !female
          ? warriors.filter((warrior) => warrior.gender === "male")
          : warriors.filter(
              (warrior) =>
                warrior.gender !== "male" &&
                warrior.gender !== "n/a" &&
                warrior.gender !== "none"
            );

      const femaleAndMaleWarriors = warriors.filter(
        (warr) => warr.gender === "male" || warr.gender === "female"
      );
      if (female && male) {
        return {
          ...state,
          ...genderState,
          filteredWarriors: femaleAndMaleWarriors,
        };
      }
      if (!female && !male) {
        return { ...state, ...genderState, filteredWarriors: warriors };
      }

      return { ...state, ...genderState, filteredWarriors: onlyMaleWarriors };
    }

    case "GENDER-FEMALE-FILTER": {
      const { female } = action.payload;
      const { genderState } = state;
      const { male } = genderState;
      const { warriors } = state;
      genderState.female = female;
      const onlyFemaleWarriors =
        female === true && !male
          ? warriors.filter((warrior) => warrior.gender === "female")
          : warriors.filter(
              (warrior) =>
                warrior.gender !== "female" &&
                warrior.gender !== "n/a" &&
                warrior.gender !== "none"
            );

      const femaleAndMaleWarriors = warriors.filter(
        (warr) => warr.gender === "male" || warr.gender === "female"
      );
      if (female && male) {
        return {
          ...state,
          ...genderState,
          filteredWarriors: femaleAndMaleWarriors,
        };
      }
      if (!female && !male) {
        return { ...state, ...genderState, filteredWarriors: warriors };
      }

      return { ...state, ...genderState, filteredWarriors: onlyFemaleWarriors };
    }

    case "EYE-FILTER": {
      const { eyeColor } = action.payload;
      const eyeWarriorColor = eyeColor.toLowerCase();
      const { warriors } = state;
      const filteredByEyeColor =
        eyeWarriorColor !== "all"
          ? warriors.filter((warrior) => warrior.eye_color === eyeWarriorColor)
          : warriors;
      return { ...state, filteredWarriors: filteredByEyeColor };
    }
      case "TRY-CLICK" :{
        const {payload} = action;
      
        return state
      }

    default:
      return state;
  }
};

export default WarriorsReducer;
