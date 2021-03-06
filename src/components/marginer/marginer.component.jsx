import React from 'react';
import { HorizontalMargin, VerticalMargin } from './marginer.styles';

function Marginer(props) {
	const { direction } = props;

	if (direction === 'horizontal') return <HorizontalMargin {...props} />;
	else {
		return <VerticalMargin {...props} />;
	}
}

Marginer.defaultProps = {
	direction: 'horizontal',
};

export { Marginer };