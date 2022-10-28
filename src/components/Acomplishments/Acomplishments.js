import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 250, text: 'Total Contributions'},
  { number: 1000, text: 'Total hours of coding', },
  { number: 200, text: 'Communication Skills Training', },
  { number: 220, text: 'Github Followers', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
           <BoxNum>{card.number}+</BoxNum>
           <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
