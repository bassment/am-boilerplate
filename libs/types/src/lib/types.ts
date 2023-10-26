import { ReactNode } from 'react';

export type AuthPageType = 'signin' | 'signup';
export type GenericPageType = 'home' | 'details';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionType = { type: string; payload?: Record<string, any> };

export type CommunicationEventType =
  | 'AUTH_PAGE_TYPE_CHANGE'
  | 'GENERIC_PAGE_TYPE_CHANGE'
  | 'NOTIFICATION_PUSH';

export type GenericErrorCodeType = 'UNKNOWN' | 'UNAUTHORIZED';

export type StateInspectorProps = {
  name?: string;
  children?: ReactNode;
};

export type MFPortType = '4201' | '4202' | '4203';

export type NotificationEventType =
  | 'ASSISTANT_STATUS_CHANGED'
  | 'SUBSCIPTION_CANCELLED'
  | 'PASSWORD_CHANGED'
  | 'USER_DELETED'
  | 'REQUIRES_RECENT_LOGIN_TO_DELETED_ACCOUNT'
  | 'EMAIL_VERIFICATION_SUCCESS'
  | 'EMAIL_VERIFICATION_ERROR';

export type NotificationSeverityType = 'success' | 'info' | 'warning' | 'error';

export type NotificationType = {
  type: NotificationEventType;
  severity?: NotificationSeverityType;
  message?: string;
  shown: boolean;
};
