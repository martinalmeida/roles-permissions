<script setup>
import { useShared } from "@s/composables";

const { loading, valuesAlert, closeAlert } = useShared();
</script>

<template>
    <Spinner v-show="loading"></Spinner>
    <Alert
        v-show="valuesAlert.active"
        :title="valuesAlert.title"
        :close="valuesAlert.close"
        :type="valuesAlert.type"
        @close-alert="closeAlert"
    >
        {{ valuesAlert.message }}
    </Alert>
    <router-view />
</template>
