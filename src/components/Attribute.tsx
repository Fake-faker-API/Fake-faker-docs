import React, {
  FC
} from 'react';

interface AttributeProps {
  name: string
  description?: string
  type: string
}

const Attribute:FC<AttributeProps> = ({
  name,
  description,
  type
}) => {
  return (
    <div className='endpoint-parameter-wrapper'>
    <span className='endpoint-attribute-name'>{name}</span>
    <span className='endpoint-attribute-type'>{type}</span>
    {description
      ? <>
      <span className='endpoint-attribute-description'>{description} </span>
    </>
      : <>
      <br/>
      </>}
    </div>
  );
}

export default Attribute
