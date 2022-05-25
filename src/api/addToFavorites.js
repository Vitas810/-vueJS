import axios from "@/api/axios";

const getUrl = slug => `/articles/${slug}/favorite`

const addToFavorites = slug => {
    const url = getUrl(slug)
    return axios.post(url).then(response => response.data.data)
}

const removeFromFavorites = slug => {
    const url = getUrl(slug)
    return axios.delete(url).then(response => response.data.data)
}

export default {
    addToFavorites,
    removeFromFavorites
}