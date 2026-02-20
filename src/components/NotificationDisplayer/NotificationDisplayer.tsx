import { useSnackbar } from "notistack";
import { NotificationContext } from "../../providers/NotificationProvider/NotificationProvider";
import { useContext, useEffect } from "react";
import type NotificationMessage from "../../types/NotificationMessage";
function NotificationDisplayer() {
  const { enqueueSnackbar } = useSnackbar();
  const { addListener } = useContext(NotificationContext)!;
  const getNotification = (data: NotificationMessage) => {
    enqueueSnackbar(`${data.user}: ${data.message}`);
  };
  useEffect(() => {
    const unsubscribe = addListener(getNotification);
    return () => {
      unsubscribe();
    };
  }, []);

  return <></>;
}

export default NotificationDisplayer;
