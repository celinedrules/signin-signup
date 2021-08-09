import React from 'react';
import { Dialog } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { AccountBox } from '../sign-in-sign-up/sign-in-sign-up.component';

const email = 'f@u'

function SampleDialogue(props)
{
	const { onClose, selectedValue, open } = props;

	const handleClose = () =>
	{
		onClose(selectedValue);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<AccountBox handleClose={handleClose} selectedValue={selectedValue}/>
		</Dialog>
	);
}

SampleDialogue.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};

export default function SampleDialogueDemo(props)
{
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = React.useState(email);

	const handleClickOpen = () =>
	{
		setOpen(true);
	};

	const handleClose = (value) =>
	{
		setOpen(false);
		setSelectedValue(value)
	};

	return (
		<div>
			<button onClick={handleClickOpen}>Click To Open Dialogue</button>
			<SampleDialogue selectedValue={selectedValue} onClose={handleClose} open={open} />
		</div>
	)
}	