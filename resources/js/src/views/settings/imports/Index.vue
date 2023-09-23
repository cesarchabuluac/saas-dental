<template>
    <div>
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
                    <b-card-text>
                        <h4>{{$t('imports.import_donwload_description')}}</h4>
                    </b-card-text>

                    <b-row>
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('imports.import_template')" label-for="import">
                                <v-select 
                                    :options="catalogs"
                                    :clearable="false"
                                    :searchable="false"
                                    input-id="import"
                                    label="text"
                                    @input="selectCatalog"
                                    :placeholder="$t('imports.import_template_placeholder')"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <!-- Action Buttons -->
                    <b-button variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" @click="downloadCatalog">
                        {{ $t("donwload") }}
                    </b-button>
                </div>
            </b-card>
            
            <b-card no-body class="mb-0 mt-1">
                <div class="m-2">   
                    <b-card-text>
                        {{$t('imports.import_description')}}
                    </b-card-text>             
                    <b-row>
                        <b-col cols="12" md="4">
                            <b-form-group :label="$t('imports.import_input_template')" label-for="import">
                                <v-select
                                    :options="catalogs"
                                    :clearable="false"
                                    :searchable="false"
                                    input-id="import"
                                    label="text"
                                     @input="selectCatalog"
                                    :placeholder="$t('imports.import_input_template_placeholder')"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="12">
                            <label for="">{{$t('imports.import_input_file')}}</label>
                            <b-form-file
                                @change="loadFile"
                                :placeholder="$t('imports.import_input_file_placeholder')"
                                class="mt-1"
                            />
                        </b-col>
                    </b-row>                   

                    <!-- Action Buttons -->
                    <b-button variant="primary" class="mb-1 mt-3 mb-sm-0 mr-0 mr-sm-1" @click="importCatalog">
                        {{ $t("save") }}
                    </b-button>
                </div>
            </b-card>
        </b-overlay>
    </div>
</template>
<script>

import _ from "lodash";
import {
    BCard,
    BCardText,
    BRow,
    BCol,
    BInputGroupPrepend,
    BInputGroupAppend,
    BInputGroup,
    BFormInput,
    BFormGroup,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BSpinner,
    BOverlay, 
    BTooltip, 
    VBTooltip,
    BFormFile,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import "animate.css";

import ImportFileProvider from '@/providers/ImportFiles'
const ImportFileResource = new ImportFileProvider()

export default {
    components: {
        BCard,
        BCardText,
        BRow,
        BCol,
        BInputGroupPrepend,
        BInputGroupAppend,
        BInputGroup,
        BFormInput,
        BFormGroup,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BSpinner,
        BOverlay,
        vSelect,
        BTooltip, 
        VBTooltip,
        BFormFile,
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return {
            loading: false,
            catalogs: [
                { value: 1, text: this.$t("imports.files.actions"), file: 'actions.xls' },
                { value: 2, text: this.$t("imports.files.laboratory_actions"), file: 'laboratory_actions.xls' },
            ],
            catalog: {},
            file_catalog: null,

        }
    },
    methods: {
        loadFile(e, receipt) {
            this.file_catalog = e.target.files[0];
        },
        selectCatalog(evt) {
            this.catalog = {...evt}
        },
        async downloadCatalog() { 

            if (!this.catalog.value) {
                this.danger(this.$t('imports.import_template_help'))
                return false
            }

            try {
                this.loading = true
                const { data } = await ImportFileResource.donwload({...this.catalog})
                this.loading = false
                let blob = new Blob([data], {
                    type: "application/vnd.ms-excel",
                });
                let link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = this.catalog.file;                
                link.click();
                window.URL.revokeObjectURL(link);
            } catch (e) {               
                this.loading = false
                if (e.response.status === 422) {
                    this.danger(
                        this.getFirstValidationError(e.response.data.errors),
                        "Error",
                        "AlertCircleIcon"
                    );
                } else {
                    this.danger(e.message, "Error", "AlertCircleIcon");
                }
            }
        },
        async importCatalog() {          
            try {
                this.loading = true
                const formData = new FormData()
                formData.append('id', this.catalog.value)
                formData.append('file', this.file_catalog)
                
                const { data } = await ImportFileResource.importCatalog(formData)
                this.loading = false                
                if (data.success) {
                    this.catalog = {}
                    this.success(data.message);                    
                } else {
                    this.danger(data.message);
                }               
            } catch (e) {
                this.loading = false
                if (e.response.status === 422) {
                    let errorsHtml = ''
                    this.danger(
                        this.getFirstValidationError(e.response.data.errors),
                        "Error",
                        "AlertCircleIcon"
                    );
                } else {
                    this.danger(e.message, "Error", "AlertCircleIcon");
                }
            }
        }
    }
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";

#add-new-user-sidebar {
    .vs__dropdown-menu {
        max-height: 200px !important;
    }
}
</style>