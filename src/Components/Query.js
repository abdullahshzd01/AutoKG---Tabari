import '../App.css'
import React from 'react';
import { ButtonQuery } from "./ButtonQuery";
import AggregatedQuery from './AggregatedQuery';

export const Query = () => {

    return (
        <>
            <ButtonQuery/>
            <hr className='container' />
            <AggregatedQuery/>
        </>
  )
}