import {
  STEP_CHANGED,
  ABILITY_CHANGED,
  CLASS_CHANGED,
  RACE_CHANGED,
  DOMAIN_ADDED,
  DOMAIN_REMOVED,
  DEITY_ADDED,
  NAME_ADDED,
  AGE_ADDED,
  GENDER_ADDED,
  HEIGHT_ADDED,
  WEIGHT_ADDED,
  EYES_ADDED,
  HAIR_ADDED,
  SKIN_ADDED,
  WEAPON_ADDED,
  ARMOR_ADDED,
  WEAPON_REMOVED,
  ARMOR_REMOVED,
  RACE_REMOVED,
  CLASS_REMOVED,
  ALIGNMENT_ADDED,
  ALIGNMENT_REMOVED,
  SHEET_CREATED,
  HP_CHANGED,
} from "../actions/types";

const initialState = {
  step: 1,
  character: {
    race: {},
    class: {},
    abilities: {
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wis: 8,
      cha: 8,
    },
    skills: {},
    feats: {},
    hp: "",
    domains: [],
    deity: "",
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    eyes: "",
    hair: "",
    skin: "",
    level: 1,
    xp: 0,
    equipment: {
      armor: [],
      weapons: [],
    },
    sr: 0,
  },
};

const creatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_CHANGED:
      return {
        ...state,
        step: action.payload,
      };
    case ABILITY_CHANGED:
      return {
        ...state,
        character: {
          ...state.character,
          abilities: {
            ...state.character.abilities,
            [action.payload.name]: action.payload.value,
          },
        },
      };
    case HP_CHANGED:
      return {
        ...state,
        character: {
          ...state.character,
          hp: action.payload,
        },
      };
    case RACE_CHANGED:
      return {
        ...state,
        character: {
          ...state.character,
          race: action.payload,
        },
      };
    case CLASS_CHANGED:
      return {
        ...state,
        character: {
          ...state.character,
          class: action.payload,
        },
      };
    case RACE_REMOVED:
      return {
        ...state,
        character: {
          ...state.character,
          race: {},
        },
      };
    case CLASS_REMOVED:
      return {
        ...state,
        character: {
          ...state.character,
          class: {},
        },
      };
    case DOMAIN_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          domains: [...state.character.domains, action.payload],
        },
      };
    case DOMAIN_REMOVED:
      const domainIndex = state.character.domains
        .map((domain) => {
          return domain.name;
        })
        .indexOf(action.payload);
      return {
        ...state,
        character: {
          ...state.character,
          domains: [
            ...state.character.domains.slice(0, domainIndex),
            ...state.character.domains.slice(domainIndex + 1),
          ],
        },
      };
    case DEITY_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          deity: action.payload,
        },
      };
    case ALIGNMENT_ADDED: {
      return {
        ...state,
        character: {
          ...state.character,
          alignment: action.payload,
        },
      };
    }
    case ALIGNMENT_REMOVED: {
      return {
        ...state,
        character: {
          ...state.character,
          alignment: "",
        },
      };
    }
    case NAME_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          name: action.payload,
        },
      };
    case AGE_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          age: action.payload,
        },
      };
    case GENDER_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          gender: action.payload,
        },
      };
    case HEIGHT_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          height: action.payload,
        },
      };
    case WEIGHT_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          weight: action.payload,
        },
      };
    case EYES_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          eyes: action.payload,
        },
      };
    case HAIR_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          hair: action.payload,
        },
      };
    case SKIN_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          skin: action.payload,
        },
      };
    case WEAPON_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          equipment: {
            ...state.character.equipment,
            weapons: [...state.character.equipment.weapons, action.payload],
          },
        },
      };
    case ARMOR_ADDED:
      return {
        ...state,
        character: {
          ...state.character,
          equipment: {
            ...state.character.equipment,
            armor: [...state.character.equipment.armor, action.payload],
          },
        },
      };
    case ARMOR_REMOVED:
      const armorIndex = state.character.equipment.armor
        .map((armor) => {
          return armor.name;
        })
        .indexOf(action.payload);
      return {
        ...state,
        character: {
          ...state.character,
          equipment: {
            ...state.character.equipment,
            armor: [
              ...state.character.equipment.armor.slice(0, armorIndex),
              ...state.character.equipment.armor.slice(armorIndex + 1),
            ],
          },
        },
      };
    case WEAPON_REMOVED:
      const weaponIndex = state.character.equipment.weapons
        .map((weapon) => {
          return weapon.name;
        })
        .indexOf(action.payload);
      return {
        ...state,
        character: {
          ...state.character,
          equipment: {
            ...state.character.equipment,
            weapons: [
              ...state.character.equipment.weapons.slice(0, weaponIndex),
              ...state.character.equipment.weapons.slice(weaponIndex + 1),
            ],
          },
        },
      };
    case SHEET_CREATED:
      return (state = initialState);
    default:
      return state;
  }
};

export default creatorReducer;
