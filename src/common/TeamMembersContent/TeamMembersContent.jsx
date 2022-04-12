import React from 'react';
import short from 'short-uuid';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import { TeamMembersGrid } from './TeamMembersContent.style';
import { teamMembers } from '../../data/teamMembers';
import { isNotEmpty } from '../../util/isNotEmpty';

const TeamMembersContent = ({ preview }) => {
  const displayedMembers = preview ? teamMembers.slice(0, 3) : teamMembers;

  return (
    <TeamMembersGrid>
      {
        isNotEmpty(displayedMembers) && displayedMembers.map((item) => {
          return (
            <TeamMemberCard
              key={short.generate()}
              item={item}
            />
          );
        })
      }
    </TeamMembersGrid>
  );
};

export default TeamMembersContent;
