export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = feature => {
    console.log(`feature: ${feature}`)
    return { type: ADD_FEATURE, payload: feature};
}

export const removeFeature = featureName => {
    console.log(`featureName: ${featureName}`)
    return { type: REMOVE_FEATURE, payload: featureName }
}