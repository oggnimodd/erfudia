import React from 'react';
import short from 'short-uuid';
import SectionTitle from '../SectionTitle/SectionTitle';
import { GridWrapper, Grid } from './ServicesGrid.style';
import { services } from '../../data/services';
import { isNotEmpty } from '../../util/isNotEmpty';
import ServicesGridCard from './ServicesGridCard';

const ServicesGrid = () => {
  return (
    <GridWrapper>
      <SectionTitle>
        What we do best
      </SectionTitle>
      <Grid>
        {
          isNotEmpty(services) && services.map((item, id) => {
            return (
              <ServicesGridCard
                key={short.generate()}
                item={item}
                order={id}
              />
            );
          })
        }
      </Grid>
    </GridWrapper>
  );
};

export default ServicesGrid;
