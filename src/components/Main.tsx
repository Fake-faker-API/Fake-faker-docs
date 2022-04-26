import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import EndpointDescription from './EndpointDescription';
import Introduction from './Introduction';
import { endpointDescription } from '../const/endpoint-description';

export default function Main() {
  return (
    <div>
      <Routes>
          <Route path="/addresses" element={(()=> <EndpointDescription {...endpointDescription.addresses} />)()}>
          </Route>

          <Route path="/books" element={(()=> <EndpointDescription {...endpointDescription.books} />)()}>
          </Route>

          <Route path="/companies" element={(()=> <EndpointDescription {...endpointDescription.companies} />)()}>
          </Route>

          <Route path="/products" element={(()=> <EndpointDescription {...endpointDescription.products} />)()}>
          </Route>
           <Route path="/movies" element={(()=> <EndpointDescription {...endpointDescription.movies} />)()}>
          </Route>
          <Route path="/users" element={(()=> <EndpointDescription {...endpointDescription.addresses} />)()}>
          </Route>
          <Route path="/introduction" element={(()=> <Introduction introductionText="Some text" />)()}>

          </Route>
          <Route path="/" element={(()=> <Introduction introductionText="Some text" />)()}>

          </Route>
        </Routes>
      </div>
  );
}