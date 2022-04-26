import React, { FC } from 'react';
// import Box from '@mui/material/Box';
interface Props {
  endpoint: String
  title: String
  text: String
  queryParameters?: QueryPrameters[]
}

interface QueryPrameters {
  name: String
  description: String
  example: String
  exampleOutcome: String
  notes: String
}

const EndpointDescription: FC<Props> = ({ endpoint, title, text, queryParameters })=> {
  return (
    <div>

    <p>{endpoint}</p>
    <p>{title}</p>
    <p>{text}</p>
    <p>{queryParameters ? queryParameters[0].name : ""}</p>
    </div>
  );
}

export default EndpointDescription