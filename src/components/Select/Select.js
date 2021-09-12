import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log({displayedValue, label, value, children});

  return (
    <Wrapper>
      {displayedValue}
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <IconWrapper>
        <Icon id="chevron-down" size="24"/>
      </IconWrapper>
    </Wrapper>
  );
};
    
export default Select;
    
/* Styled Components */
 
const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`
const Wrapper = styled.div`
  position: relative;
  /*display: flex;
  gap: 12px;
  align-items: center; */
  width: max-content;
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-family: 'Roboto', sans serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  &:hover{
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`


const IconWrapper = styled.div`
position: absolute;
top: 0;
right: 6px;
bottom: 0;
height: 24px;
margin: auto;
pointer-events: none;
`