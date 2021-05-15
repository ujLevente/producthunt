import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';

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
}));

const ProductItem = ({ productName, description, activeDate }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{productName}</Typography>
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
        <Button size="small" color="primary">
          Add review
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
