<template>
    <div
        class="mx-auto d-xl-flex w-50 flex-sm-row-reverse select-item-container"
    >
        <div class="w-100 w-lg-50">
            <img
                :src="selectedItem.selectedItemImg"
                :alt="
                    lang == 'eng'
                        ? selectedItem.selectedItemImgAlt.eng
                        : selectedItem.selectedItemImgAlt.nl
                "
                class="img-fluid ratio ratio-1x1 selected-image"
            />
        </div>
        <div class="w-100 w-lg-50">
            <p class="py-3 px-3">
                {{
                    lang == 'eng'
                        ? selectedItem.selectedItemText.eng
                        : selectedItem.selectedItemText.nl
                }}
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface ITextLang {
    eng: string
    nl: string
}

interface ISelectedItem {
    selectedItemText: ITextLang
    selectedItemImg: string
    selectedItemImgAlt: ITextLang
}

export default defineComponent({
    name: 'SelectedItem',
    props: {
        lang: String,
        selectedItem: {
            type: Object as PropType<ISelectedItem>,
            required: true,
        },
    },
})
</script>
