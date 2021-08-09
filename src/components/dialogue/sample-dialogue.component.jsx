import { Dialog } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { AccountBox } from '../sign-in-sign-up/sign-in-sign-up.component';

function SampleDialogue(props) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<AccountBox handleClose={handleClose} />
		</Dialog>
	);
}

SampleDialogue.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default function SampleDialogueDemo(props) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<button onClick={handleClickOpen}>Click To Open Dialogue</button>
			<SampleDialogue onClose={handleClose} open={open} />
		</div>
	);
}