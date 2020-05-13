import React, { useState, useCallback, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import RenderToVotePopular from '../../../controller/RenderToVotePopular';

import * as S from './Styles';

interface VotePopularProps {
    handleVotePart: (increase:number) => void;
    isVoteBack: boolean;
    setIsVoteBack: (isVoteBack: boolean) => void;
}

const VotePopular = ({handleVotePart, isVoteBack, setIsVoteBack}:VotePopularProps) => {
    const [pageStep, setPageStep] = useState(isVoteBack? 4: 0);
    const [canPass, setCanPass] = useState<string | undefined>('투표 정보를 입력해주세요.');
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if(isVoteBack) {
            setIsVoteBack(false);
        }
    }, [isVoteBack, setIsVoteBack, setPageStep])

    const handleClickButton = useCallback((increase: number) => {
        const increasedPageStep = pageStep + increase;
        if(increasedPageStep < 0) {
            setIsVoteBack(true);
            handleVotePart(-1);
        } else if(increasedPageStep > 4) {
            if(canPass === undefined) {
                handleVotePart(1);
            } else {
                enqueueSnackbar(canPass, { variant: 'error' });
            }
        } else {
            if (increase > 0 && canPass !== undefined) {
                enqueueSnackbar(canPass, { variant: 'error' });
                return;
            }

            setPageStep(increasedPageStep);
        }
    }, [enqueueSnackbar, pageStep, handleVotePart, setIsVoteBack, canPass]);

    return (
        <S.VotePopularWrapper>
            {RenderToVotePopular(pageStep, setCanPass)}
            <S.VotePopularButtonWrapper>
                <S.VotePopularButton
                    isNext={false}
                    onClick={() => handleClickButton(-1)}>
                        이전
                </S.VotePopularButton>
                <S.VotePopularButton
                    isNext={true}
                    onClick={() => handleClickButton(1)} >
                        다음
                </S.VotePopularButton>
            </S.VotePopularButtonWrapper>
        </S.VotePopularWrapper>
    );
};

export default VotePopular;