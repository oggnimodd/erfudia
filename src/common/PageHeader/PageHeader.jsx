import React from 'react';
import Button from '../Button/Button';
import {
  PageHeaderWrapper,
  PageHeaderInner,
  Subtitle,
  Title,
  Overlay,
} from './PageHeader.style';
import Link from '../Link/Link';

const PageHeader = (
  {
    subtitle,
    title,
    btnInfo,
    path,
    bg,
  },
) => {
  return (
    <PageHeaderWrapper bg={bg}>
      <Overlay />
      <PageHeaderInner>
        <Subtitle>
          {subtitle}
        </Subtitle>
        <Title>
          {title}
        </Title>
        {
          btnInfo && (
            <Link to={path}>
              <Button light>
                {btnInfo}
              </Button>
            </Link>
          )
        }
      </PageHeaderInner>
    </PageHeaderWrapper>
  );
};

export default PageHeader;
