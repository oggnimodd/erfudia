import React from 'react';
import short from 'short-uuid';
import {
  AwardsWrapper,
  AwardsList,
  AwardItem,
  Number,
  Name,
  Category,
  Year,
  AwardItemRow,
} from './Awards.style';
import { SectionTitle } from '../SectionTitle';
import { awards } from '../../data/awards';
import { isNotEmpty } from '../../util/isNotEmpty';
import { isDark } from '../../util/isDark';

const Awards = () => {
  return (
    <AwardsWrapper>
      <SectionTitle>
        DESERVED AWARDS
      </SectionTitle>
      <AwardsList>
        {
          isNotEmpty(awards) && awards.map((item, id) => {
            return (
              <AwardItem key={short.generate()}>
                <AwardItemRow>
                  <Number dark={isDark()}>0{id}</Number>
                  <Name>{item.name}</Name>
                </AwardItemRow>
                <AwardItemRow>
                  <Category>{item.category}</Category>
                  <Year>{item.year}</Year>
                </AwardItemRow>
              </AwardItem>
            );
          })
        }
      </AwardsList>
    </AwardsWrapper>

  );
};

export default Awards;
