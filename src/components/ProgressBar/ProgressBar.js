/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height' : 8 + 'px',
    '--padding' : 0
  },
  medium: {
    '--height' : 12 + 'px',
    '--padding' : 0
  },
  large: {
    '--height' : 24 + 'px',
    '--padding' : 4 + 'px'
  }
};

const ProgressBar = ({ value, size }) => {
  
  const styles = SIZES[size];

  return (
    <OutterTrack role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={styles}>
      <InnerBar value={value}/>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </OutterTrack>);
};

export default ProgressBar;

/* styled components*/

const OutterTrack = styled.div`
  display: flex;
  align-items: center;
  height: var(--height);
  padding: var(--padding);
  width: auto;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  overflow: hidden;
`;

const InnerBar = styled.div`
  width: ${p => p.value}%;
  height: 16px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${p => p.value > 98 && '4px'};
  border-bottom-right-radius: ${p => p.value > 98 && '4px'};
  background-color: ${COLORS.primary};
`;