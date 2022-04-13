import React from 'react';
import PageHeader from '../../common/PageHeader/PageHeader';
import Marquee from '../../common/Marquee/Marquee';
import Questions from '../../layout/Questions/Questions';

const Faq = () => {
  return (
    <>
      <PageHeader
        subtitle="Ask anything"
        title="Frequently Ask Questions"
        bg="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Questions />
      <Marquee text="In creativity we trust" />
    </>
  );
};

export default Faq;
