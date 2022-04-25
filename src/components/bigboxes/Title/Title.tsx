import React, { FC } from 'react';
import './Title.scss';

type titleProps = {
    title:string
};

const Title :FC<titleProps> = ({ title }) => (
  <div className="title">
    {title}
  </div>
);
export default Title;
