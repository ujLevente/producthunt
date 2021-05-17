import { Dialog, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useState } from 'react';

const ResponsiveDialog = ({ open, children }) => {
  console.log(open);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    // portalt kéne hazsnálni
    <Dialog fullScreen={fullScreen} open={open}>
      {children}
    </Dialog>
  );
};

export default ResponsiveDialog;
