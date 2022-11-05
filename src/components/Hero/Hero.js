import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is Prashant Nagare aka Reaperg0d from Sangamner, India. I am a Software Engineer at <b>
            <Link href="https://cognizant.com" target="_blank">Cognizant</Link></b>.
          & Passionate Cyber security researcher & Penetration Tester.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
