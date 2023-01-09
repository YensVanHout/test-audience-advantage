<template>
    <div id="app">
        <div class="min-vh-100">
            <header><TheHeader @changeLang="changeLang" /></header>
            <main>
                <SelectedItem
                    :selected-item="data[selectedId]"
                    :lang="selectedLang"
                    class="my-3"
                />
                <VueSlickCarousel v-bind="settings" class="h-50 w-50 mx-auto">
                    <img
                        :src="item.selectedItemImg"
                        :alt="item.selectedItemImgAlt.eng"
                        v-for="item in data"
                        v-bind:key="item.id"
                        @click="changeItem(item.id)"
                        role="button"
                        class="caroussel-item"
                    />
                </VueSlickCarousel>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
//VUE/COMPONENT IMPORTS
import { defineComponent, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import SelectedItem from './components/SelectedItem.vue'

//DATA IMPORT
import data from './assets/data.json'

//CAROUSSEL IMPORT
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default defineComponent({
    name: 'App',
    components: {
        TheHeader,
        SelectedItem,
        VueSlickCarousel,
    },
    props: {},
    emits: {},
    setup() {
        const selectedId = ref<number>(0)
        const selectedLang = ref<string>('eng')
        const settings = {
            edgeFriction: 0.35,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
        }

        const changeItem = (id: number) => {
            selectedId.value = id
        }

        const changeLang = (lang: string) => {
            selectedLang.value = lang
        }

        return {
            settings,
            selectedId,
            data,
            changeItem,
            selectedLang,
            changeLang,
        }
    },
})
</script>
