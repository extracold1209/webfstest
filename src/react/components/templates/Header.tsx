import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginBottom: theme.spacing(2)
        },
        card: {
            display: 'flex',
            alignItems: 'center',
            minHeight: 42,
            padding: theme.spacing(1)
        }
    }),
);

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Card className={classes.card}>
                안녕 난 헤더라고 해
            </Card>
        </Box>
    )
}

export default Header;
