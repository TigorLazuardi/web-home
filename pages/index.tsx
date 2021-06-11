import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SurfaceWrapper from '../components/SurfaceWrapper'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
        divider: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
        },
        subheader: { marginTop: theme.spacing(8) },
    })
)

export default function Home() {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <SurfaceWrapper>
            <div className={classes.toolbar} />
            <Container component="main">
                <section>
                    <Typography variant="h4">
                        Welcome to My Humble Abode!
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography
                        paragraph
                        style={{ marginTop: theme.spacing(2) }}
                    >
                        This site is a showcase of my personal projects while
                        also doubles as monitoring / administration tools from
                        remote. The first section in the sidebar is public,
                        meaning anyone can access, while the second section is
                        private, requiring authentications to enter.
                    </Typography>
                </section>

                <section>
                    <Typography
                        variant="h4"
                        style={{ marginTop: theme.spacing(7) }}
                    >
                        About Me
                    </Typography>
                    <Divider className={classes.divider} />
                </section>
            </Container>
        </SurfaceWrapper>
    )
}
