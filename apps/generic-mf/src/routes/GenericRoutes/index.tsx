import HomePage from '../HomePage';
import DetailsPage from '../DetailsPage';
import { GenericPageType } from '@am/types';
import { Typography } from '@am/design-system';

export interface GenericRoutesProps {
  type: GenericPageType | undefined;
  testData?: string;
}

export function GenericRoutes({ type, testData }: GenericRoutesProps) {
  return (
    <>
      {type === 'home' && <HomePage />}
      {type === 'details' && <DetailsPage />}
      <Typography variant="h4">Backend Data: {testData}</Typography>
    </>
  );
}

export default GenericRoutes;
