import { MENU_TOGGLE } from './actionType'

const menuToggle = (preState = { menuToggle: false }, action) => {
    switch (action.type) {
        case MENU_TOGGLE:
            return { ...preState, menuToggle: !preState.menuToggle };
        default:
            return preState;
    }

}

export default menuToggle;