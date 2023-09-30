<template>
    <b-card>
        <!-- profile picture -->
        <div v-if="headerData.header" class="position-relative">
            <div class="profile-img-container d-flex align-items-center">
                <div class="profile-img">
                    <b-img class="d-none d-sm-block" :src="headerData.header.avatar" height="100" rounded :alt="headerData.header.username" />
                </div>
                <!-- profile title -->
                <div class="profile-title ml-3">
                    <h2 class="text-white_">
                        {{ headerData.header.username }}<br>
                        <small class="text-muted">{{ headerData.userAbout.email }}</small>
                    </h2>
                    <p>
                        {{$t('role')}}: {{ headerData.header.designation }}<br>                        
                        {{$t('joined')}}: <span class="text-capitalize">{{ headerData.userAbout.joined }}</span>
                    </p>                    
                </div>
                <!--/ profile title -->
            </div>
        </div>
        <!--/ profile picture -->
    </b-card>
</template>

<script>
import {
    BCard,
    BImg,
    BNavbar,
    BNavbarToggle,
    BCollapse,
    BTabs,
    BNavItem,
    BButton,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

export default {
    components: {
        BCard,
        BTabs,
        BButton,
        BNavItem,
        BNavbar,
        BNavbarToggle,
        BCollapse,
        BImg,
    },
    directives: {
        Ripple,
    },
    props: {
        headerData: {
            type: Object,
            default: () => { },
        },
    },
};
</script>
