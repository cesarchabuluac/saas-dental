<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <template #overlay>
            <div class="d-flex align-items-center">
                <b-spinner small type="grow" variant="secondary" />
                <b-spinner type="grow" variant="dark" />
                <b-spinner small type="grow" variant="secondary" />
            </div>
        </template>
        <b-card no-body class="mb-0">
            <div class="m-2">
                <b-form>
                    <b-row>
                        <!-- Field: name -->
                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('branch_offices.name')"
                                label-for="name"
                            >
                                <b-form-input
                                    id="name"
                                    v-model="branch.name"
                                    :placeholder="$t('branch_offices.name_placeholder')"
                                />
                            </b-form-group>
                        </b-col>

                        <!-- Postal Code -->
                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('branch_offices.postal_code')"
                                label-for="postal_code"
                            >
                                <b-form-input
                                    id="postal_code"
                                    v-model="branch.postal_code"
                                    :placeholder="$t('branch_offices.postal_code_placeholder')"
                                />
                            </b-form-group>
                        </b-col>

                        <!-- Country -->
                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('branch_offices.country')"
                                label-for="country"
                            >
                                <b-form-input
                                    id="country"
                                    v-model="branch.country"
                                    :placeholder="$t('branch_offices.country_placeholder')"
                                />
                            </b-form-group>
                        </b-col>

                        <!-- Phone -->
                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('branch_offices.phone')"
                                label-for="phone"
                            >
                                <b-form-input
                                    id="phone"
                                    v-model="branch.phone"
                                    :placeholder="$t('branch_offices.phone_placeholder')"
                                />
                            </b-form-group>
                        </b-col>

                        <!-- Email -->
                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('branch_offices.email')"
                                label-for="email"
                            >
                                <b-form-input
                                    id="email"
                                    v-model="branch.email"
                                    :placeholder="$t('branch_offices.email_placeholder')"
                                />
                            </b-form-group>
                        </b-col>

                        <!-- Address -->
                        <b-col cols="12" md="4">
                            <b-form-group
                                :label="$t('branch_offices.address')"
                                label-for="address"
                            >
                                <b-form-input
                                    id="address"
                                    v-model="branch.address"
                                    :placeholder="$t('branch_offices.address_placeholder')"
                                />
                            </b-form-group>
                        </b-col>


                        <b-col cols="12" md="6" class="mt-md-0 mt-3">
                             <b-form-group
                                :label="$t('branch_offices.membrete')"
                                label-for="dropzone"
                                :description="$t('branch_offices.membrete_help')">
         
                                
                                <b-form-file
                                    :placeholder="$t('branch_offices.membrete_placeholder')"
                                    drop-placeholder="Drop file here..."
                                    @change="handleImageUpload" accept="image/*"
                                />

                                <b-card-text class="my-1">                                                                     
                                    <b-img v-if="imagePreview" :src="imagePreview" thumbnail fluid alt="Responsive image" />
                                </b-card-text>
                             </b-form-group>
                        </b-col>

                        <b-col cols="12" md="6" class="mt-md-0 mt-3">
                             <b-form-group
                                :label="$t('branch_offices.membrete')"
                                label-for="dropzone"
                                :description="$t('branch_offices.membrete_help')">
         
                                
                                <b-form-file
                                    v-model="file2"
                                    :placeholder="$t('branch_offices.membrete_placeholder')"
                                    drop-placeholder="Drop file here..."
                                    @change="handleImageUpload2" accept="image/*"
                                />

                                <b-card-text class="my-1">                                                                     
                                    <b-img v-if="imagePreview2" :src="imagePreview2" thumbnail fluid alt="Responsive image" />
                                </b-card-text>
                             </b-form-group>
                        </b-col>
                    </b-row>
                    <hr>

                    <!-- Action Buttons -->
                    <b-button
                        :disabled="loading"
                        variant="primary"
                        class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                        @click="update"
                    >
                        {{ $t("save") }}
                    </b-button>
                    <b-button
                        :disabled="loading"
                        variant="outline-secondary"
                        class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                        @click="$router.push({ name: 'settings-branch-offices' })"
                    >
                        {{ $t("back") }}
                    </b-button>
                </b-form>
            </div>
        </b-card>
    </b-overlay>
</template>

<script>
import {
    BButton,
    BRow,
    BCol,
    BCardText,
    BImg,
    BFormFile,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BSpinner,
    BOverlay,
} from "bootstrap-vue";

import router from "@/router";
import store from "@/store";

// Providers
import BranchProvider from "@/providers/BranchOffices";
const BranchResource = new BranchProvider();

export default {
    components: {
        BButton,
        BRow,
        BCol,
        BCardText,
        BImg,
        BFormFile,
        BFormGroup,
        BFormInput,
        BForm,
        BTable,
        BCard,
        BCardHeader,
        BCardTitle,
        BSpinner,
        BOverlay,
    },
    data() {
        return {
            branch_office_id: null,
            branch: {},
            loading: false,
            file: null,
            file2: null,
            imagePreview: null,
            imagePreview2: null,
        };
    },
    async mounted () {
        this.branch_office_id = router.currentRoute.params.id;
        await this.getBranch();
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
            this.branch.file = null
            if (file) {
                // Verifica el tamaño del archivo (en bytes)
                if (file.size <= 5 * 1024 * 1024) {                
                    // Si el archivo es válido, crea la vista previa
                    this.imagePreview = URL.createObjectURL(file);
                    this.branch.file = file
                } else {
                    // Si el archivo es demasiado grande, muestra un mensaje de error
                    this.danger(this.$t('image_size_valid'))
                    this.imagePreview = null; // Limpia la vista previa
                    event.target.value = null; // Limpia la selección de archivo en el input
                }
            } else {
                this.imagePreview = null;
            }
        },
        handleImageUpload2(event) {
            const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
            this.branch.file2 = null
            if (file) {
                // Verifica el tamaño del archivo (en bytes)
                if (file.size <= 5 * 1024 * 1024) {                
                    // Si el archivo es válido, crea la vista previa
                    this.imagePreview2 = URL.createObjectURL(file);
                    this.branch.file2 = file
                } else {
                    // Si el archivo es demasiado grande, muestra un mensaje de error
                    this.danger(this.$t('image_size_valid'))
                    this.imagePreview2 = null; // Limpia la vista previa
                    event.target.value = null; // Limpia la selección de archivo en el input
                }
            } else {
                this.imagePreview2 = null;
            }
        },
        async getBranch() {
            try {
                this.loading = true;
                const { data } = await BranchResource.getBranchDetail(this.branch_office_id);
                this.loading = false;
                this.branch = data.data; 
                
                if (this.branch.letterhead_1) {
                    this.imagePreview = this.branch.letterhead_1
                }

                if (this.branch.letterhead_2) {
                    this.imagePreview2 = this.branch.letterhead_2
                }

            } catch (e) {
                this.loading = false
            }
        },
        async update() {
            try {

                const formData = new FormData()
                for (const key in this.branch) {
                    if (this.branch.hasOwnProperty(key) && this.branch[key] !== null && this.branch[key] !== undefined) {
                        formData.append(key, this.branch[key]);
                    }
                }
                formData.append('_method', 'PUT')

                console.log(formData)
                this.loading = true;
                const { data } = await BranchResource.update(this.branch_office_id, formData);
                this.loading = false;
                if (data.success) {
                    this.success(data.message, '', 'CheckIcon')
                    router.push({ 'name': 'settings-branch-offices'})
                } else {
                    this.danger(data.message, 'Error', 'AlertCircleIcon')
                }

            } catch (e) {
                this.loading = false;
                this.handleResponseErrors(e);
            }
        },
    },
};
</script>

<style lang="css" scoped>

</style>