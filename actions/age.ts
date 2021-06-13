function getAge(birthDate: string) {
    const b = new Date(birthDate).getTime(),
        now = Date.now(),
        timeDifference = now - b

    // Yearly =  1000 milliseconds * 3600 seconds * 24 hours * 365 days
    return Math.floor(timeDifference / (1000 * 3600 * 24 * 365))
}

export default getAge
