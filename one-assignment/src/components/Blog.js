import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { format } from 'date-fns';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    secGrid: {
        border: '1px dashed black'
    },
    secItem: {
        margin: 5
    }
}))

export function Blog(props) {
    const classes = useStyles();
    const { id } = useParams();
    const selectedBlog = props.data.find(data => data.id === Number(id));
    let blogData;

    if (selectedBlog) {
        blogData = (
            <div className={classes.root}>
                <Grid container direction="column" xs={9}>
                    <Grid item>
                        <Typography variant="h3">{selectedBlog.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">{`by ${selectedBlog.author} on ${format(new Date(selectedBlog.published), 'EEE MMM dd yyyy')}`}</Typography>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent dangerouslySetInnerHTML={{
                                __html: selectedBlog.body
                            }}>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container direction="column" xs={3} className={classes.secGrid}>
                    <Grid item>
                        <Typography variant="h5">Related Posts</Typography>
                    </Grid>
                    {
                        props.data
                        .filter(data => data.id !== Number(id))
                        .map(post => (
                            <Grid item className={classes.secItem}>
                                <Typography variant="h4">{post.title}</Typography>
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </div>
        )
    } else {
        blogData =  <Typography variant="h3">No Blog Exist</Typography>
    }

    return (
        <>
            {blogData}
        </>
    )
}

export default Blog;