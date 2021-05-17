import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useStaticState } from '@material-ui/pickers';
import React, { useState } from 'react';
import ResponsiveDialog from '../UI/ResponsiveDialog';

const AddReviewDialog = ({ handleSubmit, handleClose, show = true }) => {
  const [review, setReview] = useState();
  const handleChange = (event) => {
    setReview(event.target.value);
  };

  return (
    <ResponsiveDialog open={show}>
      <DialogTitle>Add review</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField onChange={handleChange} value={review} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit.bind(this, review)}
          color="primary"
          autoFocus
        >
          Submit
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
};

export default AddReviewDialog;
