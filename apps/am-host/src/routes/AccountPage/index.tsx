import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Account = React.lazy(() => import('account-mf/Module'));

export const AccountPage = () => {
  const [testData] = useOutletContext() as [{ testData: string }];

  return <Account testData={testData} />;
};

export default AccountPage;
