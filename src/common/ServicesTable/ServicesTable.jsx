import React from 'react';
import short from 'short-uuid';
import { services } from '../../data/services';
import { isNotEmpty } from '../../util/isNotEmpty';
import {
  Row,
  Number,
  Content,
  Label,
  Description,
  ServicesTableWrapper,
} from './ServicesTable.style';

const ServicesTable = () => {
  return (
    <ServicesTableWrapper>
      {
        isNotEmpty(services) && services.map((item, id) => {
          return (
            <Row key={short.generate()}>
              <Number>0{id + 1}</Number>
              <Content>
                <Label>{item.label}</Label>
                <Description>{item.description}</Description>
              </Content>
            </Row>
          );
        })
      }
    </ServicesTableWrapper>
  );
};

export default ServicesTable;
