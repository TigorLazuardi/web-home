import SurfaceWrapper from '@comp/SurfaceWrapper'
import WIP from '@comp/WorkInProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
    })
)

export default function HealthCheck() {
    const classes = useStyles()
    return (
        <SurfaceWrapper>
            <div className={classes.toolbar} />
            <WIP />
        </SurfaceWrapper>
    )
}
