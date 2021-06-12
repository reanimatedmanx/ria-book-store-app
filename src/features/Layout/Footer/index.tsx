import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import RiaTypography from '../../../shared/Typography';

const SFooter = styled.footer`
  margin-top: 40px;
`;

const Footer = () => (
  <SFooter>
    <RiaTypography as="h5">
      Ria Book Store © {moment().format('YYYY/MM/DD')}
    </RiaTypography>
  </SFooter>
);

export { Footer };
