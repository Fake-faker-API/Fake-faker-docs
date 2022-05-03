import React, {
  FC,
  useState
} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { parseResponseObject } from '../utils/helper-utils';
import { ResponseObj } from './EndpointDescription';

interface ParameterProps {
  name: string
  description: string
  exampleRequestURL: string
  exampleResponse: ResponseObj
}
const Parameter:FC<ParameterProps> = ({
  name,
  description,
  exampleRequestURL,
  exampleResponse
}) => {
  const [clipboardState, setClipboardState] = useState({ copied: false });

  return (
    <div>
    <span className='endpoint-param-name'>
      {name}
    </span>
    <span className='endpoint-param-description'>
      {description}
    </span>
    <div className='endpoint-request-path-clipboard-wrapper'>
    <span className='endpoint-request-path'>
      {exampleRequestURL}
    </span>
      <CopyToClipboard text={exampleRequestURL}
        onCopy={() => setClipboardState({ copied: true })}>
          <AssignmentIcon />
      </CopyToClipboard>
      {clipboardState.copied
        ? <>
        <span className='clipboard-copied-msg'>Copied!</span>
        {/* //FIXME should display Copied! for some period of time and then clear */}
        {setClipboardState({ copied: false })}
        </>
        : ''}
    </div>
    <span className='response-example-title'>Example Response </span>
      <pre>
        <p className='response-example-full-object'>
          {parseResponseObject(exampleResponse)}
        </p>
      </pre>
  </div>

  );
}

export default Parameter
