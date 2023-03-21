<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 text-white mt-5">
                <h1> This is wrong page! </h1>
                <p>
                    <router-link class="text-white" :to="{name: `home`}">
                        Click here for go to home page please
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup () {
        const router = useRouter();

        return {router}
    }
}
</script>