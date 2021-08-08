import styled from 'styled-components';
import { Marginer } from './marginer.component';

export const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }) =>
	typeof margin === 'string' ? margin : `${margin}px`};
`;

export const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) =>
	typeof margin === 'string' ? margin : `${margin}px`};
`;

Marginer.defaultProps = {
	direction: 'horizontal',
};