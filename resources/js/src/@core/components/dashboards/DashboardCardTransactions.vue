<template>
    <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
        <b-card v-if="data" class="card-transaction" no-body>
            <b-card-header>
                <b-card-title>{{ $t('payments.transactions') }}</b-card-title>
            </b-card-header>

            <b-card-body>
                <div v-for="transaction in data" :key="transaction.mode" class="transaction-item">
                    <b-media no-body>
                        <b-media-aside>
                            <b-avatar rounded size="42" :variant="transaction.avatarVariant">
                                <feather-icon size="18" :icon="transaction.avatar" />
                            </b-avatar>
                        </b-media-aside>
                        <b-media-body>
                            <h6 class="transaction-title">
                                {{ transaction.mode }}
                            </h6>
                            <small>{{ transaction.types }}</small>
                        </b-media-body>
                    </b-media>
                    <div class="font-weight-bolder" :class="transaction.deduction ? 'text-danger' : 'text-success'">
                        {{ transaction.payment }}
                    </div>
                </div>
            </b-card-body>
        </b-card>
    </b-overlay>
</template>
  
<script>
import {
    BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar, BDropdown, BDropdownItem,
    BOverlay, BSpinner,
} from 'bootstrap-vue'

export default {
    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardBody,
        BMediaBody,
        BMedia,
        BMediaAside,
        BAvatar,
        BDropdown,
        BDropdownItem,
        BOverlay, BSpinner,
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: () => false,
        }
    },
}
</script>
  