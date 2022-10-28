import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, Img } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
       <SectionDivider style={{marginBottom:"50px"}}/>
        <SectionTitle >About Me</SectionTitle>
        <div >
        <Img src='/images/mypic.png'/>
        <SectionText>Hey, My name is Narendra Kandalkar. I have completed my Bachelor in Civil Engineering from SGBA University Amravati,Maharastra.</SectionText>
       </div>
        <SectionText>I'm a Full Stack Developer with passion for developing scalable web application. A dedicated developer who is easily adaptable to different learning styles. Eager to join your team and make a positive contribution to the company.</SectionText>

     <CarouselContainer ref={carouselRef}>
       <>
       {/* {TimeLineData.map((item,index) => (
         
       ))} */}
       </>
     </CarouselContainer>
    </Section>
  );
};

export default Timeline;
