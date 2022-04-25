import React, { FC } from 'react';
import Description from '../Description/Description';
import ID from '../ID/ID';
import Title from '../Title/Title';
import './CardBoxContainer.scss';

type CardBoxContainerProps = {
    title:string
    id:string
    description:string
}

const CardBoxContainer:FC<CardBoxContainerProps> = ({ title, id, description }) => (
  <div className="bigboxes--CardBoxContainer">
    <Title title={title} />
    <ID id={id} />
    <Description description={description} />
  </div>
);
export default CardBoxContainer;
