<template>
    <div>
        <!-- Modal Search Patient -->
        <b-modal id="modal-search-patient" ref="modal-search-patient" :title="$t('patients.plural')" @hidden="close"
            ok-only :ok-title="$t('accept')" size="lg">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Search -->
                    <b-col cols="12" md="12">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input size="sm" autofocus v-model="searchQuery" class="d-inline-block _mr-1" autocomplete="off"
                                    :placeholder="$t('patients.search_options')" @keyup.enter="searchPatients" />
                                <b-input-group-prepend>
                                    <b-button size="sm" variant="primary" @click="searchPatients">
                                        <feather-icon icon="SearchIcon" />
                                    </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>
            <b-table ref="refPatientsListTable" class="position-relative b-table-small text-small small table-samll" :items="patients" responsive hover
                :fields="columns" primary-key="id" show-empty :empty-text="$t('datatables.sZeroRecords')"
                busy.sync="loading" small
                selectable select-mode="single" 
                @row-selected="selectRow">
                <!-- Empty -->
                <template slot="empty">
                    <div v-if="loading" class="d-flex justify-content-center mb-1">
                        <b-spinner style="width: 3rem; height: 3rem" class="mr-1" label="Loading..." variant="primary" />
                    </div>
                </template>

                <!-- Column: name -->
                <template #cell(name)="data">
                    <div class="text-wrap">
                        {{ data.item.full_name }} <br>
                        <span class="badge badge-light-info float-left">{{ data.item.email }}</span>
                    </div>
                </template>

                <!-- Column: document -->
                <template #cell(document)="data">
                    <span>{{ data.item.rut }}</span>
                </template>

                <!-- Column: phone -->
                <template #cell(phone)="data">
                    <span>{{ data.item.cellphone }}</span>
                </template>

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="text-nowrap">
                        <b-button @click="choosePatient(data.item)" size="sm" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="outline-primary">
                            {{ $t('to_choose') }}
                        </b-button>
                    </div>
                </template>
            </b-table>
        </b-modal>
    </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
    BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle, BOverlay, BSpinner, BTable, BFormCheckbox, BFormGroup, BFormInput,
    BModal, VBModal, BSidebar, BForm, BIcon, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormTextarea, BFormTags, BAvatar,
} from 'bootstrap-vue'
import router from "@/router";
import Ripple from 'vue-ripple-directive'
import { heightTransition } from '@core/mixins/ui/transition'
import PatientProvider from "@/providers/Patients";
const PatientResource = new PatientProvider();
export default {
    name: 'SearchPatients',
    directives: {
        Ripple,
        'b-modal': VBModal,
        'b-toggle': VBToggle,
    },
    components: {
        BRow,
        BSidebar,
        BCol,
        BCard,
        BCardBody,
        BCardText,
        BButton,
        BAlert,
        BLink,
        BOverlay,
        BSpinner,
        BTable,
        BTableLite,
        BFormCheckbox,
        BFormGroup,
        BFormInput,
        BModal,
        VBModal,
        BForm,
        BIcon,
        BInputGroup,
        BInputGroupAppend,
        BInputGroupPrepend,
        BFormTextarea,
        BFormTags,
        BCardCode,
        BAvatar,
    },
    mixins: [heightTransition],
    props: ["active"],
    data() {
        return {
            loading: false,
            columns: [
                { key: "actions", label: ' ' },
                {
                    key: "name",
                    label: this.$t("patients.table.name"),
                },
                {
                    key: "document",
                    label: this.$t("patients.table.document_type"),
                },
                {
                    key: "phone",
                    label: this.$t("patients.table.phone"),
                },
            ],
            patients: [],
            searchQuery: null,
        }
    },
    methods: {
        selectRow(item) {
            this.$emit("selected", { ...item[0] });
            this.close();
        },
        choosePatient(item) {
            this.$emit("selected", { ...item });
            this.close();
        },
        async searchPatients() {
            this.loading = true;
            const { data } = await PatientResource.search(this.searchQuery);
            this.patients = data.data
            this.loading = false
        },
        close() {
            this.$refs['modal-search-patient'].hide()
            this.$emit("close");
        },
    },
    watch: {
        active(value) {
            if (value) {
                this.patients = []
                this.searchQuery = null
                this.$refs['modal-search-patient'].toggle()
            } else {
                this.close()
            }
        }
    }
}
</script>