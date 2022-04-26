import React, { FC } from 'react';

interface Props {
  introductionText: String
}

const Introduction: FC<Props> = ({ introductionText })=> {
  return (
    <div>
      {introductionText}
    </div>
  );
}

export default Introduction