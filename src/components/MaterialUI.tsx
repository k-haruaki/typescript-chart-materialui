import React from 'react';
import { Button, makeStyles, Typography, Grid, Paper }from '@material-ui/core';

const useStyles = makeStyles({
    btnStyle: {
        background: 'green',
        padding: '3px 50px',
    },
    typoStyle: {
        color: 'blue',
    },
    paperStyle: {
        background: 'orange',
        height: '50px'
    }
})

const MaterialUI: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography 
                className={classes.typoStyle}
                variant='h1'
                color='secondary'
                align='left'
                gutterBottom
                noWrap
            >
                Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI
            </Typography>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paperStyle}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paperStyle}>xs=6</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paperStyle}>xs=6</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>
            </Grid>

            <Button className={classes.btnStyle} variant='contained' color='primary'>
                Test Button
            </Button>

            <Grid
                container
                spacing={1}
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
            >
                <Grid item xs={1}>
                    <Paper className={classes.paperStyle}>xs=1</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paperStyle}>xs=1</Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper className={classes.paperStyle}>xs=1</Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3} direction='column'>
                <Grid item xs={12} container>
                    <Grid item xs={2}>Demo</Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={2}>Test</Grid>
                </Grid>
                <Grid item xs={12} container justify='space-around'>
                    <Grid item xs={3}>
                        ブラウザでチュートリアルを進めている場合、このスターターコードを新しいタブで開いてください。ローカルでチュートリアルを進めている場合は、代わりにプロジェクトフォルダにある src/index.js を開いてください（セットアップ時にこのファイルを既に触ったはずです）。
                    </Grid>
                    <Grid item xs={3}>
                        ブラウザでチュートリアルを進めている場合、このスターターコードを新しいタブで開いてください。ローカルでチュートリアルを進めている場合は、代わりにプロジェクトフォルダにある src/index.js を開いてください（セットアップ時にこのファイルを既に触ったはずです）。
                    </Grid>
                    <Grid item xs={3}>
                        ブラウザでチュートリアルを進めている場合、このスターターコードを新しいタブで開いてください。ローカルでチュートリアルを進めている場合は、代わりにプロジェクトフォルダにある src/index.js を開いてください（セットアップ時にこのファイルを既に触ったはずです）。
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MaterialUI
