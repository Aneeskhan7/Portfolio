import React from "react";
import styled from "styled-components";

const Card = styled.a`
  width: 480px;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Paper = styled.div`
  width: 100%;
  height: 320px;
  background: white;
  border-radius: 6px;
  overflow: hidden;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.25);

  transition: box-shadow 0.3s ease;

  ${Card}:hover & {
    box-shadow:
      0 20px 50px rgba(0, 255, 255, 0.35);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: white;
`;

const Name = styled.p`
  margin-top: 14px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
`;

const CertificateCard = ({ certificate }) => {
  return (
    <Card
      href={certificate.pdf}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Paper>
        <Image src={certificate.preview} alt={certificate.name} />
      </Paper>
      <Name>{certificate.name}</Name>
    </Card>
  );
};

export default CertificateCard;
