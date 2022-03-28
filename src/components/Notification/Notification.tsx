import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from '@mui/material';

import { RootState } from 'store/reducers';
import { UtilsActions } from 'store/actions/utils';

import styles from './Notification.module.scss';

function Notification(): JSX.Element {
  const dispatch = useDispatch();

  const {
    isOpen,
    text,
    type,
  } = useSelector((state: RootState) => state.utils.notification);

  const onClose = () => {
    dispatch(UtilsActions.closeNotification());
    setTimeout(() => dispatch(UtilsActions.clearNotification()), 200);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(UtilsActions.closeNotification());
        dispatch(UtilsActions.clearNotification());
      }, 5000);
    }
  }, [dispatch, isOpen]);

  return (
    <div>
      {isOpen && (
      <Alert severity={type} onClose={onClose} className={styles.notification}>
        {text}
      </Alert>
      )}
    </div>
  );
}

export default memo(Notification);
