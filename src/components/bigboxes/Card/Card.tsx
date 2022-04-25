import React, { FC } from 'react';
import './Card.scss';
import Title from '../Title/Title';
import ID from '../ID/ID';
import Description from '../Description/Description';

type CardProps = {
    title:string
    id:string
    description:string
};

const Card:FC<CardProps> = ({ title, id, description }) => (
  <div className="bigbox--card">
    <Title title={title} />
    <ID id={id} />
    <Description description={description} />
  </div>
);
export default Card;
