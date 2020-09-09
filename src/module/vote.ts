import VoteData from "../entity/VoteData";
import EpisodeData from "../entity/EpisodeData";
import FetchVoteEpisodes from "../controller/FetchVoteEpisodes";

const initialState:VoteData = {
  problem: [],
  pitch:[{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    }
  ],
  voice: [{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    }
  ],
  funny: [{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    }
  ],
  content: [{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    },{
      episode: 0,
      index: 0,
      song: '',
      producer: ''
    }
  ],
  original: [{
    episode: 0,
    index: 0,
    song: '',
    producer: ''
  },{
    episode: 0,
    index: 0,
    song: '',
    producer: ''
  },{
    episode: 0,
    index: 0,
    song: '',
    producer: ''
  }],
  sleep: [{
    episode: 0,
    index: 0,
    song: '',
    producer: ''
  },{
    episode: 0,
    index: 0,
    song: '',
    producer: ''
  },{
    episode: 0,
    index: 0,
    song: '',
    producer: ''
  }],
  unit: ['', '', ''],
  rookie: ['', '', ''],
  grow: ['', '', ''],
  master: ['', '', ''],
  custom: [],
  message: [],
};

const SET_VOTE_INIT = 'vote/SET_VOTE_INIT' as const;
const SET_VOTE_BY_KEY_VALUE = 'vote/SET_VOTE_BY_KEY_VALUE' as const;

export const setVoteInit = () => ({
  type: SET_VOTE_INIT,
});

export const setVoteByKeyValue = (key: string, value:any[]) => ({
  type: SET_VOTE_BY_KEY_VALUE,
  key,
  value
})

export type VoteActionType = 
  ReturnType<typeof setVoteInit> |
  ReturnType<typeof setVoteByKeyValue>;

export const setVoteByKeyValueThunk = (
  episodeVoteData: EpisodeData[],
  episodeName: string,
  checkOverlap: boolean
) => (dispatch: any, getState: any): void => {
  const { vote } = getState();
  FetchVoteEpisodes(episodeVoteData, checkOverlap, vote, episodeName)
    .then(fetchedData => {
      dispatch(setVoteByKeyValue(episodeName, fetchedData));
    });
}

export default function reducer(state:VoteData = initialState, action:VoteActionType): VoteData {
  switch (action.type) {
    case SET_VOTE_INIT:
      return { ...initialState };
  
    case SET_VOTE_BY_KEY_VALUE:
      return { 
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  };
};