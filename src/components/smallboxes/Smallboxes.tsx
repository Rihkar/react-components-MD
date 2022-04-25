import React, { FC } from 'react';
import './Smallboxes.scss';

type SmallboxesProps = {
    text: string
};

const Smallboxes:FC<SmallboxesProps> = ({ text }) => (
  <div
    className="Smallboxes"
  >
    {text}
  </div>
);

export default Smallboxes;
