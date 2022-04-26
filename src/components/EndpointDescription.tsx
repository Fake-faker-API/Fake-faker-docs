import React, { FC } from 'react';
import ReactJson from 'react-json-view'
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
  exampleResponse?: AddressesObject[] | null[] | any
  notes: String
}

interface AddressesObject {
  id: Number
  street_number: String
  street_name: String
  city: String
  state: String
  zipcode: String
  country: String
}

const EndpointDescription: FC<Props> = ({ endpoint, title, text, queryParameters })=> {
  return (
    <div>

    <p>{endpoint}</p>
    <p>{title}</p>
    <p>{text}</p>
    <div>{queryParameters ? 
    <>
    <p>Parameters</p>
    {queryParameters[0].name} 
    <p>
      Example Response
    </p> 
    <ReactJson src={queryParameters[0].exampleResponse} name="data" indentWidth={2}/>
    </>
    : ""}</div>
   
    </div>
  );
}

export default EndpointDescription