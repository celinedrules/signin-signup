import React, { useContext } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, CustomButton } from '../../css/common.styles';
import { Marginer } from '../marginer/marginer.component';
import { AccountContext } from '../../contexts/sign-in-sign-up.context';

export function SignupForm(props) {
	const { switchToSignin } = useContext(AccountContext);

	return <BoxContainer>
		<Marginer direction={'vertical'} margin={15} />
		<FormContainer>
			<Input type={'text'} placeholder={'Full Name'} />
			<Input type={'email'} placeholder={'Email'} />
			<Input type={'password'} placeholder={'Password'} />
			<Input type={'password'} placeholder={'Confirm Password'} />
		</FormContainer>
		<Marginer direction={'vertical'} margin={10} />
		<CustomButton type={'submit'}>Sign Up</CustomButton>
		<Marginer direction={'vertical'} margin={'1em'} />
		<MutedLink href={'#'}>
			Already have an account?
			<BoldLink href={'#'} onClick={switchToSignin}>Sign In</BoldLink>
		</MutedLink>
	</BoxContainer>;
}