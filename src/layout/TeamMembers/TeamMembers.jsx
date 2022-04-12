import React from 'react';
import TeamMembersHeader from '../../common/TeamMembersHeader/TeamMembersHeader';
import TeamMembersContent from '../../common/TeamMembersContent/TeamMembersContent';
import { TeamMembersWrapper } from './TeamMembers.style';

const TeamMembers = ({ preview }) => {
  return (
    <TeamMembersWrapper>
      <TeamMembersHeader preview={preview} />
      <TeamMembersContent preview={preview} />
    </TeamMembersWrapper>
  );
};

export default TeamMembers;
