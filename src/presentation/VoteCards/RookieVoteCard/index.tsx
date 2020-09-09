import React from 'react'
import { SelectVote } from '../..';

import * as CS from '../CommonStyles';

interface RookieVoteCardProps {
    setCanPass: (canPass: string | undefined) => void;
}

const RookieVoteCard: React.FC<RookieVoteCardProps> = ({ setCanPass }) => {
    return (
        <CS.VoteCardsWrapper>
            <CS.VoteCardsIndex>두번째 부문</CS.VoteCardsIndex>
            <CS.VoteCardsTitle>
                나의 귀를 사로잡은 루키! 
                <CS.VoteCardsTitleBold>신인상!</CS.VoteCardsTitleBold>
            </CS.VoteCardsTitle>
            <CS.VoteCardsDescription>
                이번 시즌에 처음 등장해서 내 머릿속에 꽂혀버린 매력적인 보이스의 소유자는 누구?<br />
                다음 시즌에 대활약해주길 기대하는 그 프로듀서를 3명 뽑아주세요.
            </CS.VoteCardsDescription>
            <CS.VoteCardsDescription>
                ※ 진지하게 내게 <b>임팩트</b>를 줬고, 노래나 보이스가 너무 괜찮았기에 <b>앞으로를 기대하는 사람</b>에게 투표해주세요.
                나와 사전에 아는 사람이었다거나 하는 부차적인 이유가 고려되지 않았으면 합니다!
            </CS.VoteCardsDescription>
            <CS.VoteCardsDivision />
          <SelectVote
            maximumSelect={3}
            minimumSelect={3}
            setCanPass={setCanPass}
            voteCardName="rookie" />
        </CS.VoteCardsWrapper>
    )
}

export default RookieVoteCard
