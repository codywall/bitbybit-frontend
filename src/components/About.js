import styled from "@emotion/styled";
import React from "react";
import BlockHeading from "./BlockHeading";
import ContentWrapper from "./ContentWrapper";

const AboutSection = styled("div")`
  background: white;
  color: black;
`;

const About = () => {
  return (
    <AboutSection>
      <BlockHeading title="How it works" />
      <ContentWrapper>
        <p>
          Bitbybit is a proof-of-stake cryptocurrency that donates 85% of its
          liquidation to charity. It is one of the first non-profit
          organizations that accepts donations through blockchain technology;
          allowing individuals to invest and donate simultaneously. Donations
          are held within the donor’s crypto wallet until they decide to sell
          their tokens. Once sold, the tokens are sent to the charity’s crypto
          wallet. Charitable organizations are contracted quarterly for use of
          this technology.
        </p>

        <p>
          With a strong team of developers, Bitbybit is dedicated to providing
          awareness and funding for charitable organizations. This will be
          achieved by utilizing enhanced public interest and innovative
          financing mechanisms. Our goal is to provide charitable organizations
          across the world access to blockchain technology.
        </p>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
