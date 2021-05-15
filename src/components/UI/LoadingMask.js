import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import reactDom from 'react-dom';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const LoadingMask = ({ show }) => {
  const classes = useStyles();

  if (!show) {
    return null;
  }

  return (
    <>
      {reactDom.createPortal(
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>,
        document.getElementById('loading-mask-root')
      )}
    </>
  );
};

export default LoadingMask;
