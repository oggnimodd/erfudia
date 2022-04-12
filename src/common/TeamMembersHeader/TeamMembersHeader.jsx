import React from 'react';
import { HeaderWrapper, Title, Description } from './TeamMembersHeader.style';
import { HeaderLink } from '../HeaderLink';
import Link from '../Link/Link';

const TeamMembersHeader = ({ preview }) => {
  return (
    <HeaderWrapper>
      <Title>This is our amazing
        and hard-working team.
      </Title>

      {
        preview && (
          <HeaderLink>
            <Link to="/our-team">
              See the team
            </Link>
          </HeaderLink>
        )
      }

      {
        !preview && (
          <Description>
            Uscipit sodales tempus integer
            amet. Lorem ipsum dolor sit amet
          </Description>
        )
      }

    </HeaderWrapper>
  );
};

export default TeamMembersHeader;
