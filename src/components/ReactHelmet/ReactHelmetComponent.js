import React from "react";
import { Helmet } from "react-helmet";
import { getMetaData } from "services/functions/getMetaData.js";

const ReactHelmetComponent = (props) => {
  const url = props.url;

  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>{getMetaData(url).title}</title>
      <meta property="fb:pages" content="" />
      <meta property="image" content={getMetaData(url).thumbnail} />
      <meta name="description" content={getMetaData(url).description} />
      <meta property="og:site_name" content="Miccosukee" />
      <meta property="og:url" content={getMetaData(url).url} />
      <meta property="og:title" content={getMetaData(url).title} />
      <meta property="og:description" content={getMetaData(url).description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={getMetaData(url).thumbnail} />
      <meta
        property="og:image:secure_url"
        content={getMetaData(url).thumbnail}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta name="twitter:card" content="player" />
      <meta name="twitter:site" content={getMetaData(url).url} />
      <meta name="twitter:image" content={getMetaData(url).thumbnail} />
    </Helmet>
  );
};

export default ReactHelmetComponent;
