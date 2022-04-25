import React, { FC } from 'react';
import './ID.scss';

type IDProps = {
    id:string
};

const ID:FC<IDProps> = ({ id }) => (
  <div className="ID">
    {id}
  </div>
);

export default ID;
