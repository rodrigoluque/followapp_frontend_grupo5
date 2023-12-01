<template>
  <ion-page id="main-content" class="white-bg">
    <ion-header>
      <ion-toolbar>
        <br> 
        <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
        <center><h4> TUS MEDICAMENTOS </h4></center>
        </ion-toolbar>
    </ion-header> 
    <ion-content color="light">
      <br>
      <!--lista para medicamentos de tabla-->
      <ion-list>
        <ion-item v-for="historial in historials" :key="historial.id">
          <Icon icon="streamline-emojis:pill" width="50" slot="start" />
          <ion-label>
            <h2>{{ historial.afeccion }}</h2>
            <p>({{ historial.medicamento }} - {{ historial.forma_farmaceutica }})</p>
            <p>(Migrañas - {{ historial.tratamiento }})</p>
            <p>Cantidades restantes: 20 U</p>
          </ion-label>
          <ion-button fill="clear" class="ion-float-right" @click="eventos">
            <Icon icon="noto:spiral-calendar" width="50" />
          </ion-button>
        </ion-item>
      </ion-list>
     <!-- fin de lista para medicamentos de tabla-->
      <!--<ion-list>
        <ion-item>
          <Icon icon="streamline-emojis:pill" width="50" slot="start"/>
          <ion-label>
            <h2>IBUPIRAC 800 </h2>
            <p>(Ibuprofeno 800mg)</p>
            <p>(Migrañas - Temporal)</p>
            <p>Cantidades restantes: 20 U</p>
          </ion-label>
         <ion-button  fill="clear" class="ion-float-right" href="/eventos"><Icon  icon="noto:spiral-calendar" width="50"></Icon></ion-button>  
        </ion-item>

        <ion-item>
          <Icon icon="streamline-emojis:pill" width="50" slot="start"/>
          <ion-label>
            <h2>GALVUS MET 50/1000 </h2>
            <p>(Vildagliptina / Metformina Clorhidato - Permanente)</p>
            <p>(Diabetes Tipo II)</p>
            <p>Cantidades restantes: 60 U</p>
          </ion-label>
         <ion-button  fill="clear" class="ion-float-right" href="/eventos"><Icon  icon="noto:spiral-calendar" width="50"></Icon></ion-button>  
        </ion-item>

         <ion-item>
          <Icon icon="streamline-emojis:pill" width="50" slot="start"/>
          <ion-label>
            <h2>TRIPLIXAM 10mg/2.5mg/10mg </h2>
            <p>(Perindopril/amlodipino/indapamida)</p>
            <p>(Hipertensión Arterial - Permanente)</p>
            <p>Cantidades restantes: 20 un</p>
          </ion-label>
         <ion-button  fill="clear" class="ion-float-right" href="/eventos"><Icon  icon="noto:spiral-calendar" width="50"></Icon></ion-button>  
        </ion-item>

        <ion-item>
          <Icon icon="streamline-emojis:pill" width="50" slot="start"/>
          <ion-label>
            <h2>IBUPROFENO 800mg </h2>
            <p>(Migrañas)</p>
            <p>Cantidades restantes: 20 un</p>
            
          </ion-label>
         <ion-button  fill="clear" class="ion-float-right" href="/eventos"><Icon  icon="noto:spiral-calendar" width="50"></Icon></ion-button>  
        </ion-item>

        <ion-item>
          <Icon icon="streamline-emojis:pill" width="50" slot="start"/>
          <ion-label>
            <h2>TAFIROL 600mg </h2>
            <p>(Alivio de dolores más intensos)</p>
            <p>Cantidades restantes: 20 un</p>
           </ion-label>
         <ion-button  fill="clear" class="ion-float-right" href="/eventos"><Icon  icon="noto:spiral-calendar" width="50"></Icon></ion-button>  
         <br>

        </ion-item>
      </ion-list>-->

<br><br>
      <div class="btn-wrapper">
        <ion-button color="warning"  fill="clear"   @click="compartir"><Icon  icon="basil:share-solid" width="70"></Icon></ion-button>
        </div>   
      
   </ion-content>
   <ion-footer>
    <ion-toolbar >
      <ion-grid>
        <ion-row>
          <ion-col ><ion-button @click="home"><Icon icon="ion:home" width="30"></Icon></ion-button></ion-col>
            <ion-col ><ion-button  @click="eventos"><Icon icon="ion:calendar" width="30"></Icon></ion-button></ion-col>
            <ion-col><ion-button   @click="historial"><Icon icon="material-symbols:ecg-heart" width="30"></Icon></ion-button></ion-col>
              <ion-col ><ion-button   @click="medicamentos"><Icon icon="game-icons:medicine-pills" width="30"></Icon></ion-button></ion-col>
                
                <ion-col><ion-button @click="logout"><Icon  icon="ri:logout-box-r-fill" width="30"></Icon></ion-button>   </ion-col>  
    </ion-row>
  </ion-grid>
    </ion-toolbar>
  </ion-footer>
  
    </ion-page>


  </template>
  
  <script>
    import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput,IonButton,IonDatetime, IonDatetimeButton, IonModal,IonFooter,IonItem,IonThumbnail} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { Icon } from '@iconify/vue';
    import axios from 'axios';
    import { useStore } from 'vuex';
  
    import { Storage } from '@ionic/storage';
    export default defineComponent({
      components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenu,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
        IonInput,
        IonButton,
        IonDatetime,
        IonDatetimeButton,
         IonModal,
         Icon,
         IonFooter,
         IonItem,
         IonThumbnail
     
  },
  data() {
    return {
      historials: [], 
    };
  },
  computed: {
      tokenm() {
         return this.$store.state.token;
       },
       useridm(){
        return this.$store.state.user_id;
       }
    },
  mounted: async function() {
    try {
      const response = await axios.get(`http://followappapi.test:8081/api/users/${this.useridm}/historials`, {
        headers: {
          Authorization: `Bearer ${this.tokenm}`,
          Accept: 'application/json',
        },
      });
      
      this.historials = response.data.historials;

    } catch (error) {
      console.error('Error al obtener la lista de medicamentos:', error);
    }
  },
  methods: {
    misdatos(){
         this.$router.push('/misdatos');
      },
      logout(){
        this.$router.push('/logout');
      },
      medicamentos(){
        this.$router.push('/medicamentos');
      },
      home(){
        this.$router.push('/home');
				},
      historial(){
        this.$router.push('/historial');
						},
      eventos(){
        this.$router.push('/eventos');	
      },  
      envioexitoso(){
        this.$router.push('/envioexitoso');	
      },  
      compartir(){
        this.$router.push('/compartir');
      },	
  }
});
</script>


<style>
  ion-thumbnail {
    --size: 50px;
   border-radius: 14px;
  }
</style>
