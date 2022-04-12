import getArticleAPi from '@/api/article'

const state = {
    data: null,
    isLoading: false,
    error: null,
}

export const mutationTypes = {
    getArticleStart: '[article] Get article Start',
    getArticleSuccess: '[article] Get article Success',
    getArticleFailure: '[article] Get article Failure',

    deleteArticleStart: '[article] delete article Start',
    deleteArticleSuccess: '[article] delete article Success',
    deleteArticleFailure: '[article] delete article Failure',
}

export const actionTypes = {
    getArticle: '[article] Get article',
    deleteArticle: '[article] delete article',
}

const mutations = {
    [mutationTypes.getArticleStart](state) {
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getArticleFailure](state) {
        state.isLoading = false
    },

    [mutationTypes.deleteArticleStart]() {},
    [mutationTypes.deleteArticleSuccess]() {},
    [mutationTypes.deleteArticleFailure]() {},
}

const actions = {
    [actionTypes.getArticle](context, {slug}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.getArticleStart, slug)
            getArticleAPi
                .getArticle(slug)
                .then((article) => {
                    context.commit(mutationTypes.getArticleSuccess, article)
                    resolve(article)
                })
                .catch(() => {
                    context.commit(mutationTypes.getArticleFailure)
                })
        })
    },
    [actionTypes.deleteArticle](context, {slug}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.deleteArticleStart, slug)
            getArticleAPi
                .deleteArticle(slug)
                .then(() => {
                    context.commit(mutationTypes.getArticleSuccess)
                    resolve()
                })
                .catch(() => {
                    context.commit(mutationTypes.deleteArticleFailure)
                })
        })
    },
}

export default {
    state,
    actions,
    mutations,
}
