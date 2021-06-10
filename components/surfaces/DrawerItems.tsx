import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListemItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import HomeIcon from 'mdi-material-ui/Home'
import PowerPlugIcon from 'mdi-material-ui/PowerPlug'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
    })
)

const DrawerItems = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.toolbar}>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListemItemText>Home</ListemItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PowerPlugIcon />
                        </ListItemIcon>
                        <ListemItemText>Health Check</ListemItemText>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default DrawerItems
