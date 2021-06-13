import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid, { GridProps } from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ExpandMore from 'mdi-material-ui/ChevronDown'
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
    })
)
interface Props {
    sectionClass?: string
    typographyClass?: string
    dividerClass?: string
    birthdate: string
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
                        <GridInformation
                            item
                            xs={12}
                            sm={8}
                            birthdate={props.birthdate}
                        />
                    </Grid>
                </Container>
            </Paper>
        </section>
    )
}

export default AboutMe

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

interface GridPropsWithBirthDate extends GridProps {
    birthdate: string
}

const visionText =
    'To be an aspiring engineer that bring values and life improvements to me and others around'

function GridInformation(props: GridPropsWithBirthDate) {
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
                    lg={4}
                    header="Age"
                    value={`${getAge(props.birthdate)} Years Old`}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    lg={8}
                    header="Education"
                    value={<EducationList />}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={4}
                    header="Job"
                    value="Backend Software Engineer"
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={8}
                    header="Job Desc"
                    value={<JobDesc />}
                />
                <GridInfoItems
                    xs={12}
                    header="Work Experience"
                    value={<WorkList />}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    lg={4}
                    header="Preferred Development"
                    value="Backend"
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    lg={4}
                    header="Language Mastery"
                    value={<LanguageMasteryList />}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    lg={4}
                    header="Favorite Language"
                    value="Rust"
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    lg={4}
                    header="Tech Stack"
                    value={<StackList />}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    lg={4}
                    header="Field Mastery Interest"
                    value={<FieldMasteryInterest />}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    lg={4}
                    header="Hobby"
                    value="Managing Home Server"
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

function WorkList() {
    const classes = useStyles()
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="bareksa"
                id="panel-bareksa"
            >
                <Hidden smDown>
                    <Typography className={classes.panelHeading}>
                        PT Bareksa Portal Investasi
                    </Typography>
                    <Typography className={classes.panelSecondary}>
                        2019 - Present
                    </Typography>
                </Hidden>
                <Hidden mdUp>
                    <Typography style={{ textAlign: 'start' }}>
                        <b>2019 - Present</b> <br />
                        PT Bareksa Portal Investasi
                    </Typography>
                </Hidden>
            </AccordionSummary>
            <AccordionDetails>
                <ul className={classes.ul}>
                    <li className={classes.workLi}>
                        <Typography>
                            Creating services that are needed for business. Like
                            HTTP REST API, Consumers and Producers for real time
                            data synchronization, etc.
                        </Typography>
                    </li>
                    <ul className={classes.ul}>
                        <li className={classes.workLi}>
                            <Typography>
                                Create a service to integrate Bareksa with
                                Indogold and Pegadaian to offer Gold products in
                                Bareksa.
                            </Typography>
                        </li>
                        <li className={classes.workLi}>
                            <Typography>
                                Create a service to integrate Bareksa with
                                Kemenkeu so Bareksa can offer SBN products.
                            </Typography>
                        </li>
                        <li className={classes.workLi}>
                            <Typography>
                                Create a service to do a database migration
                                without downtime or fear of database failure.
                            </Typography>
                        </li>
                        <li className={classes.workLi}>
                            <Typography>
                                Create a Front End and Back End service
                                interface so users (developers) can easily
                                access a security stack and its benefits without
                                needing a human to supervise.
                            </Typography>
                        </li>
                        <li className={classes.workLi}>
                            <Typography>
                                Create libraries to interface new stack so other
                                users (developers) only needs to write few lines
                                of code instead of opening documentation of the
                                stack, giving more time to create business
                                products.
                            </Typography>
                        </li>
                        <li className={classes.workLi}>
                            <Typography>
                                Assists DevOps in deploying tech stacks and
                                gives advice and warnings about how the stacks
                                work to ensure reliability in production.
                            </Typography>
                        </li>
                    </ul>
                    <li className={classes.workLi}>
                        <Typography>
                            Explore potential new technology stacks and create
                            designs and proposals for integrating tech stack to
                            current stack.
                        </Typography>
                    </li>
                    <li className={classes.workLi}>
                        <Typography>
                            Creating libraries for common use and interfacing
                            across the division.
                        </Typography>
                    </li>
                    <li className={classes.workLi}>
                        <Typography>
                            Creating services for internal ease-of-use and
                            security like REST API wrapper for Redis, token
                            management for development, etc.
                        </Typography>
                    </li>
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}

function EducationList() {
    return (
        <Typography>
            <b>2012 - 2018</b> <br />
            University of Indonesia - Major in Management <br />
            <br />
            <b>2019 June - Oct</b> <br />
            Hacktiv8 Full Javascript Course
        </Typography>
    )
}

function JobDesc() {
    return (
        <Typography>
            Create Backend Microservices using REST API and Miscellaneous
            Background Jobs to support Bareksa Business
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
