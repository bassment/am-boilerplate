import { StoreType } from '.';
import { ActionType, NotificationEventType, NotificationType } from '@am/types';
import { actionTypes } from './constants';

const getNotificationMessageByType = (type: NotificationEventType) => {
  switch (type) {
    case 'PASSWORD_CHANGED':
      return 'Password was changed successfully';

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
