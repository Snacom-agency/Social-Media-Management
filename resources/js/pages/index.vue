<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Welcome">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <div class="w-full h-screen flex flex-col gap-8 items-center justify-center">
        <h1>Welcome</h1>
        <p>
            This is the welcome page. You can start building your application from here.
        </p>
        <a class="p-4 bg-secondary text-white " href="/m-admin">
            Go to Dashboard m-admin
        </a>
    </div>
</template>
