import React from 'react'
import { SelectVote } from '../../';

import * as CS from '../CommonStyles';


interface UnitVoteCardProps {
    setCanPass: (canPass: string | undefined) => void;
}

const UnitVoteCard: React.FC<UnitVoteCardProps> = ({ setCanPass }) => {


    return (
        <CS.VoteCardsWrapper>
            <CS.VoteCardsIndex>네번째 부문</CS.VoteCardsIndex>
            <CS.VoteCardsTitle>
                <CS.VoteCardsTitleDefault>최고의</CS.VoteCardsTitleDefault>
                <CS.VoteCardsTitleBold>유닛상</CS.VoteCardsTitleBold>
            </CS.VoteCardsTitle>
            <CS.VoteCardsDescription>
                가장 환상적인 호흡을 보여준 <b>3개의 유닛</b>에게 투표해주세요! <br />
                실력이나 그런 것과 무관하게, 내가 이 조합이 정말 좋았다 싶었던 유닛이면 됩니다.
            </CS.VoteCardsDescription>
            <CS.VoteCardsDivision />
          <SelectVote
            maximumSelect={3}
            minimumSelect={3}
            setCanPass={setCanPass}
            voteCardName="unit" />
        </CS.VoteCardsWrapper>
    )
}

export default UnitVoteCard;
