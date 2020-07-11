import { ADD_PLAYER, REMOVE_PLAYER, ADD_SCORE } from '../actions/playerActions'

const dummyPlayer = {
  id: 'p1',
  name: 'Prince',
  score: 0,
  scores: [],
  total: 10 + 5 + 3 + 2,
}

const initialState = {
  players: [dummyPlayer],
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: [payload, ...state.players],
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id != payload),
      }
    case ADD_SCORE:
      let playerToUpdate = state.players.find(
        player => player.id === payload.id
      )
      playerToUpdate.scores.unshift(payload.score)
      playerToUpdate.score = payload.score
      playerToUpdate.total =
        Number(playerToUpdate.total) + Number(payload.score - 0)
      state.players.filter(player => player.id != payload.id)
      return {
        ...state,
        players: [
          ...state.players.filter(player => player.id != payload.id),
          playerToUpdate,
        ],
      }
    default:
      return state
  }
}
