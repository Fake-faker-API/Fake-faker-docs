import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import EndpointDescription from './EndpointDescription';
import Introduction from './Introduction';
import { endpointDescription } from '../data/endpoint-description';

export default function Main () {
  return (
    <div>
      <Routes>
          <Route path='/addresses' element={(() => <EndpointDescription {...endpointDescription.addresses} />)()}>
          </Route>

          <Route path='/books' element={(() => <EndpointDescription {...endpointDescription.books} />)()}>
          </Route>

          <Route path='/companies' element={(() => <EndpointDescription {...endpointDescription.companies} />)()}>
          </Route>

          <Route path='/products' element={(() => <EndpointDescription {...endpointDescription.products} />)()}>
          </Route>
           <Route path='/movies' element={(() => <EndpointDescription {...endpointDescription.movies} />)()}>
          </Route>
          <Route path='/users' element={(() => <EndpointDescription {...endpointDescription.users} />)()}>
          </Route>
          <Route path='/introduction' element={(() => <Introduction />)()}>

          </Route>
          <Route path='/' element={(() => <Introduction />)()}>

          </Route>
        </Routes>
      </div>
  );
}
