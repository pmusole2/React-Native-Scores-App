export const ADD_PLAYER = 'ADD_PLAYER'
export const REMOVE_PLAYER = 'REMOVE_PLAYER'
export const ADD_SCORE = 'ADD_SCORE'

export const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    payload: player,
  }
}

export const removePlayer = id => {
  return {
    type: REMOVE_PLAYER,
    payload: id,
  }
}

export const addScore = item => {
  return {
    type: ADD_SCORE,
    payload: item,
  }
}
