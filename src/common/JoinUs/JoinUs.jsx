import React from 'react';
import {
  JoinUsWrapper,
  Text,
  CtaLink,
} from './JoinUs.style';
import Link from '../Link/Link';

const JoinUs = () => {
  return (
    <JoinUsWrapper>
      <Text>
        SPARKS OF IMAGINATION TO LIGHT
        YOUR DESIGNS.{' '}
        <CtaLink>
          <Link to="/contact">
            JOIN US.
          </Link>
        </CtaLink>
      </Text>
    </JoinUsWrapper>
  );
};

export default JoinUs;
