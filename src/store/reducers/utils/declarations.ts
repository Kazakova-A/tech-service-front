import { Color } from '@material-ui/lab/Alert';

export interface UtilsState {
  notification: NotificationState;
}

export interface NotificationState {
  text: string;
  type: Color;
  isOpen: boolean;
}
