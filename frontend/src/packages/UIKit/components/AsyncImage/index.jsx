import React from "react";
import PropTypes from "prop-types";

import { ContextLoader } from "~/packages/UIKit";

import useFetchImage from "./useFetchImage";

const AsyncImage = ({ src, alt }) => {
  const imageSrc = useFetchImage(src);

  const isLoading = imageSrc === null;

  if (isLoading) {
    return <ContextLoader />;
  }

  return <img src={imageSrc} alt={alt} />;
};

AsyncImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default React.memo(AsyncImage);
