import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ArchiveArrowDown from 'mdi-material-ui/ArchiveArrowDown'
import BriefcaseIcon from 'mdi-material-ui/Briefcase'
import DockerIcon from 'mdi-material-ui/Docker'
import HomeIcon from 'mdi-material-ui/Home'
import HomeAutomation from 'mdi-material-ui/HomeAutomation'
import PowerPlugIcon from 'mdi-material-ui/PowerPlug'
import RaspberryPI from 'mdi-material-ui/RaspberryPi'
import Link, { LinkProps } from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({ toolbar: theme.mixins.toolbar })
)

const publicItemList = (router: NextRouter): ItemListProp[] => [
    {
        href: '/web',
        text: 'home',
        itemIcon: <HomeIcon />,
        selected: router.pathname === '/',
    },
    {
        href: '/web/health-check',
        text: 'Health Check',
        itemIcon: <PowerPlugIcon />,
        selected: router.pathname === 'health-check',
    },
    {
        href: '/web/projects',
        text: 'Projects',
        itemIcon: <BriefcaseIcon />,
        selected: router.pathname.startsWith('/projects'),
    },
]

const privateItemList = (router: NextRouter): ItemListProp[] => [
    {
        href: '/web/docker',
        text: 'Docker',
        itemIcon: <DockerIcon />,
        selected: router.pathname === '/docker',
    },
    {
        href: '/web/torrent',
        text: 'Torrent',
        itemIcon: <ArchiveArrowDown />,
        selected: router.pathname === '/torrent',
    },
    {
        href: '/web/pihole',
        text: 'PiHole',
        itemIcon: <RaspberryPI />,
        selected: router.pathname === '/pihole',
    },
    {
        href: '/web/jenkins',
        text: 'Jenkins',
        itemIcon: <HomeAutomation />,
        selected: router.pathname === '/pihole',
    },
]

const DrawerItems: React.FC = () => {
    const classes = useStyles()
    const router = useRouter()
    const publicItems = publicItemList(router)
    const privateItems = privateItemList(router)
    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {publicItems.map((v) => (
                    <ItemList key={v.href.toString()} {...v} />
                ))}
            </List>
            <Divider />
            <List>
                {privateItems.map((v) => (
                    <ItemList key={v.href.toString()} {...v} />
                ))}
            </List>
        </div>
    )
}

interface ItemListProp extends ListItemProps, LinkProps {
    itemIcon: React.ReactElement
    text: string
}

function ItemList(props: ItemListProp) {
    return (
        <Link href={props.href} passHref>
            <ListItem button component="li" selected={props.selected}>
                <ListItemIcon>{props.itemIcon}</ListItemIcon>
                <ListItemText>{props.text}</ListItemText>
            </ListItem>
        </Link>
    )
}

export default DrawerItems
