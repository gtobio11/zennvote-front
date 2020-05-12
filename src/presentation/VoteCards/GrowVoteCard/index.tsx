import React from 'react';
import { SelectVote } from '../../';

import * as CS from '../CommonStyles';

interface GrowVoteCardProps {
    setCanPass: (canPass: string | undefined) => void;
}

const GrowVoteCard: React.FC<GrowVoteCardProps> = ({ setCanPass }) => {
    return (
        <CS.VoteCardsWrapper>
            <CS.VoteCardsIndex>세번째 부문</CS.VoteCardsIndex>
            <CS.VoteCardsTitle>
                <CS.VoteCardsTitleBold>성장하는</CS.VoteCardsTitleBold>
                <CS.VoteCardsTitleDefault>프로듀서 상</CS.VoteCardsTitleDefault>
            </CS.VoteCardsTitle>
            <CS.VoteCardsDescription>
                데뷔 때부터 지금까지 정말 많이 <b>실력적으로나 퀄리티로나 <br />
                성장했다는 게 느껴지는 P</b>의 닉네임을 적어주세요.
            </CS.VoteCardsDescription>
            <CS.VoteCardsDescription>
                노래자랑을 본 지 얼마 안 된 분들도 계실 것이기 때문에 이 부문은 <b>스킵이 가능</b>합니다. <br />
                다만 3시즌 이상 봐 오셨던 분이라면, 내가 응원하는 그 프로듀서에게 투표해주세요!
            </CS.VoteCardsDescription>
            <CS.VoteCardsDescription>
                <b>5회 이상 투고했던 P에게만 투표가능, 명예P들 및 지난 시즌 성장상 수상자 레어레어는 투표불가</b>
            </CS.VoteCardsDescription>
            <CS.VoteCardsDivision />
          <SelectVote
            maximumSelect={3}
            minimumSelect={0}
            setCanPass={setCanPass}
            voteCardName="grow"/>
        </CS.VoteCardsWrapper>
    )
}

export default GrowVoteCard;
