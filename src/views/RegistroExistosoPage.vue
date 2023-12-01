<template>
    <ion-page id="main-content" class="white-bg">
      <ion-header>
        <ion-toolbar>
          <br> 
          <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
          <center><h4 > BIENVENIDO</h4>
          </center>
          </ion-toolbar>
      </ion-header>  
      <ion-content color="light">
        <br>
        <ion-img  src="../src/logo.png"></ion-img> 
        <br>
        
        <ion-text class="texto">!Tu registro a sido existoso!</ion-text>
        <br><br><br><br>
          <div class="btn-wrapper">
            <ion-button  color="warning" fill="clear"  @click="login"><Icon  icon="carbon:next-filled" width="70"></Icon></ion-button>
            </div>     
        
     </ion-content>
     <ion-footer>
      <ion-toolbar>
       
      </ion-toolbar>
    </ion-footer>
    
      </ion-page>

  
    </template>
    
    <script>
      import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput,IonButton,IonDatetime, IonDatetimeButton, IonModal,IonFooter} from '@ionic/vue';
      import { defineComponent } from 'vue';
      import { Icon } from '@iconify/vue';
     
      import axios from 'axios';
  
      
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
           IonFooter
       
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
          
		
		      login(){
        this.$router.push('/login');
			
      }
        },     
 
      });
  </script>
  

  <style>
    ion-input.custom {
      --background: #fffdfd;
    }
 
  </style>