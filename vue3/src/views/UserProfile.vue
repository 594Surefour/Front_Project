<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user"/>
                <UserProfileWriter @submit_post="submit_post"/>
            </div>
            <div class="col-9">
                <UserProfilePosts :posts="posts"/>
            </div>
        </div>
    </ContentBase>
</template>

<script>
    import { reactive } from "vue";
    import ContentBase from "./../components/ContentBase.vue";
    import UserProfileInfo from "./../components/UserProfileInfo.vue";
    import UserProfilePosts from "./../components/UserProfilePosts.vue";
    import UserProfileWriter from "./../components/UserProfileWriter.vue";

    export default {
        name: "UserProfile",
        components:{
            ContentBase,
            UserProfileInfo,
            UserProfilePosts,
            UserProfileWriter
},
        setup() {
            const user = reactive({
                id: 1,
                username: "lee",
                firstname: "Zehao",
                lastname: "Li",
                followerCount: 0,
                is_followed: false,
            });
            const posts = reactive({
                conunt: 3,
                posts:[
                    {
                        id: 1,
                        userId: 1,
                        content:"2022-9-21~"
                    },
                    {
                        id: 2,
                        userId: 1,
                        content:"2022-9-22~"
                    },
                    {
                        id: 3,
                        userId: 1,
                        content:"2022-9-23~"
                    }
                ]
            })
            const follow = () => {
                if(user.is_followed)
                    return;
                user.is_followed = true;
                user.followerCount ++;
            };
            const unfollow = () => {
                if(!user.is_followed)
                    return;
                user.is_followed = false;
                user.followerCount --;
            };
            const submit_post = (content) => {
                posts.conunt ++;
                posts.posts.unshift({
                    id: posts.conunt,
                    userId: 1,
                    content: content
                })
            };
            return {
                user: user,
                follow,
                unfollow,
                posts,
                submit_post
            }
        }
}
</script>


<style>

</style>