import addToFavoritesApi from "@/api/addToFavorites";

export const mutationsTypes = {
    addToFavoritesStart: '[addToFavorites] Add to favorites start',
    addToFavoritesSuccess: '[addToFavorites] Add to favorites success',
    addToFavoritesFailure: '[addToFavorites] Add to favorites failure',
}

export const actionTypes = {
    addToFavorites: '[addToFavorites] add to favorites'
}

const mutations = {
    [mutationsTypes.addToFavoritesStart]() {},
    [mutationsTypes.addToFavoritesSuccess]() {},
    [mutationsTypes.addToFavoritesFailure]() {}
}

const actions = {
    [actionTypes.addToFavorites](context, {slug, isFavorited}) {
        return new Promise(resolve => {
            context.commit(mutationsTypes.addToFavoritesStart)
            const promise = isFavorited
                ? addToFavoritesApi.removeFromFavorites(slug)
                : addToFavoritesApi.addToFavorites(slug)

            promise
                .then(article => {
                    context.commit(mutationsTypes.addToFavoritesSuccess, article)
                    resolve(article)
                })
                .catch(() => {
                    context.commit(mutationsTypes.addToFavoritesFailure)
                })
        })
    }
}

export default {
    actions,
    mutations
}