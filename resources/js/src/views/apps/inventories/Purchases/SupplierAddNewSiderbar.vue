<template>
	<b-sidebar 
		id="addNewSupplierSidebarActive" 
		ref="addNewSupplierSidebarActive" 
		sidebar-class="sidebar-lg" 
		bg-variant="white" shadow backdrop no-header right
		:visible="isAddNewSupplierSidebarActive">
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">Agregar Proveedor</h5>
				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide"/>
			</div>

			<!-- Body -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">

					<!-- Supplier Name -->
					<validation-provider #default="validationContext" name="nombre proveedor" rules="required">
						<b-form-group label="Nombre Proveedor" label-for="supplier-name">
							<b-form-input
								id="supplier-name"
								autofocus
								autocomplete="off"
								v-model="supplierData.name"
								trim
								placeholder="John Doe"
								:state="getValidationState(validationContext)"
							/>
						</b-form-group>
					</validation-provider>


					<!-- Email -->
					<b-form-group label="Correo" label-for="email">
						<b-form-input
							id="email"
							autocomplete="off"
							v-model="supplierData.email"
							trim
							placeholder="example@domain.com"
							type="email"
						/>
					</b-form-group>

					<!-- Phone -->
					<b-form-group label="Teléfono" label-for="phone">
						<b-form-input
							id="phone"
							autocomplete="off"
							v-model="supplierData.phone"
							type="number"
							placeholder="763-242-9206"
							trim
						/>
					</b-form-group>

					<!-- Address -->
					<b-form-group
						label="Address"
						label-for="address"
						>
						<b-form-textarea
							id="address"
							autocomplete="off"
							v-model="supplierData.address"
							placeholder="221B Baker Street"
							trim
						/>
					</b-form-group>

					<!-- City -->
					<b-form-group label="Ciudad" label-for="city">
						<b-form-input
							id="city"
							autocomplete="off"
							v-model="supplierData.city"
							trim
							placeholder="New York"
						/>
					</b-form-group>

					<!-- State -->
					<b-form-group label="Estado" label-for="state">
						<b-form-input
							id="state"
							v-model="supplierData.state"
							trim
							placeholder="New York"
						/>
					</b-form-group>

					<!-- Country -->
					<b-form-group label="País" label-for="country">
						<b-form-input
							id="country"
							autocomplete="off"
							v-model="supplierData.country"
							trim
							placeholder="United States"
						/>
					</b-form-group>

					<!-- Zip -->
					<b-form-group label="Código Postal" label-for="zip">
						<b-form-input
							id="zip"
							autocomplete="off"
							v-model="supplierData.zip"
							type="number"
							placeholder="10001"
							trim
						/>
					</b-form-group>

					<!-- Form Actions -->
					<div class="d-flex mt-2">
						<b-button
							v-ripple.400="'rgba(255, 255, 255, 0.15)'"
							variant="primary"
							class="mr-2"
							type="submit">
							Guardar
						</b-button>
						<b-button
							v-ripple.400="'rgba(186, 191, 199, 0.15)'"
							variant="outline-secondary"
							@click="hide">
							Cancelar
						</b-button>
					</div>
				</b-form>
			</validation-observer>
		</template>
	</b-sidebar>
</template>

<script>
import { BSidebar, BForm, BFormGroup, BFormInput, BFormTextarea, BButton } from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { required, alphaNum, email, password } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import SupplierProvider from '@/providers/inventories/Suppliers';
const SupplierResource = new SupplierProvider()

export default {
	components: {
		BSidebar,
		BForm,
		BFormGroup,
		BFormInput,
		BFormTextarea,
		BButton,

		// Form Validation
        ValidationProvider,
        ValidationObserver,
		ToastificationContent,
	},
	directives: {
		Ripple,
	},
	model: {
        prop: "isAddNewSupplierSidebarActive",
        event: "update:is-add-new-supplier-sidebar-active",
    },
	props: {
		suppliers: {
			type: Array,
			default: () => [],
		},
		isAddNewSupplierSidebarActive: {
            type: Boolean,
            required: true,
        },
		invoiceData: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props, { emit }) {

		// Use toast
    	const toast = useToast();

		const blankSupplierData = {
			name: null,
			email: null,
			phone: null,
			address: null,
			city: null,
			state: null,
			country: null,
			zip: null,
		}

		const supplierData = ref(JSON.parse(JSON.stringify(blankSupplierData)));

        const resetSupplierData = () => {
            supplierData.value = JSON.parse(JSON.stringify(blankSupplierData));
        };

		const { refFormObserver, getValidationState, resetForm } = formValidation(resetSupplierData);

		const onSubmit = async () => {

			try {
				const { data } = await SupplierResource.store(supplierData.value);

				if (data.success) {
					props.suppliers.push({
						id: data.data.id,
						name: data.data.name,
						full_address: data.data.full_address,
					});
					props.invoiceData.supplier_id = data.data.id;
					toast({
						component: ToastificationContent,
						props: {
							title: data.message,
							icon: "CheckIcon",
							variant: "success",
						},
					});
					
					resetSupplierData();					
					emit("update:is-add-new-supplier-sidebar-active", false);
				} else {
					toast({
						component: ToastificationContent,
						props: {
							title: data.message,
							icon: "XIcon",
							variant: "danger",
						},
					});
				}

			}catch(e){

				if (e.response.status === 422) {
					let errors = Object.values(e.response.data.errors)
      				errors = errors.flat()

					toast({
						component: ToastificationContent,
						props: {
							title: errors[0],
							icon: "XIcon",
							variant: "danger",
						},
					});

                } else {
					toast({
						component: ToastificationContent,
						props: {
							title: e.message,
							icon: "XIcon",
							variant: "danger",
						},
					});
                }
			}
		}

		return {
            supplierData,
            onSubmit,

            refFormObserver,
            getValidationState,
            resetForm,
        };
	},
}
</script>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-select.scss";
</style>
