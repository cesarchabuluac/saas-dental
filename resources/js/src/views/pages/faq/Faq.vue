<template>
  <div>
    <!-- faq search section -->
    <section id="faq-search-filter">
      <b-card no-body class="faq-search" :style="{backgroundImage:`url(${require('@/assets/images/banner/banner.png')})`}">
        <b-card-body class="text-center">
          <h2 class="text-primary">
           Respondamos algunas preguntas
          </h2>
          <b-card-text class="mb-2">
            o elija una categoría para encontrar rápidamente la ayuda que necesita
          </b-card-text>

          <!-- form -->
          <div class="faq-search-input">
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="searchbar"
                v-model="faqSearchQuery"
                placeholder="Buscar preguntas frecuentes..."
              />
            </b-input-group>
          </div>
          <!-- form -->
        </b-card-body>
      </b-card>
    </section>
    <!--/ faq search section -->

    <!-- frequently asked questions tabs pills -->
    <section id="faq-tabs">
      <b-tabs vertical content-class="col-12 col-md-8 col-lg-9" pills nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12" nav-class="nav-left">

        <!-- payment tab -->
        <b-tab v-for="(categoryObj, categoryName, index) in filteredFaqs" :key="categoryName" :active="index === 0">

          <!-- title -->
          <template #title>
            <feather-icon
              :icon="categoryObj.icon"
              size="18"
              class="mr-1"
            />
            <span class="font-weight-bold">{{ categoryObj.title }}</span>
          </template>

          <faq-question-answer :options="categoryObj" />
        </b-tab>
        <!--/ payment tab -->

        <!-- sitting lady image -->
        <template #tabs-end>
          <b-img
            fluid
            :src="require('@/assets/images/illustration/faq-illustrations.svg')"
            class="d-none d-md-block mt-auto"
          />
        </template>
        <!--/ sitting lady image -->
      </b-tabs>
    </section>
    <!--/ frequently asked questions tabs pills -->

    <!-- contact us -->
    <section class="faq-contact">
      <b-row class="mt-5 pt-75 text-center">
        <b-col cols="12">
          <h2>¿Aún tienes alguna pregunta?</h2>
          <b-card-text class="mb-3">
           Si no puede encontrar una pregunta en nuestras preguntas frecuentes, siempre puede contactarnos. ¡Te responderemos en breve!
          </b-card-text>
        </b-col>
        <b-col sm="6">
          <b-card
            class="shadow-none py-1 faq-contact-card"
          >
            <b-avatar
              size="42"
              rounded
              variant="light-primary"
              class="mb-2"
            >
              <feather-icon
                icon="PhoneCallIcon"
                size="18"
              />
            </b-avatar>
            <h4>+ (52) 999 504 8783</h4>
            <span class="text-body">¡Siempre estaremos felices de ayudar!</span>
          </b-card>
        </b-col>
        <b-col sm="6">
          <b-card
            class="shadow-none py-1 faq-contact-card"
          >
            <b-avatar
              size="42"
              rounded
              variant="light-primary"
              class="mb-2"
            >
              <feather-icon
                icon="MailIcon"
                size="18"
              />
            </b-avatar>
            <h4>soporte@soft-dental.com</h4>
            <span class="text-body">¡La mejor manera de obtener una respuesta más rápido!</span>
          </b-card>
        </b-col>
      </b-row>
    </section>
    <!--/ contact us -->
  </div>
</template>

<script>
import _ from 'lodash'
import {
  BCard,
  BCardBody,
  BForm,
  BInputGroup,
  BFormInput,
  BCardText,
  BInputGroupPrepend,
  BTabs,
  BTab,
  BImg,
  BRow,
  BCol,
  BAvatar,
} from 'bootstrap-vue'
import FaqQuestionAnswer from './FaqQuestionAnswer.vue'

import FaqProvider from "@/providers/Faqs"
const FaqResource = new FaqProvider();

export default {
  components: {
    BForm,
    BCard,
    BRow,
    BCol,
    BAvatar,
    BCardBody,
    BInputGroup,
    BFormInput,
    BCardText,
    BInputGroupPrepend,
    BTabs,
    BTab,
    BImg,
    FaqQuestionAnswer,
  },
  data() {
    return {
      loading: false,
      faqs: [],
      faqSearchQuery: '',
      searchResults: [],     
    }
  },
  computed: {
    filteredFaqs() {
      return this.searchResults.length > 0 ? this.searchResults : this.faqs;
    },
  },
  watch: {
    faqSearchQuery: {
      immediate: true,
      handler() {
        this.searchResults = this.performSearch();
      },
    },
  },
  async mounted() {
    await this.getFaqs()
  },
  methods: {
    async getFaqs () {
      this.loading = true
      const { data } = await FaqResource.index({all: true})
      this.loading = false
      this.faqs = data.data
    },
    performSearch() {
      const query = this.faqSearchQuery.toLowerCase(); // Convertir la cadena de búsqueda a minúsculas
      return this.faqs.filter((faq) => {
        // Verificar si la cadena de búsqueda está presente en cualquier propiedad del FAQ
        return (
          faq.title.toLowerCase().includes(query) ||
          faq.subtitle.toLowerCase().includes(query) ||
          faq.qandA.some((qanda) => {
            return (
              qanda.question.toLowerCase().includes(query) ||
              qanda.ans.toLowerCase().includes(query)
            );
          })
        );
      });
    },
  },
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-faq.scss';
</style>
