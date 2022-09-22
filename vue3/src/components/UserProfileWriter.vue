<template>
    <div class="card">
        <div class="card-body">
            <div class="form-floating">
                <textarea v-model="content" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">编辑区</label>
                <button @click="submit_post" type="button" class="btn btn-primary btn-sm">发布</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default{
        name: "UserProfileWriter",
        setup(props, context) {
            let content = ref('');
            const submit_post = () => {
                context.emit("submit_post", content.value);
                content.value = "";
            }

            return {
                content,
                submit_post
            }
        }
    }
</script>

<style scoped>
    .card {
        margin-top: 20px;
    }
    .btn {
        margin-top: 10px;
    }
</style>