import React, {
  FC
} from 'react';
import AddressObject from '../typeDefs/AddressObject';
import BookObject from '../typeDefs/BookObject';
import CompanyObject from '../typeDefs/CompanyObject';
import MovieObject from '../typeDefs/MovieObject';
import ProductObject from '../typeDefs/ProductObject';
import UserObject from '../typeDefs/UserObject';
import Parameter from './Parameter';
import Attribute from './Attribute';

export type ResponseObj = AddressObject[] | BookObject[] | CompanyObject[] | MovieObject[] | ProductObject[] | UserObject[]

interface ReturnedObject {
  name: string
  type: string
  description?: string
}

interface QueryPrameters {
  name: string
  description: string
  exampleRequestURL: string
  exampleResponse: ResponseObj
  notes: string
}
interface Props {
  endpoint: string
  title: string
  endpointDescription: string
  method: string
  objectName: string
  queryParameters?: QueryPrameters[]
  object: ReturnedObject[]
}

const EndpointDescription: FC<Props> = ({
  endpoint,
  title,
  endpointDescription,
  method,
  objectName,
  queryParameters,
  object
}) => {
  return (
    <div>
      <span className='endpoint-title'>{title} </span>
      <hr className='divider-endpoint-title'></hr>
      <span className='endpoint'>{method} {endpoint} </span>
      <span className='endpoint-description'> {endpointDescription} </span>

      <div> {queryParameters
        ? <>
          <span className='endpoint-object-title'>{objectName} object</span>
          <hr className='divider-endpoint-subtitle'></hr>
          <span className='endpoint-attributes-title'>Attributes</span>
          {object.map((attribute, index) => {
            return (
              <Attribute key={`${attribute.name}_${index}`} {...attribute} />
            )
          })}
{/* key={`${name}_${index}`}  */}
        <span className='endpoint-param-title'>Parameters</span>
        <hr className='divider-endpoint-subtitle'></hr>

        {queryParameters.map((param, index) => {
          return (
            <Parameter {...param} key={`${index}_${param.name}`} />
          )
        })}
        </>
        : ''}
        </div>
      </div>
  );
}

export default EndpointDescription
