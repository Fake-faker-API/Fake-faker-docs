import React, {
  FC
} from 'react';
import AddressObject from '../typeDefs/AddressObject';
import BookObject from '../typeDefs/BookObject';
import CompanyObject from '../typeDefs/CompanyObject';
import MovieObject from '../typeDefs/MovieObject';
import ProductObject from '../typeDefs/ProductObject';
import UserObject from '../typeDefs/UserObject';
import { parseResponseObject } from '../utils/helper-utils'

export type ResponseObj = AddressObject[] | BookObject[] | CompanyObject[] | MovieObject[] | ProductObject[] | UserObject[]

interface ReturnedObject {
  name: String
  type: String
  description?: String
}

interface QueryPrameters {
  name: String
  description: String
  exampleRequestURL: String
  exampleResponse: ResponseObj
  notes: String
}
interface Props {
  endpoint: String
  title: String
  endpointDescription: String
  queryParameters?: QueryPrameters[]
  object: ReturnedObject[]
}

const EndpointDescription: FC<Props> = ({
  endpoint,
  title,
  endpointDescription,
  queryParameters,
  object
}) => {
  return (
    <div>
      <span className='endpoint-title'> {title} </span>
      <hr className='divider-endpoint-title'></hr>
      <span className='endpoint'> {endpoint} </span>
      <span className='endpoint-description'> {endpointDescription} </span>

      <div> {queryParameters
        ? <>
          <span className='endpoint-object-title'>{title} object</span>
          <hr className='divider-endpoint-subtitle'></hr>
          <span className='endpoint-attributes-title'>Attributes</span>
          {object.map((attribute, index) => {
            return (
              <div key={`${attribute.name}_${index}`}>
              <span className='endpoint-attribute-name'>{attribute.name}</span>
              <span className='endpoint-attribute-type'>{attribute.type}</span>
              {attribute.description
                ? <>
                <span className='endpoint-attribute-description'>{attribute.description} </span>
              </>
                : <>
                <br/>
                </>}
              </div>
            )
          })}

        <span className='endpoint-param-title'>Parameters</span>
        <hr className='divider-endpoint-subtitle'></hr>

        {queryParameters.map((param, index) => {
          return (
            <div key={`${param.name}_${index}`}>
              <span className='endpoint-param-name'>
                {param.name}
              </span>
              <span className='endpoint-param-description'>
                {param.description}
              </span>
              <span className='endpoint-request-path'>
                {param.exampleRequestURL}
              </span>
              <span className='response-example-title'>Example Response </span>
                <pre>
                  <p className='response-example-full-object'>
                    {parseResponseObject(param.exampleResponse)}
                  </p>
                </pre>
            </div>
          )
        })}

        </>
        : ''}
        </div>
      </div>
  );
}

export default EndpointDescription
