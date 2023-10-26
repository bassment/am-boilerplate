import { useState } from 'react';
import { SignIn, SignUp } from '@am/design-system';
import { AuthPageType } from '@am/types';
import { useNavigate } from 'react-router-dom';

export interface AuthRoutesProps {
  type: AuthPageType | undefined;
}

export const AuthRoutes = ({ type }: AuthRoutesProps) => {
  const [error] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleSignUpSubmit = async (email?: string, password?: string) => {
    if (email && password) {
      navigate('/account');
    }
  };

  const handleSignInSubmit = async (email?: string, password?: string) => {
    if (email && password) {
      navigate('/account');
    }
  };

  const handleSignUpLinkClick = () => {
    window.dispatchEvent(
      new CustomEvent('AUTH_PAGE_TYPE_CHANGE', {
        detail: { type: 'signup' },
      })
    );
    navigate('/signup');
  };

  const handleSignInLinkClick = () => {
    window.dispatchEvent(
      new CustomEvent('AUTH_PAGE_TYPE_CHANGE', {
        detail: { type: 'signin' },
      })
    );
    navigate('/signin');
  };

  return (
    <>
      {type === 'signin' && (
        <SignIn
          errorMessage={error}
          onSignUpLinkClick={handleSignUpLinkClick}
          onSubmit={handleSignInSubmit}
        />
      )}
      {type === 'signup' && (
        <SignUp
          errorMessage={error}
          onSignInLinkClick={handleSignInLinkClick}
          onSubmit={handleSignUpSubmit}
        />
      )}
    </>
  );
};

export default AuthRoutes;
