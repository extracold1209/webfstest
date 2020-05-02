import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {createStyles, Theme} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Header from "../templates/Header";

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

const BrowsePage: React.FC = () => {
    return (
        <>
            <Header/>
            <Container>
                안녕 여기는 브라우즈 컨테이너야
            </Container>
        </>
    )
}

export default BrowsePage;
