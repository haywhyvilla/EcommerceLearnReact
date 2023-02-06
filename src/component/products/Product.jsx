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

const Product = () => {
  return (
    <card className={classes.root}>
      <CardMedia className={classes.media} image="" title={Product.name} />
    </card>
  );
};

export default Product;
