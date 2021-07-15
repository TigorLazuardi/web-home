import React from 'react'
import Grid from '@material-ui/core/Grid'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paperPadding: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(4),
        },
        flexGrower: {
            flexGrow: 1,
        },
        textBold: {
            fontWeight: 'bold',
        },
        divider: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        workLi: {
            marginTop: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 0,
                paddingRight: 0,
                marginLeft: 0,
                marginRight: 0,
            },
        },
        ul: {
            [theme.breakpoints.down('sm')]: {
                paddingLeft: theme.spacing(2),
                paddingRight: 0,
                marginLeft: 0,
                marginRight: 0,
            },
        },
        panelHeading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        panelSecondary: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        sectionGap: {
            marginBottom: theme.spacing(2),
        },
    }),
)

interface HealthCheck {
    [key: string]: {
        message: string
        status: string
        code: number
    }
}

const testingValues: HealthCheck = {
    mongodb: {
        message: 'ok',
        status: 'healthy',
        code: 200,
    },
    jenkins: {
        message: 'ok',
        status: 'healthy',
        code: 200,
    },
}

export default function WIP() {
    return (
        <div>
            <Container>
                <Grid container>
                    {Object.keys(testingValues).map((key) => (
                        <Grid item xs={12} key={key}>
                            {key} = {JSON.stringify(testingValues[key])}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
