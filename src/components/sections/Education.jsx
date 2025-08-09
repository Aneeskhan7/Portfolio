import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education} from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import EarthCanvas from '../canvas/Earth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:40px;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Education = () => {
    return (
        <Container id="Education">
            <Wrapper>
                <Title>Education</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    My work education as a software engineer and working on various
                    companies and projects.
                </Desc>

                <VerticalTimeline>
                    {education?.map((item, index) => (
                        <EducationCard
                            key={`education-${index}`}
                            education={item} 
                        />
                    ))}
                </VerticalTimeline>
                <EarthCanvas/>
            </Wrapper>
        </Container>
    );
};

export default Education;