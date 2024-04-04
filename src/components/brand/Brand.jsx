import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google}  alt='a'/>
    </div>
    <div>
      <img src={slack} alt='a' />
    </div>
    <div>
      <img src={atlassian} alt='a'/>
    </div>
    <div>
      <img src={dropbox} alt='a'/>
    </div>
    <div>
      <img src={shopify} alt='a'/>
    </div>
  </div>
);

export default Brand;