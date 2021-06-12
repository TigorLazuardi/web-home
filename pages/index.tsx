import Container from '@material-ui/core/Container'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AboutMe from '../components/home/AboutMe'
import HumbleAbode from '../components/home/HumbleAbode'
import SurfaceWrapper from '../components/SurfaceWrapper'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
        divider: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
        },
        header: { marginTop: theme.spacing(8) },
        paragraph: {
            marginTop: theme.spacing(2),
        },
    })
)

export default function Home() {
    const classes = useStyles()
    return (
        <SurfaceWrapper>
            <div className={classes.toolbar} />
            <Container component="main">
                <HumbleAbode
                    dividerClass={classes.divider}
                    typographyClass={classes.paragraph}
                />
                <AboutMe
                    sectionClass={classes.header}
                    dividerClass={classes.divider}
                    typographyClass={classes.paragraph}
                />
            </Container>
        </SurfaceWrapper>
    )
}
