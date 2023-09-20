<template>
    <b-card>
        <b-row>
            <!-- User Info: Left col -->
            <b-col
                cols="21"
                xl="6"
                class="d-flex justify-content-between flex-column"
            >
                <!-- User Avatar & Action Buttons -->
                <div class="d-flex justify-content-start">
                    <b-avatar
                        :src="account.name"
                        :text="avatarText(account.name)"
                        :variant="`light-success`"
                        size="104px"
                        rounded
                    />
                    <div class="d-flex flex-column ml-1">
                        <div class="mb-1">
                            <h4 class="mb-0">
                                {{ account.name }}
                            </h4>
                            <span class="card-text">{{ account.email }}</span>
                        </div>
                        <div class="d-flex flex-wrap">
                            <span class="card-text font-weight-bold">{{ $t('tenants.id')}}: {{ account.id }}</span>
                            <span class="card-text font-weight-bold">{{ $t('tenants.domain')}}: {{ account.domain }}</span>
                        </div>
                        <span class="card-text font-weight-bold">{{ $t('tenants.primary_domain')}}: {{ account.domain_url }}</span>
                    </div>
                </div>

                <!-- User Stats -->
                <div class="d-flex align-items-center mt-2">
                    <!-- <div class="d-flex align-items-center mr-2">
                        <b-avatar variant="light-primary" rounded>
                            <feather-icon icon="DollarSignIcon" size="18" />
                        </b-avatar>
                        <div class="ml-1">
                            <h5 class="mb-0">23.3k</h5>
                            <small>Monthly Sales</small>
                        </div>
                    </div>

                    <div class="d-flex align-items-center">
                        <b-avatar variant="light-success" rounded>
                            <feather-icon icon="TrendingUpIcon" size="18" />
                        </b-avatar>
                        <div class="ml-1">
                            <h5 class="mb-0">$99.87k</h5>
                            <small>Annual Profit</small>
                        </div>
                    </div> -->
                </div>
            </b-col>

            <!-- Right Col: Table -->
            <b-col cols="12" xl="6">
                <table class="mt-2 mt-xl-0 w-100">
                    <tr>
                        <th class="pb-50">
                            <feather-icon icon="UserIcon" class="mr-75" />
                            <span class="font-weight-bold">Company</span>
                        </th>
                        <td class="pb-50">
                            {{ account.company }}
                        </td>
                    </tr>
                    <tr>
                        <th class="pb-50">
                            <feather-icon icon="CheckIcon" class="mr-75" />
                            <span class="font-weight-bold">Subscribed</span>
                        </th>
                        <td class="pb-50 text-capitalize">
                            <b-badge pill :variant="`light-${resolveStatusBadge(account.is_subscribed)}`" class="text-capitalize">
                                {{ resolveTranlateStatusActive(account.is_subscribed) }}
                            </b-badge>
                        </td>
                    </tr>
                    <tr>
                        <th class="pb-50">
                            <feather-icon icon="SlashIcon" class="mr-75" />
                            <span class="font-weight-bold">Banned</span>
                        </th>
                        <td class="pb-50 text-capitalize">
                            <b-badge pill :variant="`light-${resolveStatusBadge(account.is_banned)}`" class="text-capitalize">
                                {{ formatActive(account.is_banned) }}
                            </b-badge>
                        </td>
                    </tr>
                    <!-- Trial started at -->
                    <tr>
                        <th class="pb-50">
                            <feather-icon icon="CalendarIcon" class="mr-75" />
                            <span class="font-weight-bold">Trial Started At</span>
                        </th>
                        <td class="pb-50">
                            {{ formatDate(account.created_at) }}
                        </td>
                    </tr>
                    <!-- Trial ends at -->
                    <tr v-if="account.on_trial">
                        <th class="pb-50">
                            <feather-icon icon="CalendarIcon" class="mr-75" />
                            <span class="font-weight-bold">Trial Ends At</span>
                        </th>
                        <td class="pb-50">
                            {{ formatDate(account.trial_ends_at) }}
                        </td>
                    </tr>
                    <!-- Created at -->
                    <tr>
                        <th class="pb-50">
                            <feather-icon icon="CalendarIcon" class="mr-75" />
                            <span class="font-weight-bold">Created At</span>
                        </th>
                        <td class="pb-50">
                            {{ formatDate(account.created_at) }}
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import store from "@/store"
import { BCard, BButton, BAvatar, BRow, BCol, BBadge } from "bootstrap-vue";

export default {
    components: {
        BCard,
        BButton,
        BRow,
        BCol,
        BAvatar,
        BBadge,
    },   
    setup() {
        const user = store.getters['auth/getUser']
        const account = store.getters['auth/getCurrentAccount']
        return {
            user,
            account,           
        };
    },
};
</script>

<style></style>
