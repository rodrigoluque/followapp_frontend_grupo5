<template>
  <ion-page id="main-content" class="white-bg">
    <ion-header>
      <ion-toolbar>
        <br> 
        <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
        <center><h4>  RECUPERA TU CONTRASEÑA</h4></center>
        </ion-toolbar>
    </ion-header> 
    <ion-content color="light">
      <br>
        
      <ion-text class="texto"> Ingresa el codigó que recibiste en tu correo</ion-text>
      <br><br>
          
        <ion-img  src="../src/signo.png"></ion-img> 
        <br>
        <ion-input type="email" label="Codigó de seguridad" label-placement="floating" fill="outline"  v-model="codigo" autocomplete="off"></ion-input>
        <br><br><br>
        <div class="btn-wrapper">
        <ion-button   fill="clear"  href="/recuperacontrasena"><Icon  icon="carbon:next-filled" width="70"></Icon></ion-button>
        </div>
      </ion-content>


      <ion-footer>
       <ion-toolbar >   
         
        <div class="btn-wrapper">
         <ion-button  color="warning"  @click="logout"><Icon  icon="ri:logout-box-r-fill" width="30"></Icon></ion-button>
        </div>
  
        </ion-toolbar>
     </ion-footer>
     
       </ion-page>



    </template>
    
    <script lang="ts">
     import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput,IonButton,IonDatetime, IonDatetimeButton, IonModal,IonFooter} from '@ionic/vue';
      import { defineComponent } from 'vue';
      import { Icon } from '@iconify/vue';
    
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
          Icon
        },
        data() {
         return {
        codigo: '',
        usuario: '',
        nombre: '',
        apellido: '',
		    mail: '', 
        telefono: '', 
        dni: '', 
        fechanac: '', 
        parentezco: '', 
        idcobertura: '',
        }
     },
     methods: {

      logout(){
   this.$router.push('/logout');
}
     },
      });
    </script>
