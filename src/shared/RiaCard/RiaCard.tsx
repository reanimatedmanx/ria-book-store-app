import React, { ReactNode, PropsWithChildren } from 'react';
import { SCard } from './RiaCard.styled';

type RiaCardProps = {
  children?: ReactNode;
  orientation: 'vertical' | 'horizontal';
  onClick: () => void;
};

const RiaCard = ({
  children,
  orientation,
  onClick,
}: RiaCardProps): JSX.Element => (
  <SCard orientation={orientation} onClick={onClick}>
    {children}
  </SCard>
);

export default RiaCard;
