import { makeStyles, Theme } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import React from 'react'
import AppBar from './surfaces/AppBar'
import DrawerItems from './surfaces/DrawerItems'

const stylesWithDrawerWidth = (drawerWidth: number) =>
    makeStyles((theme: Theme) => ({
        root: {
            display: 'flex',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            [theme.breakpoints.up('md')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        drawer: {
            [theme.breakpoints.up('md')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: { width: drawerWidth },
    }))

interface Props {
    drawerWidth?: number
}

const SurfaceWrapper: React.FC<Props> = ({ children, drawerWidth }) => {
    const classes = stylesWithDrawerWidth(drawerWidth || 240)()
    const [mobileOpen, setMobileOpen] = React.useState(false)
    return (
        <div className={classes.root}>
            <AppBar
                drawerWidth={drawerWidth}
                menuOnClick={() => {
                    console.log('running')
                    setMobileOpen(!mobileOpen)
                }}
            />
            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(!mobileOpen)}
                    classes={{ paper: classes.drawerPaper }}
                    ModalProps={{ keepMounted: true }}
                >
                    <DrawerItems />
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="js">
                <Drawer
                    classes={{ paper: classes.drawerPaper }}
                    variant="permanent"
                    open={true}
                >
                    <DrawerItems />
                </Drawer>
            </Hidden>
            <div>{children}</div>
        </div>
    )
}

export default SurfaceWrapper
