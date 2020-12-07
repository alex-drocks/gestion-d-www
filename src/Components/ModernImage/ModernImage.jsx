// http://afarkas.github.io/lazysizes/#examples
// https://jakearchibald.com/2015/anatomy-of-responsive-images/
import React, {useEffect, useRef} from "react";
import 'lazysizes';

export default function ModernImage({lazyload, cancelInitialGrowFx, srcWebp, srcFallback, width, height, altText, classNames, onClickFunc}) {
  const element = useRef(null);
  useEffect(() => {
      if (cancelInitialGrowFx)
        return;
      setTimeout(() => {
        element.current["classList"].add("initial-grow-fx");
      }, 0)
    },
    [element, cancelInitialGrowFx]
  );

  return (
    <picture className={classNames}>
      {/*<!--[if IE 9]><video style="display: none;><![endif]-->*/}
      <source
        type="image/webp"
        data-srcset={lazyload ? srcWebp : null}
        srcSet={lazyload ? null : srcWebp}
      />
      {/*<!--[if IE 9]></video><![endif]-->*/}
      <img
        src={lazyload ? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : srcFallback}
        data-src={lazyload ? srcFallback : null}
        width={width}
        height={height}
        alt={altText}
        ref={element}
        onClick={onClickFunc ? e => onClickFunc(e.target) : null}
        className={`${classNames}${lazyload ? " lazyload" : ""}`}
      />
    </picture>
  )
}