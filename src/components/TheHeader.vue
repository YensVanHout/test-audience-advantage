<template>
    <div class="d-flex flex-row-reverse header-bg select-div">
        <b-form-select v-model="selectedLang" :options="langs" class="m-2" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    name: 'TheHeader',
    props: {},
    emits: ['changeLang'],
    setup(props, { emit }) {
        const selectedLang = ref('eng')

        const langs: object[] = [
            { value: 'eng', text: 'English' },
            { value: 'nl', text: 'Nederlands' },
        ]

        watch(selectedLang, () => {
            emit('changeLang', selectedLang.value)
        })

        return { selectedLang, langs }
    },
})
</script>
