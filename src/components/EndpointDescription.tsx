import React, {
  FC,
  useState,
  useEffect
} from 'react';
import AddressObject from '../typeDefs/AddressObject';
import BookObject from '../typeDefs/BookObject';
import CompanyObject from '../typeDefs/CompanyObject';
import MovieObject from '../typeDefs/MovieObject';
import ProductObject from '../typeDefs/ProductObject';
import UserObject from '../typeDefs/UserObject';
import { parseResponseObject } from '../utils/helper-utils';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AssignmentIcon from '@mui/icons-material/Assignment';

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
  const [clipboardState, setClipboardState] = useState({ copied: false });

  useEffect(
    () => {
      const timer1 = setTimeout(() => setClipboardState({ copied: false }), 2000);
      return () => {
        clearTimeout(timer1);
        setClipboardState({ copied: true })
      };
    }, []
  );

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
              <div key={`${attribute.name}_${index}`} className='endpoint-parameter-wrapper'>
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
              <div className='endpoint-request-path-clipboard-wrapper'>
              <span className='endpoint-request-path'>
                {param.exampleRequestURL}
              </span>
                <CopyToClipboard text={param.exampleRequestURL}
                  onCopy={() => setClipboardState({ copied: true })}>
                    <AssignmentIcon />
                </CopyToClipboard>
                {clipboardState.copied
                  ? <>
                  <span className='clipboard-copied-msg'>Copied!</span>
                  </>
                  : ''}
              </div>
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
