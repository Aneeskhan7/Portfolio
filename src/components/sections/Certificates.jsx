import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import CertificateCard from "../cards/CertificateCard";

/* ===== SECTION ===== */
const Section = styled.div`
  padding: 120px 0 140px;
  overflow: hidden;
  text-align: center;
  position: relative;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 255, 255, 0.02) 100%
  );
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled.div`
  margin-bottom: 80px;
`;

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #00ffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const TitleAccent = styled.span`
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  border-radius: 2px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  opacity: 0.7;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Count = styled.div`
  margin-top: 16px;
  padding: 10px 24px;
  display: inline-flex;
  gap: 8px;
  border-radius: 30px;
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  font-weight: 600;

  &::before {
    content: "🏆";
  }
`;

/* ===== SLIDER ===== */
const Slider = styled.div`
  width: 100%;
  padding: 60px 0;
  position: relative;
  overflow: visible;
`;

const Track = styled.div`
  display: flex;
  gap: 40px;
  width: max-content;
  padding: 0 50vw;

  animation: slide 50s linear infinite;
  animation-play-state: ${(props) =>
    props.$paused ? "paused" : "running"};

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &.center {
    transform: scale(1.05);
  }

  &.featured {
    transform: scale(1.1);
  }
`;

const Spotlight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 400px;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at center,
    rgba(0, 255, 255, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

const CenterIndicator = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 255, 255, 0.3),
    transparent
  );
`;

/* ===== COMPONENT ===== */
const Certificates = () => {
  const trackRef = useRef(null);
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const slider = sliderRef.current;
    if (!track || !slider) return;

    const updateCardStates = () => {
      const sliderRect = slider.getBoundingClientRect();
      const sliderCenter = sliderRect.left + sliderRect.width / 2;
      const cards = track.querySelectorAll(".cert-item");

      let closestCard = null;
      let closestDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - sliderCenter);

        card.classList.remove("center", "featured");

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }

        if (distance < 300) {
          card.classList.add("center");
        }
      });

      if (closestCard && closestDistance < 150) {
        closestCard.classList.add("featured");
      }
    };

    const interval = setInterval(updateCardStates, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="certificates">
      <Container>
        <Header>
          <TitleWrapper>
            <Title>Certificates</Title>
            <TitleAccent />
          </TitleWrapper>
          <Subtitle>
            Verified certifications and internships showcasing real-world
            skills and professional achievements.
          </Subtitle>
          <Count>{certificates.length} Certifications Earned</Count>
        </Header>

        <Slider ref={sliderRef}>
          <CenterIndicator />
          <Spotlight />

          <Track ref={trackRef} $paused={isPaused}>
            {[...certificates, ...certificates, ...certificates].map(
              (cert, index) => (
                <Item
                  key={index}
                  className="cert-item"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <CertificateCard certificate={cert} />
                </Item>
              )
            )}
          </Track>
        </Slider>
      </Container>
    </Section>
  );
};

export default Certificates;
