import fridgeRequestAPI from '../api/fridgeRequestAPI'
import fridgeUpdateAPI from '../api/fridgeUpdateAPI'

export const fridgeActions = {
  FRIDGE_LOAD_PENDING: "FRIDGE_LOAD_PENDING",
  FRIDGE_LOAD_REJECTED: "FRIDGE_LOAD_REJECTED",
  FRIDGE_LOAD_FULFILLED: "FRIDGE_LOAD_FULFILLED",
  FRIDGE_LOAD: "FRIDGE_LOAD",

  FRIDGE_UPDATE_PENDING: "FRIDGE_UPDATE_PENDING",
  FRIDGE_UPDATE_REJECTED: "FRIDGE_UPDATE_REJECTED",
  FRIDGE_UPDATE_FULFILLED: "FRIDGE_UPDATE_FULFILLED",
  FRIDGE_UPDATE: "FRIDGE_UPDATE",

  fridgeRequest: (request) => ({
    type: fridgeActions.FRIDGE_LOAD,
    payload: fridgeRequestAPI(request)
  }),

  fridgeUpdate: (request) => ({
    type: fridgeActions.FRIDGE_UPDATE,
    payload: fridgeUpdateAPI(request)
  }),
}
