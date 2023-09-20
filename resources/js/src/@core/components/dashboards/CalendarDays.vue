<template>
    <div class="card-developer-meetup">
        <div class="meetup-header d-flex align-items-center">
            <div class="meetup-day">
                <b-button-group size="sm">
                    <b-button @click="decrementDay" size="sm" v-ripple.400="'rgba(113, 102, 240, 0.15)'" class="btn-icon"
                        variant="outline-primary">
                        <feather-icon icon="ChevronLeftIcon" />
                    </b-button>
                    <b-button @click="incrementDay" size="sm" v-ripple.400="'rgba(113, 102, 240, 0.15)'" class="btn-icon"
                        variant="outline-primary">
                        <feather-icon icon="ChevronRightIcon" />
                    </b-button>
                </b-button-group>

                <h6 class="mb-0 text-uppercase mt-2">
                    {{ formattedDateName }}
                </h6>
                <h3 class="mb-0">
                    {{ formattedDate }}
                </h3>
                <h6 class="mb-0 text-uppercase">
                    {{ formattedDateMonthName }}
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import { addDays, format } from 'date-fns';
import moment from "moment";
import _ from "lodash";
import Ripple from "vue-ripple-directive";
import vSelect from 'vue-select'
import {
    BCard, BImg, BCardBody, BCardText, BCardTitle, BMedia, BMediaAside, BAvatar, BAvatarGroup, VBTooltip, BMediaBody,
    BButtonToolbar, BButtonGroup, BButton, BTable, BLink, BBadge, BPagination, BRow, BCol,
    BInputGroupPrepend, BInputGroupAppend, BInputGroup, BFormInput,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import { Spanish } from "flatpickr/dist/l10n/es.js";

export default {
    components: {
        BCard,
        BImg,
        BCardBody,
        BCardText,
        BCardTitle,
        BMedia,
        BMediaAside,
        BAvatar,
        BAvatarGroup,
        BMediaBody,
        BButtonToolbar,
        BButtonGroup,
        BButton,
        BTable,
        BLink,
        BBadge,
        BPagination,
        BRow,
        BCol,
        BInputGroupPrepend,
        BInputGroupAppend,
        BInputGroup,
        BFormInput,

        //
        flatPickr,
        vSelect,
    },
    directives: {
        Ripple,
        'b-tooltip': VBTooltip,
    },
    props: {
        value: Date,
    },
    data() {
        return {
            loading: false,
        };
    },
    created() {
        if (store.state.auth.setting['language'] === "es") {
            flatpickr.localize(Spanish);
        }
    },
    computed: {
        formattedDate() {
            return moment(this.value).format('DD');
        },
        formattedDateName() {
            return moment(this.value).format('ddd');
        },
        formattedDateMonthName() {
            return moment(this.value).format('MMM, YYYY');
        }
    },
    async mounted() {

    },
    methods: {
        incrementDay() {
            const newDate = moment(this.value, 'DD').add(1, 'day');
            this.$emit('input', newDate.toDate());
        },
        decrementDay() {
            const newDate = moment(this.value, 'DD').subtract(1, 'day');
            this.$emit('input', newDate.toDate());
        },
    },
    watch: {
        value(value) {

        }

    },
};
</script>


<style lang="scss" scoped>
.card-developer-meetup .meetup-header {
    margin-bottom: 0rem;
}

.card-developer-meetup .meetup-header .meetup-day {
    border-right: 1px solid #d8d6de;
    padding-right: 3.3rem;
    margin-right: 1.3rem;
}
</style>



