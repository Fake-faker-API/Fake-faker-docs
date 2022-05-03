import React, {
  FC,
  useState
} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import parseResponseObject from '../utils/parseResponseObject';
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

  const handleClick = () => {
    setClipboardState({ copied: true });
  };

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
    <Button onClick={handleClick}>
      <CopyToClipboard text={exampleRequestURL}
        onCopy={() => setClipboardState({ copied: true })}>
          <Tooltip title="Copy to clipboard">
            <AssignmentIcon />
          </Tooltip>
      </CopyToClipboard>
      </Button>
      {clipboardState.copied
        ? <>
        <span className='clipboard-copied-msg'>Copied!</span>
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
