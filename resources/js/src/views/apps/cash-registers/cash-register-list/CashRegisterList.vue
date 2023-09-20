<template>
  <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
    <template #overlay>
      <div class="d-flex align-items-center">
        <b-spinner small type="grow" variant="secondary" />
        <b-spinner type="grow" variant="dark" />
        <b-spinner small type="grow" variant="secondary" />
      </div>
    </template>

    <!-- Table Container Card -->
    <b-card no-body class="mb-0">
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col cols="12" md="6" class=" d-flex align-items-center justify-content-start mb-1 mb-md-0 ">
            <label>{{ $t("show") }}</label>
            <v-select v-model="perPage" :options="perPageOptions" :clearable="false"
              class="per-page-selector d-inline-block mx-50" />
            <b-button v-if="canAccess('cash_registers.create')" variant="primary"
              @click="$router.push({ name: 'apps-cash-register-add', })">
              <span class="text-nowrap">
                {{ $t("add") }}
              </span>
            </b-button>
          </b-col>

          <!-- Search -->
          <b-col cols="12" md="6">
            <div class="d-flex align-items-center justify-content-end">
              <b-input-group>
                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1"
                  :placeholder="$t('cash_registers.search_options')" @keyup.enter="getCashRegisters" />
                <b-input-group-prepend>
                  <b-button variant="primary" @click="getCashRegisters">
                    <feather-icon icon="SearchIcon" />
                  </b-button>
                </b-input-group-prepend>
              </b-input-group>
            </div>
          </b-col>
        </b-row>
      </div>

      <b-table ref="refCashRegisterListTable" class="position-relative" :items="cashRegisters" responsive
        :fields="columns" primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')"
        :current-page="currentPage" busy.sync="loading" stacked="md">

        <!-- Empty -->
        <template slot="empty">
          <div v-if="loading" class="d-flex justify-content-center mb-1">
            <b-spinner style="width: 3rem; height: 3rem" class="mr-1" label="Loading..." variant="primary" />
          </div>
        </template>

        <!-- id -->
        <template #cell(id)="data">
          {{ data.item.id }}
        </template>

        <!-- closing date -->
        <template #cell(closing_date)="data">
          {{ dateFormat(data.item.closing_date) }}
        </template>

        <!-- comments -->
        <template #cell(comments)="data">
          {{ data.item.comments }}
        </template>

        <!-- income -->
        <template #cell(total_income)="data">
          {{ formatPrice(data.item.total_income) }}
        </template>

        <!-- expenses -->
        <template #cell(total_expenses)="data">
          {{ formatPrice(data.item.total_expenses) }}
        </template>

        <!-- total -->
        <template #cell(total_balance)="data">
          {{ formatPrice(data.item.total_income - data.item.total_expenses) }}
        </template>

        <!-- Column: actions -->
        <template #cell(actions)="data">

          <div class="demo-inline-spacing">
            <b-button v-if="canAccess('cash_registers.show')" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"
              class="btn-icon" size="sm"
              @click="$router.push({ name: 'apps-cash-register-show', params: { id: data.item.id } })"
              v-b-tooltip.hover.right="`${$t('button_tooltip_detail')}`">
              <feather-icon icon="EyeIcon" />
            </b-button>

            <b-button v-if="canAccess('cash_registers.download')" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="secondary" class="btn-icon" size="sm" @click="downloadCashRegister(data.item)"
              v-b-tooltip.hover.right="`${$t('button_tooltip_download')}`">
              <feather-icon icon="DownloadIcon" />
            </b-button>
          </div>
        </template>
      </b-table>

      <!-- Pagination -->
      <div v-if="cashRegisters" class="mx-2 mb-2">
        <b-row>
          <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
          </b-col>
          <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
            <div class="mt-2 demo-spacing-0">
              <b-pagination v-model="currentPage" :total-rows="totalCashRegister" :per-page="perPage" size="lg" />
            </div>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </b-overlay>
</template>

<script>
import {
  BOverlay,
  BInputGroupPrepend,
  BInputGroupAppend,
  BInputGroup,
  BFormInput,
  BCard,
  BTable,
  BRow,
  BCol,
  BButton,
  BSpinner,
  BTooltip,
  VBTooltip,
  BPagination,
} from 'bootstrap-vue'

import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'

import 'animate.css'
import CashRegisterProvider from '@/providers/CashRegisters'

const CashRegisterResource = new CashRegisterProvider()

export default {
  components: {
    VueGoodTable,
    BOverlay,
    BInputGroupPrepend,
    BInputGroupAppend,
    BInputGroup,
    BFormInput,
    BCard,
    BTable,
    BRow,
    BCol,
    BButton,
    BSpinner,
    vSelect,
    BTooltip,
    VBTooltip,
    BPagination,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  data() {
    return {
      cashRegisters: [],
      perPageOptions: [10, 25, 50, 100],
      perPage: 10,
      currentPage: 1,
      totalCashRegister: 0,
      columns: [
        {
          key: 'id',
          label: this.$t('cash_registers.table_closing_id'),
        },
        {
          key: 'closing_date',
          label: this.$t('cash_registers.table_closing_date'),
        },
        {
          key: 'comments',
          label: this.$t('cash_registers.table_note'),
        },
        {
          key: 'total_income',
          label: this.$t('cash_registers.table_income'),
        },
        {
          key: 'total_expenses',
          label: this.$t('cash_registers.table_expenses'),
        },
        {
          key: 'total_balance',
          label: this.$t('cash_registers.table_total'),
        },
        { key: 'actions', label: this.$t('actions') },
      ],
      sortBy: 'id',
      sortDesc: false,
      searchQuery: null,
      from: 0,
      to: 0,
      loading: false,
    }
  },
  computed: {
    dataMeta() {
      const localItemsCount = _.size(this.cashRegisters)
      return {
        from:
          this.perPage * (this.currentPage - 1)
          + (localItemsCount ? 1 : 0),
        to: this.perPage * (this.currentPage - 1) + localItemsCount,
        of: this.totalCashRegister,
      }
    },
  },
  watch: {
    currentPage(value) {
      this.getCashRegisters()
    },
    perPage(value) {
      this.getCashRegisters()
    },
  },
  async mounted() {
    await this.getCashRegisters()
  },
  methods: {
    async downloadCashRegister(item) {
      console.log(item)
      try {
        this.loading = true
        const { data } = await CashRegisterResource.download(item.id)
        this.loading = false
        const blob = new Blob([data], { type: 'application/vnd.ms-excel' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        const fileName = `${this.$t('cash_registers.export_name')}-${item.closing_date}-${item.closing_end_date}`
        link.download = `${fileName}.xls`
        link.click()
      } catch (e) {
        this.loading = false
        this.handleResponseErrors(e)
      }
    },
    async getCashRegisters() {

      const query = {
        search: this.searchQuery,
        sortBy: this.sortBy,
        sortDesc: this.sortDesc,
        perPage: this.perPage,
        page: this.currentPage,
      }

      this.loading = true
      const { data } = await CashRegisterResource.getList(query)
      this.loading = false
      this.cashRegisters = data.data
      this.totalCashRegister = data.total
    },
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
}

.text-decoration-line-through {
    text-decoration: line-through;
}
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
