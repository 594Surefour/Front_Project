<template>
    <div class="card edit-field">
        <div class="card-body">
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card mini-card">
                    <div class="card-body">
                        {{ post.content }}
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
    export default {
        name: "UserProfilePosts",
        props: {
            posts:{
                type: Object,
                required: true,
            }  
        },
    }
</script>

<style scoped>
    .edit-field {
        margin-top: 20px;
    }
    .mini-card {
        margin-top: 10px;
    }
</style>