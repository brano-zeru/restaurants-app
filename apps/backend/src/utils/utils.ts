export const partition = <T> (array: T[], predicate: (temp: T) => boolean) => {
    const matchCondition = array.filter(predicate)
    const unmatchedCondition = array.filter((temp: T) => !predicate(temp))

    return {
        match: matchCondition,
        unMatch: unmatchedCondition
    }
}