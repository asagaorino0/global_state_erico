import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cardtodo from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: 300,
        border: '1px solid #ccc',
        margin: '3px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SmileCard({ user }) {
    const classes = useStyles();

    return (
        <Cardtodo className={classes.root}>
            <CardContent>
                <input type="checkbox" id={user.id} name={user.name}></input>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    ID : {user.id}
                </Typography>
                <Typography variant="h5" component="h2">
                    Name : {user.name}
                </Typography>
                <Typography variant="body2" component="p">
                    email : {user.email}
                </Typography>
                <Typography variant="body2" component="p">
                    body : {user.body}
                </Typography>
            </CardContent>
        </Cardtodo>

    );
}