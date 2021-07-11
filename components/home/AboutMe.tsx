import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
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
import GithubIcon from 'mdi-material-ui/Github'
import GitlabIcon from 'mdi-material-ui/Gitlab'
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
        sectionGap: {
            marginBottom: theme.spacing(2),
        },
    }),
)
interface Props {
    sectionClass?: string
    typographyClass?: string
    dividerClass?: string
    birthdate: string | null
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
    const theme = useTheme()
    return (
        <Grid {...props}>
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={3}
                style={{
                    position: 'sticky',
                    top: theme.spacing(12),
                }}
            >
                <Grid item xs={12}>
                    <Paper elevation={4} style={{ padding: theme.spacing(2) }}>
                        <img
                            src={process.env.NEXT_PUBLIC_PROFILE_PICTURE!}
                            alt="placeholder"
                            // follow parent size
                            style={{
                                width: '100%',
                                // maxWidth: '400px',
                                objectFit: 'contain',
                                borderRadius: '4px',
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <ButtonGroup>
                        <Button
                            startIcon={<GithubIcon />}
                            href="https://github.com/TigorLazuardi"
                            target="_blank"
                        >
                            Github
                        </Button>
                        <Button
                            endIcon={<GitlabIcon />}
                            href="https://gitlab.com/TigorLazuardi"
                            target="_blank"
                        >
                            Gitlab
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" style={{ fontStyle: 'italic' }}>
                        Programming Motto
                    </Typography>
                    <Typography
                        align="center"
                        style={{
                            fontStyle: 'italic',
                            marginTop: theme.spacing(2),
                        }}
                    >
                        Lazily initiate once per scope. Share the heap memory in
                        the same scope. Send messages when going out of scope.
                    </Typography>
                    <Typography
                        align="center"
                        style={{
                            fontStyle: 'italic',
                            marginTop: theme.spacing(2),
                        }}
                    >
                        When creating libraries, receive abstract value but
                        return concrete value.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

interface GridPropsWithBirthDate extends GridProps {
    birthdate: string | null
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
                    md={4}
                    header="Age"
                    value={`${getAge(props.birthdate)} Years Old`}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    md={8}
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
                    header={<LanguageMasteryHeader />}
                    value={<LanguageMasteryList />}
                />
                <GridInfoItems
                    xs={12}
                    sm={6}
                    lg={4}
                    header="Favorite Language"
                    value="Go"
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
                <GridInfoItems
                    xs={12}
                    header="Work Bio"
                    value={<Biography />}
                />
                <GridInfoItems
                    xs={12}
                    header="Hobby - Managing Home Server"
                    value={<FreeTime />}
                />
            </Grid>
        </Grid>
    )
}

function LanguageMasteryHeader() {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Typography
                className={classes.textBold}
                style={{ marginRight: theme.spacing(1) }}
            >
                Language Mastery
            </Typography>
            <Typography className={classes.textBold}>(in order)</Typography>
        </div>
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

function Biography() {
    const classes = useStyles()
    return (
        <article>
            <section id="main-job" className={classes.sectionGap}>
                <Typography>
                    I work at <b>PT Bareksa Portal Investasi</b> as Backend
                    Software Engineer. My main job is creating web applications
                    in Go, whether it's a REST api or not.{' '}
                </Typography>
            </section>
            <section id="database" className={classes.sectionGap}>
                <Typography>
                    Most often database I "talked with" is <b>Postgres </b>{' '}
                    because of it's <b>ACID</b> properties, and with{' '}
                    <b>MongoDB </b> for for miscellaneous purposes and where too
                    much effort is needed to create sql table for it (Like
                    Request / Response Auditing where fields are dynamic). For
                    searching datas, I used <b>Elastic Search </b> for it's
                    powerful search and pagination engine. The most often
                    dynamic between them is <b>Postgres</b> being the main
                    database while maintaining <b>Elastic Search</b>{' '}
                    synchronized with <b>Postgres</b>. <b>MongoDB</b> is like
                    the friend that doesn't talk much but gets along well with
                    the rest of the group and worked on the background.
                </Typography>
            </section>
            <section id="side-job" className={classes.sectionGap}>
                <Typography>
                    if it's not REST api project, project I usually made is{' '}
                    <span className={classes.textBold}>cron jobs </span>
                    (written in go) and{' '}
                    <span className={classes.textBold}>
                        WebSocket consumer/producer{' '}
                    </span>{' '}
                    like Kafka to produce real time data changes between
                    services. Or some very niche{' '}
                    <span className={classes.textBold}>observer </span> app to
                    send time sensitive data around.{' '}
                </Typography>
            </section>
            <section id="tech-integration" className={classes.sectionGap}>
                <Typography>
                    I also do tech integration and create interface for other
                    engineers to easily adopt. <b>Vault</b>, while cool as
                    secret management, requires a dedicated SysAdmin to manage
                    if we left it by default. It seems like a waste of human
                    resources just to manage that alone, and humans are not up
                    24 hours. So a web GUI using{' '}
                    <span className={classes.textBold}>React </span>is created
                    (along the backend for another layer of auth and to audit
                    everything) to ease creating credentials. A client library
                    for vault is custom made so application can easily use those
                    credentials and gain the secrets in 3 lines.
                </Typography>
            </section>
            <section id="on-free-time" className={classes.sectionGap}>
                <Typography>
                    On my free time, I made libraries to standardize{' '}
                    <span className={classes.textBold}>http </span>services,
                    making them predictable for front ends and less boilerplate
                    and repetitive codes for the backend. I also made library to
                    make the app system more robust to panics and more graceful
                    in handling them, like properly sending responds, sending
                    notifications to alerters like Sentry so the engineers are
                    notified immediately on fatal errors, or simply logging them
                    and stack tracing for easy review.
                </Typography>
            </section>
            <section id="why-you-should-hire">
                <Typography>
                    All of that features and other engineers <i>only have </i>to
                    write 5 lines of code to use my library and only call once.
                    Other engineers only need to focus on the business logic
                    instead of fumbling over boilerplate codes, and everything
                    comes out ordered and organized. And even then, It's only
                    touching the surface of what my libraries can do.
                </Typography>
            </section>
        </article>
    )
}

function FreeTime() {
    const classes = useStyles()
    return (
        <article>
            <section id="introduction" className={classes.sectionGap}>
                <Typography>
                    I like to host things on my own machine and dealing with the
                    problems that arise with it by my own. Mostly because I
                    learn much how programs or technology ticks when dealing
                    with them (like architecture, network, and dependency
                    problems). There is a sense of satisfaction knowing how
                    something works, fails, and its pitfalls. The fact that it
                    translates well for my future career is a nice side effect.
                </Typography>
            </section>
            <section id="cost" className={classes.sectionGap}>
                <Typography>
                    The other thing is because of cost. Hosting things go
                    expensive very quickly when scaling up. By hosting my own, I
                    only pay upfront, and long term will be much-much cheaper,
                    since I can use hardware specialized for my needs.
                </Typography>
            </section>
            <section id="hardware" className={classes.sectionGap}>
                <Typography>
                    Powerful hardware is expensive to rent if it's not making
                    money. I'll gladly pay Rp 2 Million up front for a{' '}
                    <b>8GB Raspberry Pi with 128GB MicroSD</b> server and{' '}
                    <b>1TB of HDD</b>, rather than paying monthly cost of Rp
                    500k renting a <b>VPS</b>. Of course there's power problem,
                    but Raspberry PI and a HDD mostly uses 20W and even then,
                    it's only happen on full CPU / IO load. That's like what? Rp
                    50k per month? A far cry from the monthly cost of renting.
                    The money difference I can use better services from my ISP.
                    Which to be honest, much more useful for myself and my
                    family than simply hosting on a cloud.
                </Typography>
            </section>
            <section id="not-hosting-for-money" className={classes.sectionGap}>
                <Typography>
                    Remember, I don't host my own things for money.
                </Typography>
            </section>
            <section id="business" className={classes.sectionGap}>
                <Typography>
                    I will gladly switch to cloud when using them for business
                    of course. Those auto-scaling and automation features are
                    too good to pass up.
                </Typography>
            </section>
            <section id="security" className={classes.sectionGap}>
                <Typography>
                    I can learn security by hosting my own. I like to question
                    is this safe from DDoS attacks? How about port / firewall
                    management? Block by IP? VPN and SSH for security? How do I
                    rate limit? How about hosting my own git Repo? Is there a
                    security loop hole on my hosted apps? These questions only
                    appear when I started hosting things up myself.
                </Typography>
            </section>
            <section id="remote-control">
                <Typography>
                    Lastly, I can remote control my stuffs at home from remote.
                    Configuring my router from far away is very cool. Oh btw,
                    Those things on the left sidebar on the second section?
                    Yeah, you need special permission to access them. You will
                    definitely get 403 Forbidden Error if you are not me.
                </Typography>
            </section>
        </article>
    )
}

function StackList() {
    return (
        <Typography>
            Elastic <br />
            MongoDB <br />
            Postgres <br />
            Vault <br />
            Kafka <br />
            Docker <br />
            Docker Compose <br />
            React <br />
            NextJS <br />
        </Typography>
    )
}

interface GridInfoItemsProps extends GridProps {
    header?: string | React.ReactElement
    value?: string | React.ReactElement
}

function GridInfoItems(props: GridInfoItemsProps) {
    const classes = useStyles()
    const theme = useTheme()
    const isPhoneSized = useMediaQuery(theme.breakpoints.down('sm'))
    const header =
        typeof props.header === 'string' ? (
            <Typography className={classes.textBold}>{props.header}</Typography>
        ) : (
            <div className={classes.textBold}>{props.header}</div>
        )

    const content =
        typeof props.value === 'string' ? (
            <Typography
                style={{ textAlign: isPhoneSized ? 'justify' : 'left' }}
            >
                {props.value}
            </Typography>
        ) : (
            <div style={{ textAlign: isPhoneSized ? 'justify' : 'left' }}>
                {props.value}
            </div>
        )

    return (
        <Grid item {...props}>
            {header}
            <Divider className={classes.divider} />
            {content}
        </Grid>
    )
}
