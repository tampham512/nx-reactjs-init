import type { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import { useMessageHook } from '.';

const MessageContext = createContext<any>(null as unknown as any);
MessageContext.displayName = 'MessageContext';

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('Please add Provider MessageContext!!!');
  }

  return context;
};

export const MessageProvider = ({ children }: PropsWithChildren) => {
  const value = useMessageHook();

  return (
    <MessageContext.Provider value={value}>
      {value.contextHolder}
      {children}
    </MessageContext.Provider>
  );
};
