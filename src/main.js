import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './shared/router'
import StyleClass from 'primevue/styleclass';
//Add PrimeVue
import PrimeVue from "primevue/config";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

//Add PrimeFlex
import 'primeflex/primeflex.css';
//Add Theme
import "primevue/resources/themes/mira/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";




//Add Toast Service
import ToastService from "primevue/toastservice";

//Add Components
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Carousel from "primevue/carousel";
import DataView from "primevue/dataview";
import Menubar from "primevue/menubar";
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Tag from "primevue/tag";
import Toolbar from "primevue/toolbar";
import Checkbox from "primevue/checkbox";
import Sidebar from "primevue/sidebar";
import OrderList from "primevue/orderlist";
import Listbox from "primevue/listbox";
import Card from "primevue/card";
import Toast from "primevue/toast";
import Password from "primevue/password";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import InputGroup from 'primevue/inputgroup';
import Textarea from "primevue/textarea";
import Dialog from "primevue/dialog";
import Menu from "primevue/menu";
import Galleria from "primevue/galleria";







const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(PrimeVue,{ripple:true})

app.use(ToastService);
app.directive('pv-styleClass', StyleClass);

// PrimeVue Component
app.component("pv-button",Button)
app.component("pv-input-text",InputText)
app.component('pv-carousel', Carousel);
app.component('pv-data-view', DataView);
app.component('pv-menubar', Menubar);
app.component('pv-avatar', Avatar);
app.component('pv-avatar-group', AvatarGroup);
app.component('pv-tag', Tag)
app.component('pv-toolbar', Toolbar)
app.component('pv-checkbox', Checkbox)
app.component('pv-sidebar', Sidebar)
app.component('pv-order-list', OrderList)
app.component('pv-list-box', Listbox)
app.component('pv-card',Card)
app.component('pv-toast',Toast)
app.component('pv-password',Password)
app.component('pv-divider',Divider)
app.component('pv-dropdown',Dropdown)
app.component('pv-input-group',InputGroup)
app.component('pv-text-area',Textarea)
app.component('pv-dialog',Dialog)
app.component('pv-menu',Menu)
app.component('pv-galleria', Galleria)

app.mount('#app')
