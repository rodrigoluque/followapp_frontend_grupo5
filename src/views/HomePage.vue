
<template>
  <ion-page id="main-content" class="white-bg">
    <ion-header>
      <ion-toolbar>
        <br> 
        <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
        <center><h4 > ¡HOLA {{ userHome }}!</h4></center>
        </ion-toolbar>
    </ion-header>
    <ion-content color="light">
       
     <br>
      <!-- <center><h1> ¿Que deseas hacer?</h1></center>  -->
      <ion-text class="texto">¿Que deseas hacer?</ion-text>
      <br><br>
      
    <ion-row justify-content-center> 
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
      <ion-col size="12" class="ion-text-center">
           <ion-button fill="clear"> 
          <div class=“custom-button-content”>
          <Icon  icon="heroicons:user-solid" width="100"> </Icon>
          <ion-item @click="misdatos">
           <ion-label>DATOS</ion-label>
          </ion-item>
          </div>
         </ion-button>
         <ion-button fill="clear"> 
          <div class=“custom-button-content”>
          <Icon  icon="material-symbols:ecg-heart" width="100"> </Icon>
          <ion-item @click="historial">
           <ion-label>HISTORIAL</ion-label>
          </ion-item>
          </div>
         </ion-button>

         <ion-button fill="clear"> 
          <div class=“custom-button-content”>
          <Icon  icon="ion:calendar" width="100"> </Icon>
          <ion-item @click="eventos">
           <ion-label>EVENTOS</ion-label>
          </ion-item>
          </div>
         </ion-button>

         <ion-button fill="clear"> 
          <div class=“custom-button-content”>
          <Icon  icon="game-icons:medicine-pills" width="100"> </Icon>
          <ion-item @click="medicamentos">
           <ion-label>MEDICACIÓN</ion-label>
          </ion-item>
          </div>
         </ion-button>
        </ion-col> 

    </ion-row>
    <br><br><br>
    <ion-item>
      <IonButton size="large">
      <ion-toggle color="success" :checked="true">
      <ion-label> Activa tus notificaciones</ion-label>
      </ion-toggle></IonButton>
    </ion-item>
 </ion-content>



<ion-footer>
  <ion-toolbar >
    <ion-grid>
      <ion-row>
        <ion-col ><ion-button   @click="home"><Icon icon="ion:home" width="30"></Icon></ion-button></ion-col>
          <ion-col ><ion-button  @click="eventos"><Icon icon="ion:calendar" width="30"></Icon></ion-button></ion-col>
		  <ion-col><ion-button   @click="historial"><Icon icon="material-symbols:ecg-heart" width="30"></Icon></ion-button></ion-col>
            <ion-col ><ion-button   @click="medicamentos"><Icon icon="game-icons:medicine-pills" width="30"></Icon></ion-button></ion-col>          
                <ion-col><ion-button  @click="logout"><Icon  icon="ri:logout-box-r-fill" width="30"></Icon></ion-button>   </ion-col> 
  </ion-row>
</ion-grid>
  </ion-toolbar>
</ion-footer>
    </ion-page>
    
     

</template>

<script>
  import { IonButton, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, menuController,IonItem, IonLabel,IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  import { personOutline,} from 'ionicons/icons';
  import { home,} from 'ionicons/icons';
  import { calendar} from 'ionicons/icons';
  import { addIcons } from 'ionicons';
  import { thermometer } from 'ionicons/icons';
  import { newspaper } from 'ionicons/icons';
  import { notifications } from 'ionicons/icons';
  import { Icon } from '@iconify/vue';
  import axios from 'axios';
  import { useStore } from 'vuex';
  
  import { Storage } from '@ionic/storage'; 
   addIcons({
  personOutline:personOutline,
  home: home,
  calendar:calendar,
  thermometer:thermometer,
  newspaper:newspaper,
  notifications:notifications, 
 }); 
   
 
const date = ref(new Date());
  export default defineComponent({
    components: { IonButton, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, menuController,IonItem, IonLabel,Storage,IonIcon, Icon},
    data(){
      return{
        nombre:[]
      };
       
    },
    computed: {
      userHome() {
        return this.$store.state.user;
      },
      tokenHome() {
         return this.$store.state.token;
       },
      userId() {
        return this.$store.state.user_id;
      },
      dniHome() {
        return this.$store.state.dni;
      },
    },
   mounted(){
    //this.loadscliente();
   }, methods: {

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
        },      
   
  });
</script>
 