import { store } from '../store/configureStore'

class ApiCaller {
    updateSettings(settings) {
        Object.assign(this, settings);
    }
}

const getApiSettings = () => store.getState().api
const API = new ApiCaller()
API.updateSettings(getApiSettings())
store.subscribe(() => API.updateSettings(getApiSettings()))

export default API