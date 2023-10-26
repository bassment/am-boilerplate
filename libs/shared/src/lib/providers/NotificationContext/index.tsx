import React, { useCallback, useMemo } from 'react';
import { NotificationEventType, NotificationSeverityType } from '@am/types';
import { useStore } from '../../hooks';

export interface NotificationContextProps {
  actions: {
    push: (
      type: NotificationEventType,
      severity?: NotificationSeverityType,
      customMessage?: string
    ) => void;
  };
}

export interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationContext = React.createContext<
  NotificationContextProps | undefined
>(undefined);

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const { actions: storeActions } = useStore();

  const push = useCallback(
    (
      type: NotificationEventType,
      severity?: NotificationSeverityType,
      customMessage?: string
    ) => {
      storeActions.pushNotification(type, severity, customMessage);
    },
    [storeActions]
  );

  const actions = useMemo(() => ({ push }), [push]);

  const value = useMemo(() => ({ actions }), [actions]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
