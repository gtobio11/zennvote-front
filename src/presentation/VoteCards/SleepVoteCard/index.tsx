import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValueThunk } from '../../../module/vote';

import * as CS from '../CommonStyles';

interface SleepVoteCardProps {
  setCanPass: (canPass: boolean) => void;
}

const SleepVoteCard: React.FC<SleepVoteCardProps> = ({ setCanPass}) => {
  const dispatch = useDispatch();
  const { sleep } = useSelector((state:StoreState) => ({
    sleep: state.vote.sleep
  }));

  useEffect(() => {
    const inputCount = sleep?.filter(v => !!v.producer && !!v.song && !v.error).length || 0;

    if(inputCount <= 5 && inputCount >= 1) {
      setCanPass(true);
    }
  }, [sleep, setCanPass])

  const confirmEpisodeVote = useCallback((sleep) => {
    setCanPass(false);

    dispatch(setVoteByKeyValueThunk(
      sleep,
      'sleep',
      false
    ));
  }, [dispatch, setCanPass]);

  return (
    <CS.VoteCardsWrapper>
      <CS.VoteCardsIndex>첫번째 부문</CS.VoteCardsIndex>
      <CS.VoteCardsTitle>
        그날, 나를 
        <CS.VoteCardsTitleBold>잠 못 이루게 한 프로듀서 상</CS.VoteCardsTitleBold>
      </CS.VoteCardsTitle>
      <CS.VoteCardsDescription>
        성별 불문, 실력 불문, 목소리 불문, 나를 즐겁거나 두근거리거나 설레거나 행복하게 만들어 주었던<br/>
        프로듀서를 최소 1명~최대 3명까지 뽑아주세요. 앞 부문과 중복 가능.
      </CS.VoteCardsDescription>
      <CS.VoteCardsDivision />
      <CS.VoteCardsDescription>
        대상과 너무 겹치지 않는지 고민하고 투표해주세요.<br/>
        여기엔 회차별 순간순간의 감동이나 웃음, <b>나의 팬심</b>을 좀 더 담고, 대상에는 각 회차의 시즌 대상을 탈 만한 활약을 보인 프로듀서님을 총체적으로 판단하여 투표바랍니다 :)
      </CS.VoteCardsDescription>
      <CS.VoteCardsDescription>
        <b>타부문과 중복투표 불가</b>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDivision />
      <EpisodeVote
        confirmEpisodeVote={confirmEpisodeVote}
        voteReduxData={sleep} />
    </CS.VoteCardsWrapper>
  );
};

export default SleepVoteCard;