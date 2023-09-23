<template>
    <b-nav-item-dropdown
        class="dropdown-notification mr-25"
        menu-class="dropdown-menu-media"
        right
    >
        <template #button-content>
            <feather-icon
                :badge="notifications.length"
                badge-classes="bg-danger"
                class="text-body"
                icon="BellIcon"
                size="21"
            />
        </template>

        <!-- Header -->
        <li class="dropdown-menu-header">
            <div class="dropdown-header d-flex">
                <h4 class="notification-title mb-0 mr-auto">{{$t('notifications.plural')}}</h4>
                <b-badge pill variant="light-primary"> {{$t('new_notifications').replace(':quantity', notifications.length)}} </b-badge>
            </div>
        </li>

        <!-- Notifications -->
        <vue-perfect-scrollbar :settings="perfectScrollbarSettings" class="scrollable-container media-list scroll-area" tagname="li">
            <b-overlay :show="loading" blur="2px" variant="transparent" rounded="lg" opacity="0.85">
                <template #overlay>
                    <div class="d-flex align-items-center">
                        <b-spinner small type="grow" variant="secondary" />
                        <b-spinner type="grow" variant="dark" />
                        <b-spinner small type="grow" variant="secondary" />
                    </div>
                </template>
                <b-link v-for="(notification, index) in notifications" :key="index+notification.id" @click="onRead(notification)">
                    <b-media>
                        <template #aside>
                            <b-avatar size="32" :variant="notification.type">
                                <feather-icon :icon="notification.icon" />
                            </b-avatar>
                        </template>
                        <p class="media-heading">
                            <span class="font-weight-bolder">
                                {{ notification.title }}
                            </span>
                        </p>
                        <small class="notification-text_ font-weight-bolder" v-html="notification.subtitle"></small>
                    </b-media>
                </b-link>
            </b-overlay>
        </vue-perfect-scrollbar>

        <!-- Cart Footer -->
        <li v-if="notifications.length > 0" class="dropdown-menu-footer">
            <b-button
                :disabled="loading"
                @click="onReadAll"
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                block
                >{{$t('notifications.read_all')}}</b-button
            >
        </li>
    </b-nav-item-dropdown>
</template>

<script>
import _ from "lodash";
import store from "@/store";
import { firebase, auth, messaging } from "@/firebase";
import {
    BNavItemDropdown,
    BBadge,
    BMedia,
    BLink,
    BAvatar,
    BButton,
    BFormCheckbox,
    BOverlay, BSpinner,
} from "bootstrap-vue";

import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Ripple from "vue-ripple-directive";
import * as helper from "@/libs/helpers";

import NotificationProvider from "@/providers/notifications";
import {
    ref,
    onUnmounted,
    onMounted,
    watch,
    computed,    
} from "@vue/composition-api";
const NotificationResource = new NotificationProvider();

export default {
    components: {
        BNavItemDropdown,
        BBadge,
        BMedia,
        BLink,
        BAvatar,
        VuePerfectScrollbar,
        BButton,
        BFormCheckbox,
        BOverlay, BSpinner,
    },
    directives: {
        Ripple,
    },
    created() {
        // this.listenNotifications()
    },
    mounted() {
        // this.listenNotifications()

        // this.checkTokenDevice(store.getters['auth/getUser'].device_token)
    },
    methods: {
        getRegToken(argument) {
            messaging
                .getToken()
                .then(function (currentToken) {
                    if (currentToken) {
                        saveToken(currentToken);
                    } else {
                        this.danger(
                            "No Instance ID token available. Request permission to generate one.",
                            "Error",
                            "AlertCircleIcon"
                        );
                    }
                })
                .catch(function (err) {
                    this.danger(
                        "An error occurred while retrieving token.",
                        "Error",
                        "AlertCircleIcon"
                    );
                    console.log(
                        "An error occurred while retrieving token. ",
                        err
                    );
                });
        },
        saveToken(currentToken) {
            NotificationResource.storeDeviceToken(currentToken);
        },
        checkTokenDevice(deviceToken) {
            if ("Notification" in window && firebase.messaging.isSupported()) {
                if (!deviceToken) {
                    const messaging = firebase.messaging();
                    messaging
                        .getToken({
                            vapidKey:
                                localStorage.getItem("vapid_key"),
                        })
                        .then((currentToken) => {
                            if (currentToken) {
                                this.saveToken(currentToken);
                            } else {
                                console.warn(
                                    "Failed to get token."
                                );
                            }
                        });
                    }
            }
        },
        listenNotifications () {

			window.Echo.private(`App.Models.User.${store.getters['auth/getUserId']}`)
			.notification((e) => {
                console.warn(e)
				if (! ('Notification' in window)) {
					alert('Web Notification is not supported');
					return;
				}
				Notification.requestPermission(permission => {
					this.fetchNotifications();
					let notification = new Notification('Soft-Dental', {
						body: `${e.title}, ${e.message}`,
						icon: localStorage.getItem("logo") // optional image url
					});
				
					// link to page on clicking the notification
					// notification.onclick = () => {
					// 	window.open(window.location.href);
					// };
				});
			}).error((error) => {
                console.error('Error en la suscripción de Pusher:', error);
            });
		}
    },
    setup() {
        const loading = ref(false);

        const notifications = ref([]);

        const systemNotifications = [
            // {
            //     title: "Server down",
            //     subtitle: "USA Server is down due to hight CPU usage",
            //     type: "light-danger",
            //     icon: "XIcon",
            // },
            // {
            //     title: "Sales report generated",
            //     subtitle: "Last month sales report generated",
            //     type: "light-success",
            //     icon: "CheckIcon",
            // },
            // {
            //     title: "High memory usage",
            //     subtitle: "BLR Server using high memory",
            //     type: "light-warning",
            //     icon: "AlertTriangleIcon",
            // },
        ];

        const perfectScrollbarSettings = {
            maxScrollbarLength: 60,
            wheelPropagation: false,
        };

        const fetchNotifications = async () => {
            loading.value = true;
            const { data } = await NotificationResource.fetch();
            loading.value = false;

            
            notifications.value = data.map(item => ({
                id: item.id,
                title: item.data.title,
                icon: item.data.data?.iconTask,
                subtitle: item.data.message,
                type: item.data.data?.typeTask,
            }))

            console.log(notifications.value)


        };

        onMounted(async () => {
            await fetchNotifications();
        });

        const onRead  = async (notification) => {
			loading.value = true		
			await NotificationResource.update(notification.id, {
                read_at: true,
            });
			loading.value = false
            notifications.value = notifications.value.filter(i => i.id !== notification.id);
		}

        const onReadAll = async () => {
			loading.value = true
			const item = _.first(notifications.value);
			const { data } = await NotificationResource.update(item.id, {
                read_all: true,
            });
			loading.value = false
            notifications.value = data.data.map(item => ({
                id: item.id,
                title: item.data.title,
                icon: item.data.task.iconTask,
                subtitle: item.data.task.description,
                type: item.data.task.typeTask,
            }))
		}

        // const listenNotifications = () => {            
        //     window.Echo.private(`App.Models.User.${store.getters['auth/getUserId']}`)
		// 	.notification((e) => {
		// 		if (! ('Notification' in window)) {
		// 			alert('Web Notification is not supported');
		// 			return;
		// 		}
		// 		Notification.requestPermission(permission => {
		// 			fetchNotifications();
		// 			let notification = new Notification('Soft-Dental', {
		// 				body: `${e.title}, ${e.message}`,
		// 				icon: localStorage.getItem("logo") // optional image url
		// 			});
				
		// 			// link to page on clicking the notification
		// 			// notification.onclick = () => {
		// 			// 	window.open(window.location.href);
		// 			// };
		// 		});
		// 	});
        // }

        return {
            loading,
            notifications,
            systemNotifications,
            perfectScrollbarSettings,
            onRead,
            onReadAll,
            // listenNotifications,
        };
    },
};
</script>

<style></style>
