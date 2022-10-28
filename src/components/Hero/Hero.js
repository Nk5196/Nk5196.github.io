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
      <Button onClick={()=>window.open('https://drive.google.com/file/d/1lUn6UL7LZatiST643PO37KDRaP_OCbrJ/view?usp=sharing', "_blank")}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;