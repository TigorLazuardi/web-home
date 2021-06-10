import MUIAppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from 'mdi-material-ui/Menu'
import { useRouter } from 'next/router'
import React from 'react'
import { titleCase } from 'title-case'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

interface Props {
    menuOnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function AppBar(props: Props) {
    const classes = useStyles()
    const router = useRouter()

    return (
        <div className={classes.root}>
            <MUIAppBar position="static">
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
                        {router.pathname === '/'
                            ? 'Home'
                            : canonicalize(router.pathname)}
                    </Typography>
                </Toolbar>
            </MUIAppBar>
        </div>
    )
}

function canonicalize(s: string): string {
    s = s.split('/')[1].replaceAll('-', ' ')
    return titleCase(s)
}
