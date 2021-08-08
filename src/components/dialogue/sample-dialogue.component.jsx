import { Dialog, makeStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { AccountBox } from '../sign-in-sign-up/sign-in-sign-up.component';

function SampleDialogue(props) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<AccountBox />
		</Dialog>
	);
}

SampleDialogue.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default function SampleDialogueDemo() {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<button onClick={handleClickOpen}>Click Me</button>
			<SampleDialogue onClose={handleClose} open={open} />
		</div>
	);
}