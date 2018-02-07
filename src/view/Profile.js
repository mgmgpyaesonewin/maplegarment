import React from 'react';
import QuotesWithImage from '../components/QuotesWithImage';
import History from '../components/History';
import Timeline from '../components/Timeline';
import Team from '../components/Team';
import CopyrightSection from '../components/CopyrightSection';

const Profile = () => (
  <div>
    <QuotesWithImage />
    <History />
    <Timeline />
    <Team />
    <CopyrightSection />
  </div>
);


export default Profile;
