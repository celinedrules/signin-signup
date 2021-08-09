import React, { useContext } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, Submit } from '../../css/common.styles.jsx';
import { Marginer } from '../marginer/marginer.component';
import { AccountContext } from '../../contexts/sign-in-sign-up.context';

export function SigninForm(props) {
	const { switchToSignup } = useContext(AccountContext);

	const {handleClose} = props;
	
	const onClose = () =>{
		alert('SUCCESSFUL CLOSE')
		handleClose();
	}
	
	return <BoxContainer>
		<Marginer direction={'vertical'} margin={15} />
		<FormContainer>
			<Input type={'email'} placeholder={'Email'} />
			<Input type={'password'} placeholder={'Password'} />
			<Marginer direction={'vertical'} margin={10} />
			<MutedLink href={'#'}>Forgot Password?</MutedLink>
			<Marginer direction={'vertical'} margin={'1.6em'} />
			<Submit type={'submit'} onClick={onClose} >Sign In</Submit>
			<Marginer direction={'vertical'} margin={'1em'} />
			<MutedLink href={'#'}>
				Don't have an account?
				<BoldLink href={'#'} onClick={switchToSignup}>Sign Up</BoldLink>
			</MutedLink>
		</FormContainer>
	</BoxContainer>;
}