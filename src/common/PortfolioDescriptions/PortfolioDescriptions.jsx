import React from 'react';
import short from 'short-uuid';
import {
  Wrapper, Tags, Meta, Title, Description, ClientWebsite,
} from './PortfolioDescriptions.style';
import { isNotEmpty } from '../../util/isNotEmpty';
import { formatUrl } from '../../util/formatUrl';

const ProjectTags = ({ tags }) => {
  return (
    <Tags>
      {
        isNotEmpty(tags) && tags.map((item) => {
          return (
            <li key={short.generate()}>
              {item}
            </li>
          );
        })
      }
    </Tags>
  );
};

const PortfolioDescriptions = ({
  title, tags, description, companyWebsite,
}) => {
  return (
    <Wrapper>
      <ProjectTags tags={tags} />
      <Meta>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ClientWebsite
          target="_blank"
          rel="noopener noreferrer"
          href={companyWebsite}
        >
          {formatUrl(companyWebsite)}
        </ClientWebsite>
      </Meta>
    </Wrapper>
  );
};

export default PortfolioDescriptions;
