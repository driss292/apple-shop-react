import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia
                image={item.image.url}
                alt={item.name}
                className={classes.media}
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">
                    {item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button
                        type="buton"
                        size="small"
                        onClick={() =>
                            onUpdateCartQuantity(item.id, item.quantity - 1)
                        }
                    >
                        -
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button
                        type="buton"
                        size="small"
                        onClick={() =>
                            onUpdateCartQuantity(item.id, item.quantity + 1)
                        }
                    >
                        +
                    </Button>
                </div>
                <Button
                    variant="contained"
                    type="button"
                    color="secondary"
                    onClick={() => onRemoveFromCart(item.id)}
                >
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;
