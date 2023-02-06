import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconBotton,
} from "@material-ui/core";
import { AddShoppingCart } from "material-ui/icons";
import { IconButton } from "@mui/material";

import useStyles from "./styles";

const Product = ({ product }) => {
  return (
    <card className={classes.root}>
      <CardMedia className={classes.media} image="" title={Product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {Product.name}
          </Typography>
          <Typography variant="h5">{Product.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {Product.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </card>
  );
};

export default Product;
