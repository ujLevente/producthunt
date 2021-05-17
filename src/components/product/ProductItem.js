import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDialog from '../../hooks/use-dialog';
import AddReviewDialog from './AddReviewDialog';

const useStyles = makeStyles((theme) => ({
  productName: {
    fontWeight: 'normal',
    fontSize: '1.2rem',
  },
  date: {
    marginTop: 3,
    marginBottom: 14,
    color: '#6466d4',
  },
  editLink: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const ProductItem = ({
  id,
  productName,
  description,
  activeDate,
  handleDelete,
}) => {
  const classes = useStyles();
  const { isOpen, handleClose, handleOpen } = useDialog(false);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (text) => {
    setReviews((prevState) => {
      return [...reviews, text];
    });
    handleClose();
  };

  return (
    <Card>
      <AddReviewDialog
        show={isOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
      <CardContent>
        <Button onClick={handleDelete.bind(this, id)}>Delete</Button>
        <Typography
          variant="h5"
          component={Link}
          to={`/products/${id}`}
          color="textPrimary"
        >
          {productName}
        </Typography>
        <Typography
          className={classes.date}
          color="primary"
          gutterBottom
          variant="body2"
        >
          End of auction: {activeDate}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen} size="small" color="primary">
          Add review
        </Button>
        <Button
          className={classes.editLink}
          size="small"
          color="primary"
          component={Link}
          exact="true"
          to={`/edit-product/${id}`}
        >
          Edit
        </Button>
      </CardActions>
      {reviews.map((review) => {
        return <div key={review}>{review}</div>;
      })}
    </Card>
  );
};

export default ProductItem;
