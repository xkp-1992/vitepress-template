<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <el-row class="mb-4">
        <el-button type="primary" @click="count++">You clicked me {{ count }} times.</el-button>
    </el-row>
</template>
