import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Root() {
    const router = useRouter()
    useEffect(() => {
        router.replace('/web')
    })
    return <div></div>
}
