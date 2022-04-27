import React from 'react';

const Introduction = () => {
  return (
    <div className='introduction-text'>
      <h1>Fake faker API</h1>

      <h2>Overview </h2>

      This collection of open-source APIs lets developers produce fake but realistic data that they can use for their projects.

      <p>
        All endpoints return 10 objects by default which can be changed to anywhere from 1 to 1000, by using the <span className='endpoint-param-name-intro'>total_rows</span> query parameter.
      </p>

      This API allows to retrieve/generate the following:

      <ul className='introduction-endpoint-list'>
        <li><span className='collection-object-name'>
          addresses
          </span>
          - fake but realistic US addresses</li>
        <li><span className='collection-object-name'>
          users
          </span>
          - fake but realistic user information</li>
        <li><span className='collection-object-name'>
          books
          </span>
          - fake book information (actual book genres) </li>
        <li><span className='collection-object-name'>
          companies
          </span>
          - completely made up company information </li>
        <li><span className='collection-object-name'>
          movies
          </span>
          - fake movie information (actual movie genres) </li>
        <li><span className='collection-object-name'>
          products
          </span>
          - fake book information (actual book genres) </li>
      </ul>
    </div>
  );
}

export default Introduction
