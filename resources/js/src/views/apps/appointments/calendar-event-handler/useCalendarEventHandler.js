import { ref, computed, watch } from "@vue/composition-api";
import store from "@/store";

// Providers
import UserProvider from "@/providers/Users";
import PatientProvider from "@/providers/Patients";

const UserResource = new UserProvider();
const PatientResource = new PatientProvider();

export default function useCalendarEventHandler(props, clearForm, emit) {
    // ------------------------------------------------
    // eventLocal
    // ------------------------------------------------
    const eventLocal = ref(JSON.parse(JSON.stringify(props.event.value)));

    const resetEventLocal = () => {
        eventLocal.value = JSON.parse(JSON.stringify(props.event.value));
    };
    watch(props.event, () => {
        resetEventLocal();
    });

    // ------------------------------------------------
    // isEventHandlerSidebarActive
    // * Clear form if sidebar is closed
    // ------------------------------------------------
    watch(props.isEventHandlerSidebarActive, (val) => {
        // ? Don't reset event till transition is finished
        if (!val) {
            setTimeout(() => {
                //clearForm.value();
            }, 350);
        }
    });
    // ------------------------------------------------
    // calendarOptions
    // ------------------------------------------------
    const calendarOptions = computed(
        () => store.state.calendar.calendarOptions
    );

    const onSubmit = () => {
        const eventData = JSON.parse(JSON.stringify(eventLocal));
        eventData.value.professional = store.state.calendar.selectedProfessional

        // * If event has id => Edit Event
        // Emit event for add/update event
        if (props.event.value.id) emit("update-event", eventData.value);
        else emit("add-event", eventData.value);

        // Echo.channel('appointment-tracker')
        //     .listen('AppointmentStatusChangeEvent', (e) => {

        //         console.log(e)

        //     });

        // Close sidebar
        emit("update:is-event-handler-sidebar-active", false);
    };

    // *===============================================---*
    // *--------- UI ---------------------------------------*
    // *===============================================---*

    // ------------------------------------------------
    // guestOptions
    // ------------------------------------------------

    /* eslint-disable global-require */
    const guestsOptions = [
        {
            avatar: require("@/assets/images/avatars/1-small.png"),
            name: "Jane Foster",
        },
        {
            avatar: require("@/assets/images/avatars/3-small.png"),
            name: "Donna Frank",
        },
        {
            avatar: require("@/assets/images/avatars/5-small.png"),
            name: "Gabrielle Robertson",
        },
        {
            avatar: require("@/assets/images/avatars/7-small.png"),
            name: "Lori Spears",
        },
        {
            avatar: require("@/assets/images/avatars/9-small.png"),
            name: "Sandy Vega",
        },
        {
            avatar: require("@/assets/images/avatars/11-small.png"),
            name: "Cheryl May",
        },
    ];

    const patientData = [];
    const avatar = require("@/assets/images/avatar_default.png");
    // PatientResource.filterList().then((response) => {
    //     const data = response.data.data;
    //     patientData.value = data.data.map((patient) => ({
    //         id: patient.id,
    //         name: patient.full_name,
    //         avatar: patient.has_media ? patient.media[0].icon : avatar,
    //     }));
    // });

    return {
        eventLocal,
        resetEventLocal,
        calendarOptions,

        // UI
        guestsOptions,
        onSubmit,
        patientData,
    };
}
