import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid, { GridProps } from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
import getAge from '../../actions/age'

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
    })
)

interface Props {
    sectionClass?: string
    typographyClass?: string
    dividerClass?: string
}

function AboutMe(props: Props) {
    const classes = useStyles()
    return (
        <section className={props.sectionClass}>
            <Typography variant="h4">About Me</Typography>
            <Divider className={props.dividerClass} />
            <Paper elevation={6} className={classes.paperPadding}>
                <Container className={classes.flexGrower}>
                    <Grid container spacing={10}>
                        <GridPhotograph item xs={12} sm={4} />
                        <GridInformation item xs={12} sm={8} />
                    </Grid>
                </Container>
            </Paper>
        </section>
    )
}

function GridPhotograph(props: GridProps) {
    return (
        <Grid
            {...props}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}
        >
            <img
                src="https://via.placeholder.com/300x400"
                alt="placeholder"
                // follow parent size
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    objectFit: 'contain',
                }}
            />
        </Grid>
    )
}

const visionText =
    'To be an aspiring engineer that can bring values and life improvements to me and others around me'

function GridInformation(props: GridProps) {
    return (
        <Grid {...props}>
            <Grid container spacing={3}>
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Name"
                    value="Tigor Hutasuhut"
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={8}
                    header="Vision"
                    value={visionText}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Age"
                    value={`${getAge()} Years Old`}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Job"
                    value="Software Engineer"
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Preferred Development"
                    value="Backend"
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Language Mastery (In Order)"
                    value={<LanguageMasteryList />}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Favorite Language"
                    value="Rust"
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Favorite Paradigm"
                    value="Polymorphism"
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Tech Stack"
                    value={<StackList />}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Field Mastery Interest"
                    value={<StackList />}
                />
            </Grid>
        </Grid>
    )
}

function LanguageMasteryList() {
    return (
        <Typography>
            Golang <br />
            NodeJS / Typescript <br />
            Rust <br />
            Bash
        </Typography>
    )
}

function FieldMasteryInterest() {
    return (
        <Typography>
            Network / Proxy <br />
            Security <br />
            System (IoT) <br />
            Machine Learning <br />
        </Typography>
    )
}

function StackList() {
    return (
        <Typography>
            Elastic <br />
            Vault <br />
            Kafka <br />
            Docker <br />
            Docker Compose <br />
        </Typography>
    )
}

interface GridInfoItemsProps extends GridProps {
    header?: string
    value?: string | React.ReactElement
}

function GridInfoItems(props: GridInfoItemsProps) {
    const classes = useStyles()
    const theme = useTheme()
    const isPhoneSized = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid item {...props}>
            <Typography className={classes.textBold}>{props.header}</Typography>
            <Divider className={classes.divider} />
            <Typography align={isPhoneSized ? 'justify' : 'left'}>
                {props.value}
            </Typography>
        </Grid>
    )
}

export default AboutMe
