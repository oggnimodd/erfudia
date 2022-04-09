import React from 'react';
import { MainDescriptionWrapper, Description } from './MainDescription.style';
import Button from '../Button/Button';
import Link from '../Link/Link';

const MainDescription = () => {
  return (
    <MainDescriptionWrapper>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum quam enim, ac sollicitudin felis aliquet vel.
      </Description>
      <Link to="about">
        <Button>
          Learn More
        </Button>
      </Link>
    </MainDescriptionWrapper>
  );
};

export default MainDescription;
