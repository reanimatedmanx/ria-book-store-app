import React, { ReactNode } from 'react';
import { STypography, STypographyHeading } from './RiaTypography.styled';

type RiaTypographyProps = {
  children: ReactNode;
  as: any; // lel
};

const RiaTypography = (props: RiaTypographyProps): JSX.Element => (
  <STypography {...props}>{props.children}</STypography>
);

RiaTypography.Heading = STypographyHeading;

export default RiaTypography;
