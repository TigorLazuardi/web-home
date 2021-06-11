import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ArchiveArrowDown from 'mdi-material-ui/ArchiveArrowDown'
import DockerIcon from 'mdi-material-ui/Docker'
import HomeIcon from 'mdi-material-ui/Home'
import PowerPlugIcon from 'mdi-material-ui/PowerPlug'
import RaspberryPI from 'mdi-material-ui/RaspberryPi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({ toolbar: theme.mixins.toolbar })
)

const DrawerItems: React.FC = () => {
    const classes = useStyles()
    const router = useRouter()
    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <Link href="/" passHref>
                    <ListItem
                        component="li"
                        button
                        selected={router.pathname === '/'}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>
                <Link href="/health-check" passHref>
                    <ListItem
                        button
                        selected={router.pathname === '/health-check'}
                    >
                        <ListItemIcon>
                            <PowerPlugIcon />
                        </ListItemIcon>
                        <ListItemText>Health Check</ListItemText>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link href="/docker" passHref>
                    <ListItem button selected={router.pathname === '/docker'}>
                        <ListItemIcon>
                            <DockerIcon />
                        </ListItemIcon>
                        <ListItemText>Docker</ListItemText>
                    </ListItem>
                </Link>
                <Link href="/torrent" passHref>
                    <ListItem button selected={router.pathname === '/torrent'}>
                        <ListItemIcon>
                            <ArchiveArrowDown />
                        </ListItemIcon>
                        <ListItemText>Torrent</ListItemText>
                    </ListItem>
                </Link>
                <Link href="/pihole" passHref>
                    <ListItem button selected={router.pathname === '/pihole'}>
                        <ListItemIcon>
                            <RaspberryPI />
                        </ListItemIcon>
                        <ListItemText>PiHole</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </div>
    )
}

export default DrawerItems
