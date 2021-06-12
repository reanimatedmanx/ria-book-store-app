import React, { useState } from 'react';
import NoImageSvg from '../../resources/icons/no-image.svg';
import { SImage, SImageElement, SImageLoading } from './RiaImage.styled';

export type RiaImageProps = {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
};

const RiaImage = (props: RiaImageProps): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <SImage isLoaded={isLoaded} width={props.width} height={props.height}>
      {!isLoaded && (
        <SImageLoading
          src={NoImageSvg}
          width={props.width}
          height={props.height}
        />
      )}
      <SImageElement
        {...props}
        style={{ display: isLoaded ? 'block' : 'none' }}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    </SImage>
  );
};

RiaImage.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default RiaImage;
