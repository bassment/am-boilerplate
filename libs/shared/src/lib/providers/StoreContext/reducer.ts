import { StoreType } from '.';
import { ActionType, NotificationEventType, NotificationType } from '@am/types';
import { actionTypes } from './constants';

const getNotificationMessageByType = (type: NotificationEventType) => {
  switch (type) {
    case 'ASSISTANT_STATUS_CHANGED':
      return 'Your assistant is now connected';
    case 'SUBSCIPTION_CANCELLED':
      return 'Your subscription is now cancelled';
    case 'PASSWORD_CHANGED':
      return 'Password was changed successfully';
    case 'USER_DELETED':
      return 'User was deleted successfully';
    case 'REQUIRES_RECENT_LOGIN_TO_DELETED_ACCOUNT':
      return 'Please re-login to delete your account';
    case 'EMAIL_VERIFICATION_ERROR':
      return 'Please try to verify your email again';
    case 'EMAIL_VERIFICATION_SUCCESS':
      return "You've successfully verified your email";

    default:
      return 'Default notification message';
  }
};

export const reducer = (state: StoreType, action: ActionType): StoreType => {
  switch (action.type) {
    case actionTypes.PUSH_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...(action.payload as NotificationType),
            severity: action.payload?.severity || 'info',
            message:
              action.payload?.customMessage ||
              getNotificationMessageByType(action.payload?.type),
          },
        ],
      };

    default:
      return state;
  }
};
