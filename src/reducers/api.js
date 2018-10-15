import { API_UPDATE_ENTRYPOINT } from '../actions/ApiActions'

const initialState = {
    entrypoint: 'http://localhost:9000/',
}

export default function api(state = initialState, action) {
    switch (action.type) {
        case API_UPDATE_ENTRYPOINT:
            return { ...state, entrypoint: action.payload };

        default:
            return state;
    }
}