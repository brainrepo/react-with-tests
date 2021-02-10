export function addLang(shortName, longName) {
    return ({
        type: 'ADD_LANGUAGE',
        payload: {
            name: shortName,
            value: longName
        }
    })
}


export function removeLang(shortName) {
    return ({
        type: 'REMOVE_LANGUAGE',
        payload: {
            name: shortName
        }
    })
}