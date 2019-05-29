import { useEffect, useState } from "react";

import NoImageAvailable from "~/assets/images/common/no-image-available.png";

export default requestSrc => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    var img = new Image();

    img.onload = () => {
      setSrc(requestSrc);
    };

    img.onerror = () => {
      setSrc(NoImageAvailable);
    };

    img.src = requestSrc;

    return () => {
      img.src = "";
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return src;
};
