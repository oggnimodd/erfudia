import React from 'react';
import short from 'short-uuid';
import {
  Wrapper, Tags, Meta, Title, Description, ClientWebsite,
} from './PortfolioDescriptions.style';
import { isNotEmpty } from '../../util/isNotEmpty';
import { formatUrl } from '../../util/formatUrl';

const ProjectTags = ({ categories }) => {
  return (
    <Tags>
      {
        isNotEmpty(categories) && categories.map((item) => {
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
  title, categories, description, companyWebsite,
}) => {
  return (
    <Wrapper>
      <ProjectTags categories={categories} />
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
