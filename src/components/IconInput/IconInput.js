import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--fontSize' : '14px',
    '--lineHeight' : '16px',
    '--height' : '24px',
    '--paddingLeft' : '24px',
    '--borderHeight' : '1px',
    'iconSize' : 16,
    'iconStrokeWidth' : 1
  },
  large: {
    '--fontSize' : '18px',
    '--lineHeight' : '21px',
    '--height' : '36px',
    '--paddingLeft' : '36px',
    '--borderHeight' : '2px',
    'iconSize' : 24,
    'iconStrokeWidth' : 2
  }
}

const IconInput = ({
  label,
  icon,
  width = 550,
  size,
  placeholder,
}) => {
  const styles=STYLES[size];

  return (
    <Wrapper width={width} style={styles}>
      <label><VisuallyHidden>{label}</VisuallyHidden></label>
      <NativeTextInput type="text" placeholder={placeholder} style={styles}/>
      <IconWrapper>
        <Icon id={icon} size={styles.iconSize} strokeWidth = {styles.iconStrokeWidth}/>
      </IconWrapper>
      <BottomBorder style={styles}/>
    </Wrapper>
  );
};

export default IconInput;

/* Styled Components */

const BottomBorder = styled.div `
  position: absolute;
  left: 0;
  bottom: 0;
  height: var(--borderHeight);
  width: 100%;
  border-radius: 2px;
  background-color: ${COLORS.black};
`

const NativeTextInput = styled.input`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  padding-left: var(--paddingLeft);
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  border: none;
  

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`
const IconWrapper = styled.div `
  position: absolute;
  top: 0;
  left:0;
  bottom: 0;
  height: fit-content;
  margin: auto;
  color: ${COLORS.gray700};
  pointer-events: none;
`
const Wrapper = styled.div `
  position: relative;
  width: ${p => p.width + 'px'};
  height: var(--height);

  &:hover ${IconWrapper} {
    color: ${COLORS.black};
  }

  &:hover ${NativeTextInput} {
    color: ${COLORS.black};
  }

  &:hover ${NativeTextInput}::placeholder {
    color: ${COLORS.gray700};
  }
`