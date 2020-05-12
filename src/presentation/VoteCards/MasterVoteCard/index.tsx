import React from 'react'
import { SelectVote } from '../../';

import * as CS from '../CommonStyles';
import * as S from './Styles';

interface MasterVoteCardProps {
    setCanPass: (canPass: string | undefined) => void;
}

const MasterVoteCard: React.FC<MasterVoteCardProps> = ({ setCanPass }) => {

    return (
        <CS.VoteCardsWrapper>
            <CS.VoteCardsIndex>대망의 대상</CS.VoteCardsIndex>
            <CS.VoteCardsTitle>
                나의 <b>명함을 주고싶은</b> 그 프로듀서는?
            </CS.VoteCardsTitle>
            <CS.VoteCardsDescription>
                시즌 10을 빛내 준 프로듀서님을 뽑아주세요.
            </CS.VoteCardsDescription>
            <CS.VoteCardsDescription>
                이번 시즌의 후보자는 총 61명이며 가나다순으로 정렬되어 있습니다. <br />
                뽑으려는 P가 혹시 안 보인다면 영문과 한글닉 두개 다 확인해주세요. <br />
                1~3명 투표 가능하며, 다른 선택지를 잘못 선택하지 않았는지 신중하게 체크해서 투표해주세요.
            </CS.VoteCardsDescription>
            <CS.VoteCardSubtitle>
                <b>후보 조건</b>
            </CS.VoteCardSubtitle>
            <S.RuleList>
                <li>시즌 10 안에서 투표 대상이 되는 곡을 2회 이상 투고했어야 함</li>
                <li>전체 시즌 통합하여 솔로를 2회 이상 투고했어야 함</li>
            </S.RuleList>
            <CS.VoteCardsDivision />
          <SelectVote
            maximumSelect={3}
            minimumSelect={1}
            setCanPass={setCanPass}
            voteCardName="master" />
        </CS.VoteCardsWrapper>
    )
}

export default MasterVoteCard;
