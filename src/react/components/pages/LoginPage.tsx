import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {sayHello} from "../../store/modules/helloReducer";
import Input from "@material-ui/core/Input";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);


const LoginPage = () => {
    const dispatch = useDispatch();
    const onSubmit = useCallback(() => {
        sayHello(dispatch)();
    }, [])

    return (
        <Container maxWidth="sm">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs>
                    <TextField label="ID"/>
                </Grid>
                <Grid item xs>
                    <TextField label="PW"/>
                </Grid>
                <Grid item xs>
                    <Button
                        variant="contained"
                        color="primary"
                        size={'small'}
                        onClick={onSubmit}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
};

export default LoginPage;
