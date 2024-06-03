import React from 'react';
import './style.css'; // Import your custom CSS

const Head = () => {
  return (
    <head>
      {/* Meta Tags */}
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      
      {/* Site Metas */}
      <title>Global Construction & Engineering</title>
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta name="author" content="" />

      {/* Site Icons */}
      <link rel="shortcut icon" href="img/global-logo.png" type="image/x-icon" />
      
      {/* Themify Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ti-icons@0.1.2/css/themify-icons.css" />
    </head>
  );
};

export default Head;
