import React, { useEffect } from 'react';
import { AuthPageType } from '@am/types';

const Authorization = React.lazy(() => import('authorization-mf/Module'));

export interface AuthorizationPageProps {
  type?: AuthPageType;
}

export function AuthorizationPage({ type }: AuthorizationPageProps) {
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('AUTH_PAGE_TYPE_CHANGE', {
        detail: { type },
      })
    );
  }, [type]);

  return <Authorization type={type} />;
}

export default AuthorizationPage;
