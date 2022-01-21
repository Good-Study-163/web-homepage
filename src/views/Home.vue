<template>
    <div>
        Home
        <router-link to="/backend">backend</router-link>
        <router-link to="/frontend">frontend</router-link>
        <router-link to="/recommended">recommended</router-link>
        <el-button type="primary">elementUI</el-button>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';

export default defineComponent({
    name: 'Home',
    components: {},
});
</script>