import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

interface Props {
    dividerClass?: string
    typographyClass?: string
    sectionClass?: string
}

export default function HumbleAbode({
    dividerClass,
    typographyClass,
    sectionClass,
}: Props) {
    return (
        <section className={sectionClass}>
            <Typography variant="h4">Welcome to My Humble Abode!</Typography>
            <Divider className={dividerClass} />
            <Typography paragraph className={typographyClass}>
                This site is a showcase of my personal projects while also
                doubles as monitoring / administration tools from remote. The
                first section in the sidebar is public, meaning anyone can
                access, while the second section is private, requiring
                authentications to enter.
            </Typography>
        </section>
    )
}
