<template>
    <b-card v-if="data" text-variant="center" class="card card-congratulations">
        <!-- images -->
        <b-img
            :src="require('@/assets/images/elements/decore-left.png')"
            class="congratulations-img-left"
        />
        <b-img
            :src="require('@/assets/images/elements/decore-right.png')"
            class="congratulations-img-right"
        />
        <!--/ images -->

        <!-- <b-avatar variant="primary" size="70" class="shadow mb-2">
            <feather-icon size="28" :icon="data.totalEarningCurrentDay > 0 ? 'AwardIcon' : 'FrownIcon'"/>
        </b-avatar> -->
        <h1 class="mb-1 mt-50 text-white">
            {{ data.totalEarningCurrentDay > 0 ? $t('dashboard_doctor_congrulations') : $t('dashboard_doctor_no_congrulations')}}
            {{ userName }},
        </h1>
        <b-card-text class="m-auto w-75">
            {{ data.totalEarningCurrentDay > 0 ? $t('dashboard_doctor_accumulated_payment_today').replace(':payments',  formatPrice(data.totalEarningCurrentDay)) : $t('dashboard_doctor_no_accumulated_payment_today') }}
        </b-card-text>        
    </b-card>
</template>

<script>
import store from "@/store"
import { BCard, BImg, BAvatar, BCardText } from "bootstrap-vue";

export default {
    components: {
        BCard,
        BAvatar,
        BImg,
        BCardText,
    },
    props: {
        data: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        userName() {
            return store.getters['auth/getUserName']
        }
    }
};
</script>
