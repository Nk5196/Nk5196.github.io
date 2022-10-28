import React from 'react';
import { DiFirebase, DiMongodb, DiNodejs, DiNodejsSmall, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" >
     <SectionDivider />
     <br/><br/><br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        <br/>
        I've worked with a range a Technologies in the web development world. From Front-end,Back-end to design.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js <br/>
              JavaScript <br/>
              CSS3 <br/>
              HTML <br/>
              Chakra UI
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejsSmall size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              NodeJs <br/>
              ExpressJs <br/>
              MongoDb <br/>
              Postman <br/>
              Mongoose
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
