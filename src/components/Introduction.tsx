import React, { FC } from 'react';

interface Props {
  introductionText: String
}

const Introduction: FC<Props> = ({ introductionText }) => {
  return (
    <div>
      <p>

        The goal of creating this project was simply to have fun.

        <span>Overview </span>
      This collection of open-source APIs was inspired by
      <a target='_blank' href='https://fakerapi.it/en' rel='noreferrer'>
        FAKER API</a>
        All endpoints return 10 objects by default (can be changed to anywhere from 1 to 1000).

        This API allows to retrieve/generate the following data
        <ul className='introduction-endpoint-list'>
          <li>addresses - fake but realistic US addresses</li>
          <li>users - fake but realistic user information</li>
          <li>books - fake book information (actual book genres) </li>
          <li>companies - completely made up company information </li>
          <li>movies - fake movie information (actual movie genres) </li>
          <li>products - fake book information (actual book genres) </li>
        </ul>
      </p>
    </div>
  );
}

export default Introduction
