import React from 'react';
import ServicesGrid from '../../common/ServicesGrid/ServicesGrid';
import ProfileVideo from '../../common/ProfileVideo/ProfileVideo';
import Testimonials from '../../common/Testimonials/Testimonials';
import Marquee from '../../common/Marquee/Marquee';
import PageHeader from '../../common/PageHeader/PageHeader';
import TeamMembers from '../../layout/TeamMembers/TeamMembers';
import Awards from '../../common/Awards/Awards';
import JoinUs from '../../common/JoinUs/JoinUs';

const About = () => {
  return (
    <>
      <PageHeader
        subtitle="What we do ?"
        title="THIS IS THE MAGIC THAT GOES ON
        IN OUR CREATIVE COMPANY FOR 10 YEARS NOW."
        btnInfo="Contact Us"
        path="/contact"
        bg="https://images.pexels.com/photos/5103899/pexels-photo-5103899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <ServicesGrid />
      <ProfileVideo />
      <Testimonials />
      <TeamMembers preview />
      <Awards />
      <JoinUs />
      <Marquee text="In creativity we trust" />
    </>
  );
};

export default About;
