import React, { FC } from 'react';
import './Description.scss';

type DescriptionProps = {
    description: string
};

const Description:FC<DescriptionProps> = ({ description }) => (
  <div className="description">
    {description}
  </div>
);

export default Description;
