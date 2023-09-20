<template>
    <div class="sidebar-wrapper d-flex justify-content-between flex-column flex-grow-1">
        <div class="p-1">
            <b-button v-if="canAccess('appointments.create')" v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                aria-controls="sidebar-add-new-event" :aria-expanded="String(isEventHandlerSidebarActive)" variant="primary"
                block :to="{ name: 'appointment-add' }">
                {{ $t("appointments.add_event") }}
            </b-button>

            <!-- Professionals -->
            <div class="mt-3">
                <b-form-group :label="$t('appointments.professional')" label-for="add-guests">
                    <v-select :disabled="isProfessional" v-model="selectedProfessional" :options="professionals"
                        label="name" input-id="add-professional" 
                        :clearable="false">
                    </v-select>
                </b-form-group>
            </div>

            <div class="mt-3">
                <h5 class="app-label section-label mb-1">
                    <span class="align-middle">{{ $t("appointments.state") }}</span>
                </h5>
                <b-form-checkbox v-model="checkAll" class="mb-1">
                    {{ $t("appointments.all_state") }}
                </b-form-checkbox>
                <b-form-group>
                    <b-form-checkbox-group v-model="selectedCalendars" name="event-filter" stacked>
                        <b-form-checkbox v-for="item in calendarOptions" :key="item.label" name="event-filter"
                            :value="item.label" class="mb-1" :class="`custom-control-${item.color}`">
                            {{ $t(`appointments.state_${item.label}`) }}
                        </b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
            </div>
        </div>

        <flat-pickr size="sm" ref="miniCalendar" v-model="selectedCurrentDate" class="form-control d-none"
            :config="{ inline: true, dateFormat: 'Y-m-d' }" />
        <b-img :src="require('@/assets/images/pages/calendar-illustration.png')" />

    </div>
</template>

<script>
import _ from "lodash";
import {
    BButton,
    BFormGroup,
    BFormCheckboxGroup,
    BFormCheckbox,
    BImg,
    BAvatar,
    BCol,
} from "bootstrap-vue";
// import { toMoment, toMomentDuration } from '@fullcalendar/moment'; // only for formatting
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import useCalendarSidebar from "./useCalendarSidebar";
import { ref, computed, watch, onMounted } from "@vue/composition-api";
import store from "@/store";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import moment from "moment";
// Providers
import UserProvider from "@/providers/Users";
const UserResource = new UserProvider();

export default {
    directives: {
        Ripple,
    },
    components: {
        BButton,
        BImg,
        BAvatar,
        BFormCheckbox,
        BFormGroup,
        BFormCheckboxGroup,
        vSelect,
        flatPickr,
        BCol,
    },
    props: {
        isEventHandlerSidebarActive: {
            type: Boolean,
            require: true,
        },
    },
    setup(props) {

        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
        }

        const {
            isLoading,
            calendarOptions,
            selectedCalendars,
            selectedProfessional,
            selectedPatient,
            checkAll,
            professionals,
            selectedCurrentDate,

        } = useCalendarSidebar();

        onMounted(() => {
            isLoading.value = true

        });

        const isProfessional = computed(
            () => store.state.auth.user?.roles[0].id === 4 || false
        );

        const changeDate = (val) => {
            if (val) {
                selectedCurrentDate.value = new Date(val).toISOString();
            }
        }

        return {
            isLoading,
            calendarOptions,
            selectedCalendars,
            selectedProfessional,
            selectedPatient,
            checkAll,
            professionals,
            isProfessional,
            changeDate,
            selectedCurrentDate,
        };
    },
};
</script>


<style lang="scss" scoped>
@import '@resources/scss/vue/libs/vue-flatpicker.scss';
</style>

<style>
.flatpickr-calendar {
    background: transparent;
    opacity: 0;
    display: none;
    text-align: center;
    visibility: hidden;
    padding: 0;
    -webkit-animation: none;
    animation: none;
    direction: ltr;
    border: 0;
    font-size: 12px !important;
    line-height: 24px;
    border-radius: 5px;
    position: absolute;
    width: 249px !important;
    min-width: 249px !important;
    max-width: 249px !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    background: #fff;
    -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgb(0 0 0 / 8%);
    box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgb(0 0 0 / 8%);
}

.dayContainer {
    padding: 0;
    outline: 0;
    text-align: left;
    width: 249px !important;
    min-width: 249px !important;
    max-width: 249px !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-transform: translate3d(0px, 0px, 0px);
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;
}

.flatpickr-current-month {
    font-size: 135%;
    line-height: inherit;
    font-weight: 300;
    color: inherit;
    position: absolute;
    /* width: 75%; */
    left: 12.5%;
    padding: 7.48px 0 0 0;
    line-height: 1;
    height: 34px;
    display: inline-block;
    text-align: center;
    -webkit-transform: translate3d(0px, 0px, 0px);
    transform: translate3d(0px, 0px, 0px);
}

.flatpickr-days {
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100% !important;
}

.flatpickr-day {
    background: none;
    border: 1px solid transparent;
    border-radius: 150px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #393939;
    cursor: pointer;
    font-weight: 400;
    width: 14.2857143%;
    -webkit-flex-basis: 14.2857143%;
    -ms-flex-preferred-size: 14.2857143%;
    flex-basis: 14.2857143%;
    max-width: 39px !important;
    height: 30px !important;
    line-height: 30px !important;
    margin: 0;
    display: inline-block;
    position: relative;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
}

.flatpickr-calendar.inline {
    display: block;
    position: relative;
    top: -15px;
}
</style>
