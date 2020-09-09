import { getSelectVote } from "../controller/Api";

export interface SelectVoteState {
    [key: string]: string[]

    unit: string[];
    rookie: string[];
    grow: string[];
}

const initialState: SelectVoteState = {
    unit: [],
    rookie: [],
    grow: [],
};

const SET_SELECT_VOTE_PROBLEM = 'selectVote/SET_SELECT_VOTE_PROBLEM' as const;

export const setSelectVote = (selectName: string, value: string[]) => ({
    type: SET_SELECT_VOTE_PROBLEM,
    selectName,
    value
})

export type SelectVoteType = ReturnType<typeof setSelectVote>;

export const setSelectVoteThunk = (
    selectName: string,
) => (dispatch: any) => {
    getSelectVote(selectName)
        .then(res => {
            dispatch(setSelectVote(selectName, res));
        })
}

export default function reducer(state: SelectVoteState = initialState, action: SelectVoteType) {
    switch (action.type) {
        case SET_SELECT_VOTE_PROBLEM:
            return {
                ...state,
                [action.selectName]: action.value
            }
        default:
            return state;
    }
}