import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { LandingsPageType } from '@am/types';

const Landings = React.lazy(() => import('landings-mf/Module'));

export interface LandingsPageProps {
  type?: LandingsPageType;
}

export const LandingsPage = ({ type }: LandingsPageProps) => {
  const [testData] = useOutletContext() as [{ testData: string }];

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('LANDINGS_PAGE_TYPE_CHANGE', {
        detail: { type },
      })
    );
  }, [type]);

  return <Landings type={type} testData={testData} />;
};

export default LandingsPage;
