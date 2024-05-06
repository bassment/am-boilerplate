import { ReactNode } from 'react';

export type AuthPageType = 'signin' | 'signup';
export type LandingsPageType = 'home' | 'details';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionType = { type: string; payload?: Record<string, any> };

export type CommunicationEventType =
  | 'AUTH_PAGE_TYPE_CHANGE'
  | 'LANDINGS_PAGE_TYPE_CHANGE'
  | 'NOTIFICATION_PUSH';

export type LandingsErrorCodeType = 'UNKNOWN' | 'UNAUTHORIZED';

export type StateInspectorProps = {
  name?: string;
  children?: ReactNode;
};

export type MFPortType = '4201' | '4202' | '4203';

export type NotificationEventType = 'PASSWORD_CHANGED';

export type NotificationSeverityType = 'success' | 'info' | 'warning' | 'error';

export type NotificationType = {
  type: NotificationEventType;
  severity?: NotificationSeverityType;
  message?: string;
  shown: boolean;
};
