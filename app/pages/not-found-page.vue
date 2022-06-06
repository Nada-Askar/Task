<template>
    <div class="c-not-found">
        <not-found-component />
    </div>
</template>

<script>
import NotFoundComponent from "../components/vue-components/not-found.vue";
export default {
    name: "NotFoundPageComponent",
    components: {
        NotFoundComponent,
    },
};
</script>
