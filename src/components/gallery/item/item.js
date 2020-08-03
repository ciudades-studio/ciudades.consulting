import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, RoundBorderImage } from './item.css';

const Item = ({ title, copy, image }) => (
  <figure>
    <RoundBorderImage fluid={image ? image.childImageSharp.fluid : {}} alt={title} pixels={8} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
