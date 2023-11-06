import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import StyleClass from 'primevue/styleclass';
//Add PrimeVue
import PrimeVue from "primevue/config";

//Add PrimeFlex
import 'primeflex/primeflex.css';
//Add Theme
import "primevue/resources/themes/fluent-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";




//Add Toast Service
import ToastService from "primevue/toastservice";

//Add Components
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Carousel from "primevue/carousel";
import DataView from "primevue/dataview";
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Tag from "primevue/tag";
import Toolbar from "primevue/toolbar";
import Checkbox from "primevue/checkbox";
import Sidebar from "primevue/sidebar";
import OrderList from "primevue/orderlist";
import Listbox from "primevue/listbox";
import Card from "primevue/card";





const app = createApp(App)

app.use(createPinia())
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






app.mount('#app')