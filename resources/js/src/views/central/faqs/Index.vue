<template>
    <div>
        <!-- Table Container Card -->
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                        <label>{{ $t('table_show') }}</label>
                        <v-select
                            v-model="perPage"
                            :options="perPageOptions"
                            :clearable="false"
                            class="per-page-selector d-inline-block mx-50"
                        />
                        <b-button variant="primary"  @click="onShowModalCreateUpdateFaq=true">                            
                            <span class="text-wrap">
                                {{ $t("add") }}
                            </span>
                        </b-button>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-input-group>
                                <b-form-input v-model="searchQuery" class="d-inline-block _mr-1" :placeholder="$t('search')"
                                @keyup.enter="getFaqs"/>
                                <b-input-group-prepend>
                                <b-button variant="primary" @click="getFaqs">
                                    <feather-icon icon="SearchIcon" />
                                </b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <b-table
                ref="refFaqsListTable"
                class="position-relative"
                :items="faqs"
                responsive
                :fields="columns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                :empty-text="$t('datatables.sZeroRecords')"
                :sort-desc.sync="sortDesc"
                :current-page="currentPage"
                busy.sync="loading"
                stacked="md"
            >
                <!-- Empty -->
                <template slot="empty">
                    <div v-if="loading" class="d-flex justify-content-center mb-1">
                        <b-spinner
                            style="width: 3rem; height: 3rem"
                            class="mr-1"
                            label="Loading..."
                            variant="primary"
                        />
                    </div>
                </template>

                <!-- Column: Id -->
                <template #cell(id)="data">
                    {{ data.index + 1}}
                </template> 

                <!-- Column: Icon -->
                <template #cell(icon)="data">
                    <div class="text-nowrap">
                        <feather-icon
                            :icon="data.item.icon"
                            size="18"
                            class="mr-50"
                            :class="`text-primary`"
                        />
                        <span class="align-text-top text-capitalize">{{ data.item.icon }}</span>
                    </div>
                </template> 

                <!-- Column: updated_at -->
                <template #cell(updated_at)="data">
                    {{ formatDate(data.item.updated_at)}}
                </template> 

                <!-- Column: Actions -->
                <template #cell(actions)="data">
                    <div class="demo-inline-spacing">
                        <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="btn-icon"
                            size="sm"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_edit')}`"
                            @click="editFaq(data.item)">
                            <feather-icon icon="EditIcon"/>
                        </b-button>

                        <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="danger"
                            class="btn-icon"
                            size="sm"
                            @click="deleteFaq(data.item)"
                            v-b-tooltip.hover.right="`${$t('button_tooltip_destroy')}`">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>
                   </div>
                </template>
            </b-table>

            <!-- Pagination -->
            <div v-if="faqs" class="mx-2 mb-2">
                    <b-row>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                            <span class="text-muted">{{ resolvePaginationTranslate(dataMeta) }}</span>
                        </b-col>
                        <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div class="mt-2 demo-spacing-0">
                                <b-pagination v-model="currentPage" :total-rows="totalFaqs" :per-page="perPage" size="lg"/>
                            </div>
                        </b-col>
                    </b-row>
                </div>
        </b-card>

        <!-- Modal CreateUpdate Faqs -->
        <b-modal
            ref="refModalCreateUpdateFaq"
            id="modalCreateUpdateFaq"
            :title="modalTitle"
            no-close-on-backdrop
            :ok-title="$t('save')"
            :cancel-title="$t('cancel')"
            hide-footer            
            @cancel="onShowModalCreateUpdateFaq=false"
            @hidden="onShowModalCreateUpdateFaq=false"
            :visible="onShowModalCreateUpdateFaq"
            size="lg"
            >
            <validation-observer ref="faqsRules">
                <b-form ref="form" @submit.prevent>
                    <b-row class="mt-2">
                        <b-col cols="12">
                            <b-form-group label="Icono" label-for="icono">
                                <v-select
                                    v-model="faq.icon"
                                    :options="icons" 
                                    :reduce="option => option.value"                                   
                                    input-id="icono"
                                    name="label"
                                    placeholder="Selecciona un icono">
                                    <template #option="{ label }">
                                        <feather-icon :icon="label"/>
                                        <span class="ml-50 align-middle"> {{ label }}</span>
                                    </template>
                                    <template #selected-option="{ label }">
                                        <feather-icon :icon="label"/>
                                        <span class="ml-50 align-middle"> {{ label }}</span>
                                    </template>
                                </v-select>
                            </b-form-group>
                        </b-col>

                        <!-- Title -->
                        <b-col cols="12" md="6">
                            <b-form-group :label="$t('faqs.fields.title')" :description="$t('faqs.fields.title_help')">
                                <validation-provider
                                    #default="{ errors }"
                                    :name="$t('faqs.fields.title')"
                                    rules="required">
                                        <b-form-input
                                            v-model="faq.title"
                                            id="title"
                                            type="text"
                                            :placeholder="$t('faqs.fields.title_placeholder')"
                                            :state="errors.length > 0 ? false:null"
                                    />
                                </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Subtitle -->
                        <b-col cols="12" md="6">
                            <b-form-group :label="$t('faqs.fields.subtitle')" :description="$t('faqs.fields.subtitle_help')">  
                                <validation-provider
                                    #default="{ errors }"
                                    :name="$t('faqs.fields.subtitle')"
                                    rules="required">                      
                                        <b-form-input
                                            :state="errors.length > 0 ? false:null"
                                            v-model="faq.subtitle"
                                            id="subtitle"
                                            type="text"
                                            :placeholder="$t('faqs.fields.subtitle_placeholder')"
                                        />
                                </validation-provider>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" class="mt-2">
                            <h4>Preguntas y respuestas</h4>
                        </b-col>
                        <b-col cols="12">
                            <hr>
                        </b-col>
                    </b-row>                    

                    <!-- Items -->
                    <b-row v-for="(item, index) in faq.faq_items" :key="index" ref="row" class="repeater-form mt-1">
                        <!-- Question -->
                        <b-col cols="12" md="12">
                            <b-form-group :label="$t('faqs.fields.items.question')" :description="$t('faqs.fields.items.question_help')" :label-for="`question-${index}`">
                                 <validation-provider
                                    #default="{ errors }"
                                    :name="`question-${index}`"
                                    rules="required">
                                    <b-form-input v-model="item.question" :id="`question-${index}`" type="text" :placeholder="$t('faqs.fields.items.question_placeholder')"
                                    :state="errors.length > 0 ? false : null"/>
                                 </validation-provider>
                            </b-form-group>
                        </b-col>
                         <b-col cols="12" md="12">
                            <b-form-group :label="$t('faqs.fields.items.answer')" :description="$t('faqs.fields.items.answer_help')" :label-for="`answer-${index}`">
                                 <validation-provider
                                    #default="{ errors }"
                                    :name="`answer-${index}`"
                                    rules="required">
                                    <b-form-input v-model="item.answer" :id="`answer-${index}`" type="text" :placeholder="$t('faqs.fields.items.answer')"
                                    :state="errors.length > 0 ? false : null"/>
                                 </validation-provider>
                            </b-form-group>
                        </b-col>

                        <!-- Remove Button -->
                        <b-col cols="12" md="12">
                            <b-button
                                v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                                variant="outline-primary"
                                class="mt-0 mt-md-2"
                                @click="faq.faq_items.push({ question: null, answer: null})"
                                size="sm"
                            >
                            <feather-icon icon="PlusIcon" class="mr-25"/>
                                <span>{{$t('button_add')}}</span>
                            </b-button>

                            <b-button
                                v-if="index !== 0"
                                v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                                variant="outline-danger"
                                class="mt-0 mt-md-2"
                                @click="faq.faq_items.splice(index, 1)"
                                size="sm">
                            <feather-icon icon="XIcon" class="mr-25"/>
                            <span>{{$t('button_delete')}}</span>
                            </b-button>
                        </b-col>
                    </b-row>

                    <b-row class="mt-3 text-right">
                        <b-col cols="12">
                            <b-button
                                :disabled="loading"
                                class="mr-1"
                                variant="danger"
                                @click="onShowModalCreateUpdateFaq=false">
                                {{$t('cancel')}}
                            </b-button>
                            <b-button
                                :disabled="loading"
                                variant="primary"
                                type="submit"
                                @click="validateForm">
                                {{$t('save')}}
                            </b-button>
                        </b-col>
                    </b-row>
                    
                </b-form>
            </validation-observer>
        </b-modal>
    </div>
</template>

<script>
import _ from "lodash";
import store from "@/store"
import {
    BCard,
    BRow,
    BCol,
    BInputGroupPrepend,
    BInputGroupAppend,
    BInputGroup,
    BFormInput,
    BFormGroup,
    BButton,
    BForm,    
    BTable,
    BMedia,
    BImg,
    BAvatar,
    BLink,
    BBadge,
    BIcon,
    BDropdown,
    BDropdownItem,
    BPagination,
    BSpinner,
    BOverlay,
    BTooltip, VBTooltip,
    BCardTitle,
    BCardText,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import vSelect from "vue-select";
import "animate.css";
import FaqProvider from "@/providers/Faqs";
const FaqResource = new FaqProvider();

export default {
    name: 'ListTenants',
    components: {
        BCard,
        BRow,
        BCol,
        BInputGroupPrepend,
        BInputGroupAppend,
        BInputGroup,
        BFormInput,
        BFormGroup,
        BButton,
        BForm,
        BTable,
        BMedia,
        BAvatar,
        BImg,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BSpinner,
        BIcon,
        vSelect,
        BTooltip,
        VBTooltip,
        BCardTitle,
        BCardText,
        BOverlay,
        ValidationProvider,
        ValidationObserver,     
    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
    data() {
        return { 
            loading: false,            
            perPageOptions: [10, 25, 50, 100],
            perPage: 10,
            currentPage: 1,
            totalFaqs: 0,
            sortBy: "name",
            sortDesc: false,
            searchQuery: null,
            from: 0,
            to: 0,
            columns: [
                {
                    key: "id",
                    label: this.$t("faqs.table.id"),
                },
                {
                    key: "icon",
                    label: this.$t("faqs.table.icon"),
                },
                {
                    key: "title",
                    label: this.$t("faqs.table.title"),
                },
                {
                    key: "subtitle",
                    label: this.$t("faqs.table.subtitle"),
                },
                {
                    key: "updated_at",
                    label: this.$t("faqs.table.updated_at"),
                },
                { 
                    key: "actions", 
                    label: this.$t("actions") 
                },
            ],
            faqs: [],
            faq: {
                icon: null,
                title: null,
                subtitle: null,
                faq_items: [{
                    question: null,
                    answer: null,
                }],
            },
            onShowModalCreateUpdateFaq: false,
            modalTitle: this.$t('modal_title_add').replace(':operator', this.$t('faqs.faq')),
            isEdit: false,
            icons: [
                { value: 'ActivityIcon', label: 'ActivityIcon' },
                { value: 'AirplayIcon', label: 'AirplayIcon' },
                { value: 'AlertCircleIcon', label: 'AlertCircleIcon' },
                { value: 'AlertOctagonIcon', label: 'AlertOctagonIcon' },
                { value: 'AlertTriangleIcon', label: 'AlertTriangleIcon' },
                { value: 'AlignCenterIcon', label: 'AlignCenterIcon' },
                { value: 'AlignJustifyIcon', label: 'AlignJustifyIcon' },
                { value: 'AlignLeftIcon', label: 'AlignLeftIcon' },
                { value: 'AlignRightIcon', label: 'AlignRightIcon' },
                { value: 'AnchorIcon', label: 'AnchorIcon' },
                { value: 'ApertureIcon', label: 'ApertureIcon' },
                { value: 'ArchiveIcon', label: 'ArchiveIcon' },
                { value: 'ArrowDownCircleIcon', label: 'ArrowDownCircleIcon' },
                { value: 'ArrowDownLeftIcon', label: 'ArrowDownLeftIcon' },
                { value: 'ArrowDownRightIcon', label: 'ArrowDownRightIcon' },
                { value: 'ArrowDownIcon', label: 'ArrowDownIcon' },
                { value: 'ArrowLeftCircleIcon', label: 'ArrowLeftCircleIcon' },
                { value: 'ArrowLeftIcon', label: 'ArrowLeftIcon' },
                { value: 'ArrowRightCircleIcon', label: 'ArrowRightCircleIcon' },
                { value: 'ArrowRightIcon', label: 'ArrowRightIcon' },
                { value: 'ArrowUpCircleIcon', label: 'ArrowUpCircleIcon' },
                { value: 'ArrowUpLeftIcon', label: 'ArrowUpLeftIcon' },
                { value: 'ArrowUpRightIcon', label: 'ArrowUpRightIcon' },
                { value: 'ArrowUpIcon', label: 'ArrowUpIcon' },
                { value: 'AtSignIcon', label: 'AtSignIcon' },
                { value: 'AwardIcon', label: 'AwardIcon' },
                { value: 'BarChart2Icon', label: 'BarChart2Icon' },
                { value: 'BarChartIcon', label: 'BarChartIcon' },
                { value: 'BatteryChargingIcon', label: 'BatteryChargingIcon' },
                { value: 'BatteryIcon', label: 'BatteryIcon' },
                { value: 'BellOffIcon', label: 'BellOffIcon' },
                { value: 'BellIcon', label: 'BellIcon' },
                { value: 'BluetoothIcon', label: 'BluetoothIcon' },
                { value: 'BoldIcon', label: 'BoldIcon' },
                { value: 'BookOpenIcon', label: 'BookOpenIcon' },
                { value: 'BookIcon', label: 'BookIcon' },
                { value: 'BookmarkIcon', label: 'BookmarkIcon' },
                { value: 'BoxIcon', label: 'BoxIcon' },
                { value: 'BriefcaseIcon', label: 'BriefcaseIcon' },
                { value: 'CalendarIcon', label: 'CalendarIcon' },
                { value: 'CameraOffIcon', label: 'CameraOffIcon' },
                { value: 'CameraIcon', label: 'CameraIcon' },
                { value: 'CastIcon', label: 'CastIcon' },
                { value: 'CheckCircleIcon', label: 'CheckCircleIcon' },
                { value: 'CheckSquareIcon', label: 'CheckSquareIcon' },
                { value: 'CheckIcon', label: 'CheckIcon' },
                { value: 'ChevronDownIcon', label: 'ChevronDownIcon' },
                { value: 'ChevronLeftIcon', label: 'ChevronLeftIcon' },
                { value: 'ChevronRightIcon', label: 'ChevronRightIcon' },
                { value: 'ChevronUpIcon', label: 'ChevronUpIcon' },
                { value: 'ChevronsDownIcon', label: 'ChevronsDownIcon' },
                { value: 'ChevronsLeftIcon', label: 'ChevronsLeftIcon' },
                { value: 'ChevronsRightIcon', label: 'ChevronsRightIcon' },
                { value: 'ChevronsUpIcon', label: 'ChevronsUpIcon' },
                { value: 'ChromeIcon', label: 'ChromeIcon' },
                { value: 'CircleIcon', label: 'CircleIcon' },
                { value: 'ClipboardIcon', label: 'ClipboardIcon' },
                { value: 'ClockIcon', label: 'ClockIcon' },
                { value: 'CloudDrizzleIcon', label: 'CloudDrizzleIcon' },
                { value: 'CloudLightningIcon', label: 'CloudLightningIcon' },
                { value: 'CloudOffIcon', label: 'CloudOffIcon' },
                { value: 'CloudRainIcon', label: 'CloudRainIcon' },
                { value: 'CloudSnowIcon', label: 'CloudSnowIcon' },
                { value: 'CloudIcon', label: 'CloudIcon' },
                { value: 'CodeIcon', label: 'CodeIcon' },
                { value: 'CodepenIcon', label: 'CodepenIcon' },
                { value: 'CodesandboxIcon', label: 'CodesandboxIcon' },
                { value: 'CoffeeIcon', label: 'CoffeeIcon' },
                { value: 'ColumnsIcon', label: 'ColumnsIcon' },
                { value: 'CommandIcon', label: 'CommandIcon' },
                { value: 'CompassIcon', label: 'CompassIcon' },
                { value: 'CopyIcon', label: 'CopyIcon' },
                { value: 'CornerDownLeftIcon', label: 'CornerDownLeftIcon' },
                { value: 'CornerDownRightIcon', label: 'CornerDownRightIcon' },
                { value: 'CornerLeftDownIcon', label: 'CornerLeftDownIcon' },
                { value: 'CornerLeftUpIcon', label: 'CornerLeftUpIcon' },
                { value: 'CornerRightDownIcon', label: 'CornerRightDownIcon' },
                { value: 'CornerRightUpIcon', label: 'CornerRightUpIcon' },
                { value: 'CornerUpLeftIcon', label: 'CornerUpLeftIcon' },
                { value: 'CornerUpRightIcon', label: 'CornerUpRightIcon' },
                { value: 'CpuIcon', label: 'CpuIcon' },
                { value: 'CreditCardIcon', label: 'CreditCardIcon' },
                { value: 'CropIcon', label: 'CropIcon' },
                { value: 'CrosshairIcon', label: 'CrosshairIcon' },
                { value: 'DatabaseIcon', label: 'DatabaseIcon' },
                { value: 'DeleteIcon', label: 'DeleteIcon' },
                { value: 'DiscIcon', label: 'DiscIcon' },
                { value: 'DivideCircleIcon', label: 'DivideCircleIcon' },
                { value: 'DivideSquareIcon', label: 'DivideSquareIcon' },
                { value: 'DivideIcon', label: 'DivideIcon' },
                { value: 'DollarSignIcon', label: 'DollarSignIcon' },
                { value: 'DownloadCloudIcon', label: 'DownloadCloudIcon' },
                { value: 'DownloadIcon', label: 'DownloadIcon' },
                { value: 'DribbbleIcon', label: 'DribbbleIcon' },
                { value: 'DropletIcon', label: 'DropletIcon' },
                { value: 'Edit2Icon', label: 'Edit2Icon' },
                { value: 'Edit3Icon', label: 'Edit3Icon' },
                { value: 'EditIcon', label: 'EditIcon' },
                { value: 'ExternalLinkIcon', label: 'ExternalLinkIcon' },
                { value: 'EyeOffIcon', label: 'EyeOffIcon' },
                { value: 'EyeIcon', label: 'EyeIcon' },
                { value: 'FacebookIcon', label: 'FacebookIcon' },
                { value: 'FastForwardIcon', label: 'FastForwardIcon' },
                { value: 'FeatherIcon', label: 'FeatherIcon' },
                { value: 'FigmaIcon', label: 'FigmaIcon' },
                { value: 'FileMinusIcon', label: 'FileMinusIcon' },
                { value: 'FilePlusIcon', label: 'FilePlusIcon' },
                { value: 'FileTextIcon', label: 'FileTextIcon' },
                { value: 'FileIcon', label: 'FileIcon' },
                { value: 'FilmIcon', label: 'FilmIcon' },
                { value: 'FilterIcon', label: 'FilterIcon' },
                { value: 'FlagIcon', label: 'FlagIcon' },
                { value: 'FolderMinusIcon', label: 'FolderMinusIcon' },
                { value: 'FolderPlusIcon', label: 'FolderPlusIcon' },
                { value: 'FolderIcon', label: 'FolderIcon' },
                { value: 'FramerIcon', label: 'FramerIcon' },
                { value: 'FrownIcon', label: 'FrownIcon' },
                { value: 'GiftIcon', label: 'GiftIcon' },
                { value: 'GitBranchIcon', label: 'GitBranchIcon' },
                { value: 'GitCommitIcon', label: 'GitCommitIcon' },
                { value: 'GitMergeIcon', label: 'GitMergeIcon' },
                { value: 'GitPullRequestIcon', label: 'GitPullRequestIcon' },
                { value: 'GithubIcon', label: 'GithubIcon' },
                { value: 'GitlabIcon', label: 'GitlabIcon' },
                { value: 'GlobeIcon', label: 'GlobeIcon' },
                { value: 'GridIcon', label: 'GridIcon' },
                { value: 'HardDriveIcon', label: 'HardDriveIcon' },
                { value: 'HashIcon', label: 'HashIcon' },
                { value: 'HeadphonesIcon', label: 'HeadphonesIcon' },
                { value: 'HeartIcon', label: 'HeartIcon' },
                { value: 'HelpCircleIcon', label: 'HelpCircleIcon' },
                { value: 'HexagonIcon', label: 'HexagonIcon' },
                { value: 'HomeIcon', label: 'HomeIcon' },
                { value: 'ImageIcon', label: 'ImageIcon' },
                { value: 'InboxIcon', label: 'InboxIcon' },
                { value: 'InfoIcon', label: 'InfoIcon' },
                { value: 'InstagramIcon', label: 'InstagramIcon' },
                { value: 'ItalicIcon', label: 'ItalicIcon' },
                { value: 'KeyIcon', label: 'KeyIcon' },
                { value: 'LayersIcon', label: 'LayersIcon' },
                { value: 'LayoutIcon', label: 'LayoutIcon' },
                { value: 'LifeBuoyIcon', label: 'LifeBuoyIcon' },
                { value: 'Link2Icon', label: 'Link2Icon' },
                { value: 'LinkIcon', label: 'LinkIcon' },
                { value: 'LinkedinIcon', label: 'LinkedinIcon' },
                { value: 'ListIcon', label: 'ListIcon' },
                { value: 'LoaderIcon', label: 'LoaderIcon' },
                { value: 'LockIcon', label: 'LockIcon' },
                { value: 'LogInIcon', label: 'LogInIcon' },
                { value: 'LogOutIcon', label: 'LogOutIcon' },
                { value: 'MailIcon', label: 'MailIcon' },
                { value: 'MapPinIcon', label: 'MapPinIcon' },
                { value: 'MapIcon', label: 'MapIcon' },
                { value: 'Maximize2Icon', label: 'Maximize2Icon' },
                { value: 'MaximizeIcon', label: 'MaximizeIcon' },
                { value: 'MehIcon', label: 'MehIcon' },
                { value: 'MenuIcon', label: 'MenuIcon' },
                { value: 'MessageCircleIcon', label: 'MessageCircleIcon' },
                { value: 'MessageSquareIcon', label: 'MessageSquareIcon' },
                { value: 'MicOffIcon', label: 'MicOffIcon' },
                { value: 'MicIcon', label: 'MicIcon' },
                { value: 'Minimize2Icon', label: 'Minimize2Icon' },
                { value: 'MinimizeIcon', label: 'MinimizeIcon' },
                { value: 'MinusCircleIcon', label: 'MinusCircleIcon' },
                { value: 'MinusSquareIcon', label: 'MinusSquareIcon' },
                { value: 'MinusIcon', label: 'MinusIcon' },
                { value: 'MonitorIcon', label: 'MonitorIcon' },
                { value: 'MoonIcon', label: 'MoonIcon' },
                { value: 'MoreHorizontalIcon', label: 'MoreHorizontalIcon' },
                { value: 'MoreVerticalIcon', label: 'MoreVerticalIcon' },
                { value: 'MousePointerIcon', label: 'MousePointerIcon' },
                { value: 'MoveIcon', label: 'MoveIcon' },
                { value: 'MusicIcon', label: 'MusicIcon' },
                { value: 'Navigation2Icon', label: 'Navigation2Icon' },
                { value: 'NavigationIcon', label: 'NavigationIcon' },
                { value: 'OctagonIcon', label: 'OctagonIcon' },
                { value: 'PackageIcon', label: 'PackageIcon' },
                { value: 'PaperclipIcon', label: 'PaperclipIcon' },
                { value: 'PauseCircleIcon', label: 'PauseCircleIcon' },
                { value: 'PauseIcon', label: 'PauseIcon' },
                { value: 'PenToolIcon', label: 'PenToolIcon' },
                { value: 'PercentIcon', label: 'PercentIcon' },
                { value: 'PhoneCallIcon', label: 'PhoneCallIcon' },
                { value: 'PhoneForwardedIcon', label: 'PhoneForwardedIcon' },
                { value: 'PhoneIncomingIcon', label: 'PhoneIncomingIcon' },
                { value: 'PhoneMissedIcon', label: 'PhoneMissedIcon' },
                { value: 'PhoneOffIcon', label: 'PhoneOffIcon' },
                { value: 'PhoneOutgoingIcon', label: 'PhoneOutgoingIcon' },
                { value: 'PhoneIcon', label: 'PhoneIcon' },
                { value: 'PieChartIcon', label: 'PieChartIcon' },
                { value: 'PlayCircleIcon', label: 'PlayCircleIcon' },
                { value: 'PlayIcon', label: 'PlayIcon' },
                { value: 'PlusCircleIcon', label: 'PlusCircleIcon' },
                { value: 'PlusSquareIcon', label: 'PlusSquareIcon' },
                { value: 'PlusIcon', label: 'PlusIcon' },
                { value: 'PocketIcon', label: 'PocketIcon' },
                { value: 'PowerIcon', label: 'PowerIcon' },
                { value: 'PrinterIcon', label: 'PrinterIcon' },
                { value: 'RadioIcon', label: 'RadioIcon' },
                { value: 'RefreshCcwIcon', label: 'RefreshCcwIcon' },
                { value: 'RefreshCwIcon', label: 'RefreshCwIcon' },
                { value: 'RepeatIcon', label: 'RepeatIcon' },
                { value: 'RewindIcon', label: 'RewindIcon' },
                { value: 'RotateCcwIcon', label: 'RotateCcwIcon' },
                { value: 'RotateCwIcon', label: 'RotateCwIcon' },
                { value: 'RssIcon', label: 'RssIcon' },
                { value: 'SaveIcon', label: 'SaveIcon' },
                { value: 'ScissorsIcon', label: 'ScissorsIcon' },
                { value: 'SearchIcon', label: 'SearchIcon' },
                { value: 'SendIcon', label: 'SendIcon' },
                { value: 'ServerIcon', label: 'ServerIcon' },
                { value: 'SettingsIcon', label: 'SettingsIcon' },
                { value: 'Share2Icon', label: 'Share2Icon' },
                { value: 'ShareIcon', label: 'ShareIcon' },
                { value: 'ShieldOffIcon', label: 'ShieldOffIcon' },
                { value: 'ShieldIcon', label: 'ShieldIcon' },
                { value: 'ShoppingBagIcon', label: 'ShoppingBagIcon' },
                { value: 'ShoppingCartIcon', label: 'ShoppingCartIcon' },
                { value: 'ShuffleIcon', label: 'ShuffleIcon' },
                { value: 'SidebarIcon', label: 'SidebarIcon' },
                { value: 'SkipBackIcon', label: 'SkipBackIcon' },
                { value: 'SkipForwardIcon', label: 'SkipForwardIcon' },
                { value: 'SlackIcon', label: 'SlackIcon' },
                { value: 'SlashIcon', label: 'SlashIcon' },
                { value: 'SlidersIcon', label: 'SlidersIcon' },
                { value: 'SmartphoneIcon', label: 'SmartphoneIcon' },
                { value: 'SmileIcon', label: 'SmileIcon' },
                { value: 'SpeakerIcon', label: 'SpeakerIcon' },
                { value: 'SquareIcon', label: 'SquareIcon' },
                { value: 'StarIcon', label: 'StarIcon' },
                { value: 'StopCircleIcon', label: 'StopCircleIcon' },
                { value: 'SunIcon', label: 'SunIcon' },
                { value: 'SunriseIcon', label: 'SunriseIcon' },
                { value: 'SunsetIcon', label: 'SunsetIcon' },
                { value: 'TabletIcon', label: 'TabletIcon' },
                { value: 'TagIcon', label: 'TagIcon' },
                { value: 'TargetIcon', label: 'TargetIcon' },
                { value: 'TerminalIcon', label: 'TerminalIcon' },
                { value: 'ThermometerIcon', label: 'ThermometerIcon' },
                { value: 'ThumbsDownIcon', label: 'ThumbsDownIcon' },
                { value: 'ThumbsUpIcon', label: 'ThumbsUpIcon' },
                { value: 'ToggleLeftIcon', label: 'ToggleLeftIcon' },
                { value: 'ToggleRightIcon', label: 'ToggleRightIcon' },
                { value: 'ToolIcon', label: 'ToolIcon' },
                { value: 'Trash2Icon', label: 'Trash2Icon' },
                { value: 'TrashIcon', label: 'TrashIcon' },
                { value: 'TrelloIcon', label: 'TrelloIcon' },
                { value: 'TrendingDownIcon', label: 'TrendingDownIcon' },
                { value: 'TrendingUpIcon', label: 'TrendingUpIcon' },
                { value: 'TriangleIcon', label: 'TriangleIcon' },
                { value: 'TruckIcon', label: 'TruckIcon' },
                { value: 'TvIcon', label: 'TvIcon' },
                { value: 'TwitchIcon', label: 'TwitchIcon' },
                { value: 'TwitterIcon', label: 'TwitterIcon' },
                { value: 'TypeIcon', label: 'TypeIcon' },
                { value: 'UmbrellaIcon', label: 'UmbrellaIcon' },
                { value: 'UnderlineIcon', label: 'UnderlineIcon' },
                { value: 'UnlockIcon', label: 'UnlockIcon' },
                { value: 'UploadCloudIcon', label: 'UploadCloudIcon' },
                { value: 'UploadIcon', label: 'UploadIcon' },
                { value: 'UserCheckIcon', label: 'UserCheckIcon' },
                { value: 'UserMinusIcon', label: 'UserMinusIcon' },
                { value: 'UserPlusIcon', label: 'UserPlusIcon' },
                { value: 'UserXIcon', label: 'UserXIcon' },
                { value: 'UserIcon', label: 'UserIcon' },
                { value: 'UsersIcon', label: 'UsersIcon' },
                { value: 'VideoOffIcon', label: 'VideoOffIcon' },
                { value: 'VideoIcon', label: 'VideoIcon' },
                { value: 'VoicemailIcon', label: 'VoicemailIcon' },
                { value: 'Volume1Icon', label: 'Volume1Icon' },
                { value: 'Volume2Icon', label: 'Volume2Icon' },
                { value: 'VolumeXIcon', label: 'VolumeXIcon' },
                { value: 'VolumeIcon', label: 'VolumeIcon' },
                { value: 'WatchIcon', label: 'WatchIcon' },
                { value: 'WifiOffIcon', label: 'WifiOffIcon' },
                { value: 'WifiIcon', label: 'WifiIcon' },
                { value: 'WindIcon', label: 'WindIcon' },
                { value: 'XCircleIcon', label: 'XCircleIcon' },
                { value: 'XOctagonIcon', label: 'XOctagonIcon' },
                { value: 'XSquareIcon', label: 'XSquareIcon' },
                { value: 'XIcon', label: 'XIcon' },
                { value: 'YoutubeIcon', label: 'YoutubeIcon' },
                { value: 'ZapOffIcon', label: 'ZapOffIcon' },
                { value: 'ZapIcon', label: 'ZapIcon' },
                { value: 'ZoomInIcon', label: 'ZoomInIcon' },
                { value: 'ZoomOutIcon', label: 'ZoomOutIcon' },
            ],
        };
    },
    computed: {
        dataMeta() {
            const localItemsCount = _.size(this.faqs);
            return {
                from:
                    this.perPage * (this.currentPage - 1) +
                    (localItemsCount ? 1 : 0),
                to: this.perPage * (this.currentPage - 1) + localItemsCount,
                of: this.totalFaqs,
            };
        },
    },
    watch: {
        currentPage() {
            this.getFaqs()
        },
        perPage() {
            this.getFaqs()
        },
        onShowModalCreateUpdateFaq(value) {
            if(!value) {
                this.modalTitle = this.$t('modal_title_edit').replace(':operator', this.$t('faqs.faq'))
                this.faq = {
                    icon: null,
                    title: null,
                    subtitle: null,
                    faq_items: [{
                        question: null,
                        answer: null,
                    }],
                }
            }
        },       
    },
    async mounted() {
        await this.getFaqs()
    },
    methods: {
        validateForm () {
            this.$refs.faqsRules.validate().then((success) => {
                if(success) {
                    this.store()
                }
            })
        },
        async store () {

            try {

                this.loading = true
                const { data } = this.isEdit ? await FaqResource.update(this.faq.id, this.faq) : await FaqResource.store(this.faq)
                this.loading = false
                if (data.success) {
                    this.success(data.message);                    
                    if (this.isEdit) {
                        this.faqs = this.faqs.map(faq => {
                            if (faq.id === this.faq.id) {
                                return data.data
                            }
                            return faq
                        })
                    } else {
                        this.faqs.push(data.data)
                    }
                    this.onShowModalCreateUpdateFaq = false
                    this.isEdit = false
                } else {
                    this.danger(data.message);
                }
            } catch (e) {
                this.loading = false
                this.handleResponseErrors(e)
            }
        },
        editFaq(item) {
            this.isEdit = true
            this.modalTitle = this.$t("modal_title_edit").replace(':operator', this.$t('faqs.faq')),
            this.faq = { ...item }
            this.onShowModalCreateUpdateFaq = true
        },
        async getFaqs () {
            this.loading = true
            const { data } = await FaqResource.index()
            this.loading = false
            this.faqs = data.data
            this.totalFaqs = data.total
        },
        deleteFaq(item) {
            this.$swal({
                title: this.$t('are_you_sure'),
                text: this.$t('you_wont_be_able_to_revert_this'),
                icon: "question",
                showCancelButton: true,
                confirmButtonText: this.$t("yes_continue"),
                cancelButtonText: this.$t("cancel"),           
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-outline-danger ml-1",
                },
                showClass: {
                    popup: "animate__animated animate__flipInX",
                },
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                preConfirm: async () => {
                    try {
                        this.loading = true
                        const { data } = await FaqResource.destroy(item.id)
                        this.loading = false
                        if (data.success) {
                            this.success(data.message)
                            this.faqs = this.faqs.filter(faq => faq.id !== item.id)
                        } else {
                            this.danger(data.message)
                        }
                    }catch (error) {
                        this.loading = false;
                        this.$swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
}
</style>

<style lang="scss">
@import "~@resources/scss/vue/libs/vue-sweetalert.scss";
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>