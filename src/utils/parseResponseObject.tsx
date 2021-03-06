import parse from 'html-react-parser';
import { ResponseObj } from '../components/EndpointDescription';
const JSON5 = require('json5');

export default function parseResponseObject (jsonObj: ResponseObj) {
  return parse(JSON5.stringify(jsonObj, function (k:string, v:string|Number) {
    if (typeof v === 'string') return `<span class='response-example-string-value'>${v}</span>`
    else if (typeof v === 'number') return `<span class='response-example-number-value'>${v}</span>`
    else return v
  }, 2).toString().replaceAll('"', ''));
}
