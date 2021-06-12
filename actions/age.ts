function getAge() {
    const b = birthDate().getTime(),
        now = Date.now(),
        timeDifference = Math.abs(b - now)

    return Math.ceil(timeDifference / (1000 * 3600 * 24 * 365))
}

export function birthDate() {
    return new Date('1994-06-08')
}

export default getAge
