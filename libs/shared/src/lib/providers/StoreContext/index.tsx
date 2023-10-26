import React, { useCallback, useMemo, useReducer } from 'react';
import { reducer } from './reducer';
import { actionTypes } from './constants';
import {
  NotificationEventType,
  NotificationSeverityType,
  NotificationType,
} from '@am/types';

export type StoreType = {
  notifications: NotificationType[];
};

export type StoreContextType = {
  store: StoreType;
  actions: {
    pushNotification: (
      type: NotificationEventType,
      severity?: NotificationSeverityType,
      customMessage?: string
    ) => void;
  };
};

export const StoreContext = React.createContext<
  StoreContextType | Record<string, never>
>({});

const initialState = {
  product: null,
  notifications: [],
};

export type StoreProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = (props: StoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const pushNotification = useCallback(
    (
      type: NotificationEventType,
      severity?: NotificationSeverityType,
      customMessage?: string
    ) => {
      dispatch({
        type: actionTypes.PUSH_NOTIFICATION,
        payload: { type, severity, customMessage },
      });
    },
    []
  );

  const actions = useMemo(() => ({ pushNotification }), [pushNotification]);

  const value = useMemo(() => ({ store: state, actions }), [state, actions]);

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};
