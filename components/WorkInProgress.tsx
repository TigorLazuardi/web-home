import React from 'react'
import Grid from '@material-ui/core/Grid'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import grey from '@material-ui/core/colors/grey'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        centeringContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        distanceFromTop: {
            marginTop: theme.spacing(3),
        },
        circleContainer: {
            border: '2px solid black',
            borderRadius: '50%',
            height: 'auto',
            width: '100%',
        },
    })
)

function CircularProgressWithLabel(props: CircularProgressProps & { label: string }) {
    return (
        <Box position="relative" display="inline-flex" height="44vw" width="44vw">
            <CircularProgress
                variant="static"
                {...props}
                style={{ height: '44vw', width: '44vw', color: grey[400] }}
                value={100}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="h2" component="div" style={{ fontSize: '3.5vw', color: grey[400] }}>
                    {props.label}
                </Typography>
            </Box>
        </Box>
    )
}

export default function WIP() {
    const classes = useStyles()
    return (
        <Container>
            <Grid container justify="center" alignContent="center">
                <Grid item xs={12} className={classes.centeringContainer}>
                    <CircularProgressWithLabel label="Work In Progress"></CircularProgressWithLabel>
                </Grid>
            </Grid>
        </Container>
    )
}
