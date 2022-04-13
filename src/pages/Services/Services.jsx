import React from 'react';
import PageHeader from '../../common/PageHeader/PageHeader';
import Marquee from '../../common/Marquee/Marquee';
import JoinUs from '../../common/JoinUs/JoinUs';
import {
  ServicesDescription,
  Title,
  Text,
} from './Services.style';
import ServicesTable from '../../common/ServicesTable/ServicesTable';

const Services = () => {
  return (
    <>
      <PageHeader
        bg="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        subtitle="Our Services"
        title="THIS IS WHAT WE ARE GOOD AT"
      />
      <ServicesDescription>
        <Title>We make digital products functional and beautiful</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dolor egestas, sodales arcu nec, faucibus augue. Morbi quis ex
          cursus, cursus magna accumsan, mollis mauris.
        </Text>
      </ServicesDescription>
      <ServicesTable />
      <JoinUs />
      <Marquee text="In creativity we trust" />
    </>
  );
};

export default Services;
