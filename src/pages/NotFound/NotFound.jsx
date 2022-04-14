import React from 'react';
import { NotFoundWrapper, Text, Description } from './NotFound.style';
import Link from '../../common/Link/Link';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Text>
        404
      </Text>
      <Description>
        Page Not Found
      </Description>
      <Link to="/">
        Back To Home
      </Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
