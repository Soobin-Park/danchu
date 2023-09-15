import React, { useState } from "react";
import styled from "styled-components";
import H1 from "../components/H1";
import H2 from "../components/H2";
// import H2 from "../components/H3";
import Button from "../components/Button";
import QuestionMark from "../icon/QuestionMark";
import Icon from "../components/Icon";
import H4 from "../components/H4";
import P from "../components/P";
import { Tabs, Tab, Content } from "../components/Tabs";
import Text from "../components/Text";
import GuessContainer from "../components/GuessContainer";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const QuestionMarkContainer = styled.div`
  margin-right: 60px;
  margin-top: 60px;
  place-self: flex-end;
`;

const CenterContainer = styled.div`
  // background-color: var(--primary);
  // border: 1px solid var(--primary);
  width: 720px;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const LogoContainer = styled.div`
  padding: 60px;
`;

const DateDanchuContentContainer = styled.div`
  padding: 16px;
`;

const H6Styled = styled.h6`
  display: inline-block;
  color: ${(props) => props.color};
`;

const QuizContainer = styled.div`
  background-color: var(--white);
  max-width: 720px;
  padding: 60px;
  border-radius: 5px;
  margin-bottom: 60px;
`;

const QuizSentenceContainer = styled.div`
  display:flex;
  flex-direction: column;
`;
const QuizSentenceAnswerContainer = styled.div`
  display:flex;
  flex-direction: row;
`;

const TabContainer = styled.div`
  width: 720px;
  text-align: center;
  
`;

const ContentContainer = styled.div`
  text-align: -webkit-center;
  // width: 720px;
  width: 90%;
  background-color: var(--primary);
  border-radius: 0px 0px 18px 18px;
  box-shadow: 5px 5px 5px;
`;

const Answer = styled.div`
  background-color: var(--background);
  height: 50px;
  width: 50%;
  text-align: center;
`;



export default function Quiz() {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <Container>
      <QuestionMarkContainer>
        <QuestionMark />
      </QuestionMarkContainer>
      <CenterContainer>
        <LogoContainer>
          <H1 color="var(--secondary)">DANCHU</H1>
        </LogoContainer>
        <DateDanchuContentContainer>
          <H6Styled color="var(--secondary)">2023년 09월 14일의 </H6Styled>
          <H6Styled color="var(--primary)">&nbsp;단추</H6Styled>
          <H6Styled color="var(--secondary)">를 끼워보세요!</H6Styled>
        </DateDanchuContentContainer>
        <QuizContainer> 
{/* 퀴즈 몇 줄인지 받아서 일정 길이 이상이면 나눠서 보내기 */}
          {/* <H1>노는 것처럼 보여?</H1> */}
          {/* <H1>가 되면 뭔가를 보여준다고</H1> */}
          <QuizSentenceContainer>
            <QuizSentenceAnswerContainer>
              <Answer><H2>1</H2></Answer>
              <H1>·김오수로 향하는 김만배 허위인터뷰 '배후' 의혹, 與, 김어준·주진우·최경영 고발…</H1>
            </QuizSentenceAnswerContainer>
            <QuizSentenceAnswerContainer>

              <H1>"대선 후보 명예 크게 훼손" 등</H1>
            </QuizSentenceAnswerContainer>
          </QuizSentenceContainer>
        </QuizContainer>
        <TabContainer>
          <Tabs>
            <Tab onClick={handleClick} active={active === 0} id={0}>
              Content1
            </Tab>

            <Tab onClick={handleClick} active={active === 1} id={1}>
              Content2
            </Tab>
            <Tab onClick={handleClick} active={active === 2} id={2}>
              Content3
            </Tab>
          </Tabs>
          </TabContainer>
          <ContentContainer>
            <Content active={active === 0}>
              <GuessContainer></GuessContainer>
            </Content>
            <Content active={active === 1}>
              <h1>Content 2</h1>
              <GuessContainer/>
            </Content>
            <Content active={active === 2}>
              <h1>Content 3</h1>
              <GuessContainer></GuessContainer>
            </Content>
          </ContentContainer>
        
      </CenterContainer>
    </Container>
  );
}
