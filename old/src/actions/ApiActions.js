export const API_UPDATE_ENTRYPOINT = 'API_UPDATE_ENTRYPOINT'

export function setEntrypoint(entrypoint) {
    return {
        type: API_UPDATE_ENTRYPOINT,
        payload: entrypoint,
    }
}