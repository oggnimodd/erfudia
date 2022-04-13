import React from 'react';
import Accordion from '../../common/Accordion/Accordion';
import {
  QuestionsWrapper,
  Description,
  Title,
  SocmedHeader,
  Socmed,
  SocmedList,
  ListItem,
} from './Questions.style';
import 'twin.macro';

const Questions = () => {
  return (
    <QuestionsWrapper>
      <Description>
        <Title>You have another
          unlisted question?
        </Title>
        <div tw="text-sm dark:text-white">
          <p>Send us an email here</p>
          <p>mail@erufida.com</p>
        </div>
        <Socmed>
          <SocmedHeader>Check out our Social Media</SocmedHeader>
          <SocmedList>
            <ListItem>
              <a href="https://www.instagram.com/">Instagram</a>
            </ListItem>
            <ListItem>
              <a href="https://www.facebook.com/">Facebook</a>
            </ListItem>
            <ListItem>
              <a href="https://www.twitter.com/">Twitter</a>
            </ListItem>
            <ListItem>
              <a href="https://www.pinterest.com/">Pinterest</a>
            </ListItem>
          </SocmedList>
        </Socmed>
      </Description>
      <Accordion />
    </QuestionsWrapper>
  );
};

export default Questions;
