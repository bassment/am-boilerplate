import HomePage from '../HomePage';
import DetailsPage from '../DetailsPage';
import { LandingsPageType } from '@am/types';
import { Typography } from '@am/design-system';

export interface LandingsRoutesProps {
  type: LandingsPageType | undefined;
  testData?: string;
}

export function LandingsRoutes({ type, testData }: LandingsRoutesProps) {
  return (
    <>
      {type === 'home' && <HomePage />}
      {type === 'details' && <DetailsPage />}
      <Typography variant="h4">Backend Data: {testData}</Typography>
    </>
  );
}

export default LandingsRoutes;
