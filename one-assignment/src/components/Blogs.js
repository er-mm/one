import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import { Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        height: 250,
        backgroundColor: "#ededed"
    },
    link: {
        textDecoration: 'none'
    }
}))

export function Blogs({setData, data}) {
    const classes = useStyles();
    useEffect(()=>{
        fetch('http://localhost:3001/posts')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);

    return (
        <>
        <Grid container direction="row" spacing={4}>
        {
            data.map(blog => (
                <Grid item key={blog.id}>
                        <Link to={`/${blog.id}`} className={classes.link}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3">{blog.title}</Typography>
                                <Typography variant="h4">{blog.summary}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))
        }
        </Grid>
        </>
    )
}

export default Blogs;