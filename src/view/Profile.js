import React from 'react';
import QuotesWithImage from '../components/QuotesWithImage';
import History from '../components/History';
import Timeline from '../components/Timeline';
import Team from '../components/Team';
import CopyrightSection from '../components/CopyrightSection';
import FounderMessage from '../components/FounderMessage';
import Organization from '../components/Organization';

const Profile = () => (
  <div>
    <QuotesWithImage />
    <FounderMessage />
    <History />
    <Timeline />
    <Team />
    <Organization />
    <CopyrightSection />
  </div>
);


export default Profile;
