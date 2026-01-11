import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import Typewriter from 'typewriter-effect'
import profileImg from "../../images/profile.jpeg"
import HeroBgAnimation from '../../components/HeroBgAnimation/index.jsx'
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { headContainerAnimation, headTextAnimation } from '../../utils/motion.js'
import StarCanvas from "../canvas/Stars.jsx"

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 60px;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 16px 8px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 60px;
  @media (max-width: 831px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  
  @media (max-width: 831px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 10px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  @media (max-width: 831px) {
    order: 1;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 38px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 58px;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 35px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 58px;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + '95'};
  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: hsla(271, 100%, 50%, 1);
background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
);
background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
);
background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
);

box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
border-radius: 40px;
font-weight-600;
font-size: 18px;


&:hover {
  transform: scale(1.05);
  transition: all 0.4s ease-in-out;
  box-shadow: 20px 20px 60px #1F2634,
  filter: brightness(1);
}

@media (max-width: 640px) {
  padding: 12px 0;
  font-size: 18px;
}
`;

const Img = styled.img`
  border-radius: 50%;
  width: 400px;  /* Fixed width instead of 100% */
  height: 400px; /* Fixed height instead of 100% */
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};
  object-fit: cover;
  object-position: center top;

  @media (max-width: 640px) {
    width: 280px;  /* Fixed width for mobile */
    height: 280px; /* Fixed height for mobile */
    max-width: 280px;
    max-height: 280px;
  }
  
  /* Optional: Add medium screen breakpoint */
  @media (max-width: 768px) and (min-width: 641px) {
    width: 320px;
    height: 320px;
    max-width: 320px;
    max-height: 320px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  justify-content: end;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;


const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi i am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>
              <motion.div {...headContainerAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
              >Check Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContainerAnimation}>
                <Tilt>
                  <Img src={profileImg} alt="Anees khan" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default Hero