import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import GatsbyImage from 'gatsby-image';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const RoundBorderImage = styled(GatsbyImage)`
  border-radius: ${props => props.borderRadius}px;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
