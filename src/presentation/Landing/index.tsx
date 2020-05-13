import React, { useCallback } from 'react';
import PageData from '../../entity/PageData';

import * as S from './Styles';

interface LandingProps {
  setPageData: (pageData: number) => void;
}

const Landing = ({ setPageData }:LandingProps ) => {
  const onClickNextButton = useCallback(() => {
    setPageData(PageData.EMAIL_INPUT);
  }, [ setPageData ]);

  return (
    <>
      <S.LandingHeader>
        <S.LandingTitle>
          전국 프로듀서 노래자랑 시즌 10
        </S.LandingTitle>
        <S.LandingSubTitle>
          시청자 투표
        </S.LandingSubTitle>
      </S.LandingHeader>
      <S.LandingDescription>
      노래자랑 영상이나 본 방송 합쳐 적어도 5회 이상 챙겨보신 분들을 대상으로 하는 투표입니다.
      <br />
      끝까지 꼼꼼하게 작성해주실 수 있는 분만 참여부탁드립니다.
      <br />
      <br />
      참가 경험이 있는 분도 모두 투표 가능합니다. 자기에 대한 투표도 원한다면 하셔도 됩니다.
      </S.LandingDescription>
      <S.LandingNextButton onClick={onClickNextButton}>
      </S.LandingNextButton>
    </>
  );
};

export default Landing;