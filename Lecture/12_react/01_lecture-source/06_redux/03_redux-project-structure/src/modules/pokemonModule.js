import { createActions, handleActions } from "redux-actions";

// 초기값
const initialState = [
    {
        id: 0,
        name: ''
    }
]

// 액션

// 액션 타입
export const GET_POKEMONS = 'pokemons/GET_POKEMONS';

// 액션 함수
const actions = createActions({
    [GET_POKEMONS]: () => {}
})

// 리듀서
const pokemonReducer = handleActions(
    {
        [GET_POKEMONS]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default pokemonReducer;