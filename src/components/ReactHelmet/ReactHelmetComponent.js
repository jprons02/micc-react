import React from "react";
import { Helmet } from "react-helmet";
import { getMetaData } from "services/functions/getMetaData.js";

const ReactHelmetComponent = (props) => {
  const url = props.url;

  return (
    <Helmet>
      {/* General tags */}
      <title>{getMetaData(url).title}</title>
      <meta name="image" content={getMetaData(url).thumbnail} />
      <meta name="description" content={getMetaData(url).description} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@miccnationmiami" />
      <meta name="twitter:creator" content="@miccnationmiami" />

      {/* OpenGraph tags */}
      <meta property="og:title" content={getMetaData(url).title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={getMetaData(url).url} />
      <meta property="og:image" content={getMetaData(url).thumbnail} />
      <meta property="og:description" content={getMetaData(url).description} />
    </Helmet>
  );
};

export default ReactHelmetComponent;
