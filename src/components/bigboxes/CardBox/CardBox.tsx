import React, { FC } from 'react';
import Description from '../Description/Description';
import ID from '../ID/ID';
import Title from '../Title/Title';
import './CardBox.scss';

type CardBoxProps = {
    title:string
    id:string
    description:string
};

const CardBox:FC<CardBoxProps> = ({ title, id, description }) => (
  <div className="bigbox--cardbox">
    <Title title={title} />
    <ID id={id} />
    <Description description={description} />
  </div>
);

export default CardBox;
