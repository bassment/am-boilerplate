import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { GenericPageType } from '@am/types';

const Generic = React.lazy(() => import('generic-mf/Module'));

export interface GenericPageProps {
  type?: GenericPageType;
}

export const GenericPage = ({ type }: GenericPageProps) => {
  const [testData] = useOutletContext() as [{ testData: string }];

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('GENERIC_PAGE_TYPE_CHANGE', {
        detail: { type },
      })
    );
  }, [type]);

  return <Generic type={type} testData={testData} />;
};

export default GenericPage;
