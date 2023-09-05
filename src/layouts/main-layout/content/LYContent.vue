<template>
    <!-- begin::Main Content -->
    <main>
        <RouterView/>
    </main>
    <!-- end::Main Content -->
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ly-content",
    });
</script>