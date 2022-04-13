<template>
    <div>
        <div class="editor-page">
            <div class="container page">
                <div class="row">
                    <div class="col-md-10 offset-md-1 col-xs-12">
                        <mcv-validation-errors v-if="errors"  validation-errors="errors"/>

                        <form @submit="onSubmit">
                            <fieldset>
                                <fieldset class="form-group">
                                    <input type="text"
                                           class="form-control form-control-lg"
                                           placeholder="Article title"
                                           v-model="title"
                                    />
                                </fieldset>

                                <fieldset class="form-group">
                                    <input type="text"
                                           class="form-control form-control-lg"
                                           placeholder="description"
                                           v-model="description"
                                    />
                                </fieldset>

                                <fieldset class="form-group">
                                    <textarea  class="form-control form-control-lg"
                                               placeholder="What is this article about?"
                                               v-model="body"
                                    > </textarea>
                                </fieldset>

                                <fieldset class="form-group">
                                    <input type="text"
                                           class="form-control form-control-lg"
                                           placeholder="Enter tags"
                                           v-model="tagList"
                                    />
                                </fieldset>

                                <fieldset class="form-group">
                                    <button class="btn btn-lg pull-xs-right btn-primary"
                                            type="submit"
                                            :disabled="isSubmitting"
                                    >
                                        Publish Article
                                    </button>
                                </fieldset>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import McvValidationErrors from "@/components/ValidationErrors";
    export default {
        name: 'McvArticleForm',
        components: {McvValidationErrors},
        props: {
            initialValues: {
                type: Object,
                require: true
            },
            errors: {
                type: Object,
                require: false
            },
            isSubmitting: {
                type: Boolean,
                require: true
            }
        },
        data() {
            return {
                title: '',
                description: '',
                body: '',
                tagList: ''
            }
        },
        methods: {
            onSubmit() {
                const form = {
                    title: this.title,
                    description:  this.description,
                    body: this.body,
                    tagList: this.tagList
                }
                this.$emit('articleSubmit', form)
            },
        }
    }
</script>