<template>
    <button @click="handleLike"
            :class="{
                btn: true,
                'btn-sm': true,
                'btn-primary': isFavoritesOptimistic,
                'btn-outline-primary': !isFavoritesOptimistic
            }"
    >
        <i class="ion-heart" />
        <span>&nbsp; {{ favoritesCountOptimistic }}</span>
    </button>
</template>

<script>
import {actionTypes} from "@/store/modules/addToFavorites";

export default {
    name: 'McvAddFavorites',
    props: {
        isFavorited: {
            type: Boolean,
            required: true
        },
        articleSlug: {
            type: String,
            required: true
        },
        favoritesCount: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isFavoritesOptimistic: this.isFavorited,
            favoritesCountOptimistic: this.favoritesCount
        }
    },
    methods: {
        handleLike() {
            this.$store.dispatch(actionTypes.addToFavorites, {
                slug: this.articleSlug,
                isFavorited: this.isFavoritesOptimistic
            })
            if (this.isFavoritesOptimistic) {
                this.favoritesCountOptimistic = this.favoritesCountOptimistic - 1
            } else {
                this.favoritesCountOptimistic = this.favoritesCountOptimistic + 1
            }
            this.isFavoritesOptimistic = !this.isFavoritesOptimistic
        }
    }
}
</script>