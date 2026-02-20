import { createContext, useCallback, useEffect, useRef } from "react";
import { SnackbarProvider } from "notistack";
import { io } from "socket.io-client";
import type NotificationMessage from "../../types/NotificationMessage";

type newListener = (data: NotificationMessage) => void;

interface NotificationContextProps {
  addListener: (listener: newListener) => () => void;
}
interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationContext =
  createContext<NotificationContextProps | null>(null);
const wssUrl = import.meta.env.VITE_BASE_WSS_URL + "notifications";

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const listeners = useRef<((data: NotificationMessage) => void)[]>([]);

  const addNewListener = useCallback((listener: newListener) => {
    listeners.current.push(listener);
    return () => {
      listeners.current = listeners.current.filter(
        (listenerItem) => listenerItem !== listener,
      );
    };
  }, []);

  useEffect(() => {
    const socket = io(wssUrl, {
      transports: ["websocket"],
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 1000,
    });
    socket.on("newPost", (data: NotificationMessage) => {
      listeners.current.forEach((listener) => {
        listener(data);
      });
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <NotificationContext.Provider value={{ addListener: addNewListener }}>
        {children}
      </NotificationContext.Provider>
    </SnackbarProvider>
  );
};

export default NotificationProvider;
