import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodeVote } from '../../';
import { StoreState } from '../../../module';
import { setVoteByKeyValueThunk } from '../../../module/vote';

import * as CS from '../CommonStyles';

interface PitchVoteCardProps {
  setCanPass: (canPass: string | undefined) => void;
}

const PitchVoteCard: React.FC<PitchVoteCardProps> = ({ setCanPass }) => {
  const dispatch = useDispatch();
  const { pitch } = useSelector((state:StoreState) => ({
    pitch: state.vote.pitch
  }));

  useEffect(() => {
    const inputCount = pitch?.filter(v => !!v.producer && !!v.song).length || 0;
    const errorCount = pitch?.filter(v => !!v.error).length || 0;

    if (inputCount < 1)
      setCanPass('필수 투표 항목입니다. 투표를 진행해주세요.');
    else if (errorCount > 0)
      setCanPass('투표 항목에 오류가 있습니다. 확인해주세요.');
    else {
      setCanPass(undefined);
    }
  }, [pitch, setCanPass])

  const confirmEpisodeVote = useCallback((pitch) => {
    setCanPass('투고 정보를 조회하고 있습니다. 잠시만 기다려주세요.');

    dispatch(
      setVoteByKeyValueThunk(
        pitch,
        'pitch',
        true
      )
    );

  }, [dispatch, setCanPass]);

  return (
    <CS.VoteCardsWrapper>
      <CS.VoteCardsIndex>첫번째 부문</CS.VoteCardsIndex>
      <CS.VoteCardsTitle>
        이 성대가 대단하다! 
        <CS.VoteCardsTitleBold>가창력이 뛰어난 프로듀서 상</CS.VoteCardsTitleBold>
      </CS.VoteCardsTitle>
      <CS.VoteCardsDescription>
        내 생각에 가장 가창력이 뛰어난 것 같다고 생각하는 프로듀서분을 뽑아주세요.<br/>
        최소 1명부터 최대 5명까지 쓰실 수 있습니다.
      </CS.VoteCardsDescription>
      <CS.VoteCardsDescription>
        <b>타부문과 중복투표 불가</b>
      </CS.VoteCardsDescription>
      <CS.VoteCardsDivision />
      <EpisodeVote
        confirmEpisodeVote={confirmEpisodeVote}
        voteReduxData={pitch} />
    </CS.VoteCardsWrapper>
  );
};

export default PitchVoteCard;