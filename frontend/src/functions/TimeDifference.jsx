
const dateDifference = (postDateString) => {
    const nowMilliseconds = new Date().getTime()
    const postMilliseconds = new Date(postDateString).getTime()

    const timeDifference = nowMilliseconds - postMilliseconds
    const timeDifferenceInSeconds = timeDifference / 1000
    const timeDifferenceInMinutes = timeDifference / 1000 / 60
    const timeDifferenceInHours = timeDifference / 1000 / 60 / 60
    const timeDifferenceInDays = timeDifference / 1000 / 60 / 60 / 24
    const timeDifferenceInWeeks = timeDifference / 1000 / 60 / 60 / 24 / 7

    if (timeDifferenceInMinutes < 1) {
        return `${Math.round(timeDifferenceInSeconds)} seconds ago`
    }

    if (timeDifferenceInHours < 1) {
        return `${Math.round(timeDifferenceInMinutes)} minutes ago`
    }

    if (timeDifferenceInDays < 1) {
        return `${Math.round(timeDifferenceInHours)} hours ago`
    }

    if (timeDifferenceInWeeks < 1) {
        return `${Math.round(timeDifferenceInDays)} days ago`
    }

    return `${Math.round(timeDifferenceInWeeks)} weeks ago`
}

export default dateDifference