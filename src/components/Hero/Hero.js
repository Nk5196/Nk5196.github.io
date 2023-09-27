import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Hello <br/>
          I am Narendra Kandalkar
      </SectionTitle>
      <SectionText>
        A MERN STACK WEB DEVELOPER
      </SectionText>
      <Button onClick={()=>window.open('https://drive.google.com/file/d/17RVruBkXLquBlUMFv38n5uJa3azm1Su4/view?usp=sharing', "_blank")}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
