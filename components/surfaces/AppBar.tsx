import MUIAppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from 'mdi-material-ui/Menu'
import { useRouter } from 'next/router'
import React from 'react'
import { titleCase } from 'title-case'

const stylesWithDrawerWidth = (width: number) =>
    makeStyles((theme: Theme) =>
        createStyles({
            menuButton: {
                marginRight: theme.spacing(2),
                [theme.breakpoints.up('md')]: {
                    display: 'none',
                },
            },
            title: {
                flexGrow: 1,
            },
            appBar: {
                [theme.breakpoints.up('md')]: {
                    width: `calc(100% - ${width}px)`,
                    marginLeft: width,
                },
            },
        })
    )

interface Props {
    menuOnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    drawerWidth?: number
}

export default function AppBar(props: Props) {
    const classes = stylesWithDrawerWidth(props.drawerWidth || 240)()
    const router = useRouter()

    return (
        <MUIAppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={(e) => props.menuOnClick?.(e)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {canonicalize(router.pathname)}
                </Typography>
            </Toolbar>
        </MUIAppBar>
    )
}

function canonicalize(s: string): string {
    s = s.split('/')[1]?.replaceAll('-', ' ') || 'home'
    return titleCase(s)
}
