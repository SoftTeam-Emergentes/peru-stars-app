<template>
  <div>
    <div class="mx-6 my-4 text-2xl font-semibold mb-3">Art events</div>
    <pv-carousel :value="events" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular
                 :autoplayInterval="3000">
      <template #item="slotProps">

        <pv-card class=" surface-border border-round-lg m-2 text-center shadow-5">
          <template #header>
            <img alt="artworkImage" :src="getImage()" style="max-height: 250px; width: 100%"/>
          </template>
          <template #title> {{ slotProps.data.title }}</template>
          <template #subtitle>
            <p class="m-0 p-0"><i class="pi pi-map"/> {{ slotProps.data.location.country }}  {{slotProps.data.location.city}} </p>
            <div class="flex justify-content-between flex-wrap" >

              <i class="pi pi-calendar">{{ getVisibleDate(slotProps.data.startDateTime)}}</i>
              <pv-tag :value="slotProps.data.currentStatus" :severity="getSeverity(slotProps.data)"></pv-tag>
            </div>
          </template>
          <template #content>
            <p align="justify" class="m-0 text-sm">
              {{ slotProps.data.description }}
            </p>
          </template>
          <template #footer>
            <pv-button class="border-round-lg" icon="pi pi-dollar" :label="getRandomNumber(100,500).toString()" text raised/>
            <pv-button class="border-round-lg" label="Ver Más" severity="secondary" style="margin-left: 0.5em" raised/>
          </template>
        </pv-card>
      </template>
    </pv-carousel>

  </div>

</template>
<script>

import {EventsApiService} from "@/events/services/event-api.service";

export default {
  name: "top-events",

  artEventService: null,
  data() {
    return {
      locationCountry:"Peru",
      locationCity:"Lima",
      locationLatitude:15.2,
      locationAltitude:25.2,
      isOnline:["true","false"],
      events: {},
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }
  },

  created() {
    this.getTopArtEvent()
  },

  methods: {
    getTopArtEvent() {
      this.artEventService = new EventsApiService();
      this.artEventService.getAll().then((response) => {
        this.events = response.data;
        console.log()
      })
    },
    getImage() {
      return `https://picsum.photos/id/${this.getRandomNumber(1050, 1060)}/3900/3120`;
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    getSeverity(events) {
      switch (events.currentStatus) {
        case 'progress':
          return 'success';

        case 'terminate':
          return 'danger';

        default:
          return null;
      }
    },
    getVisibleDate(dateStr) {
      let date = new Date(dateStr);
      return date.toLocaleString();
      //console.log(date.toISOString());
      //return date.toISOString().replace("T", " ").replace(".000Z", "").replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
    }
  }

}
</script>
<style scoped>

</style>