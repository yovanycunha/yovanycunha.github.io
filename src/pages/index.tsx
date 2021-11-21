import React from "react";
import { Helmet } from "react-helmet";

import '../styles/index.scss';

import Home from './Home/Home';

const Page = () => {
  return (
  <>
    <Helmet
      title="Yovany Cunha - Fullstack Dev"
      defer={false}
    />
    <Home/>
  </>
  )
}

export default Page
