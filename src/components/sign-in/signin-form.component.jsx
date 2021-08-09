import React, { useContext } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, CustomButton } from '../../css/common.styles.jsx';
import { Marginer } from '../marginer/marginer.component';
import { AccountContext } from '../../contexts/sign-in-sign-up.context';

export function SigninForm(props)
{
	const { switchToSignup } = useContext(AccountContext);

	const { handleClose, selectedValue } = props;
	let userEmail = '';
	let userPswd = '';
	const onClose = () =>
	{
		alert('SUCCESSFUL CLOSE');
		handleClose();
		alert(`Email:  ${selectedValue}`);
		alert(`User Email: ${userEmail} Pswd: ${userPswd}`);

		// HANDLE SIGN IN HERE
	};

	const updateEmail = (evt) =>
	{
		userEmail = evt.target.value;
	};

	const updatePassword = (evt) =>
	{
		userPswd = evt.target.value;
	};

	return <BoxContainer>
		<Marginer direction={'vertical'} margin={15} />
		<FormContainer>
			<Input type={'email'} placeholder={'Email'} onChange={evt => updateEmail(evt)} />
			<Input type={'password'} placeholder={'Password'} onChange={evt => updatePassword(evt)} />
			<Marginer direction={'vertical'} margin={10} />
			<MutedLink href={'#'}>Forgot Password?</MutedLink>
			<Marginer direction={'vertical'} margin={'1.6em'} />
			<CustomButton type={'submit'} onClick={onClose}>Sign In</CustomButton>
			<Marginer direction={'vertical'} margin={'1em'} />
			<MutedLink href={'#'}>
				Don't have an account?
				<BoldLink href={'#'} onClick={switchToSignup}>Sign Up</BoldLink>
			</MutedLink>
		</FormContainer>
	</BoxContainer>;
}