<template>
  
    <ion-page id="main-content" class="white-bg">
      <ion-header>
        <ion-toolbar>
          <br> 
          <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
          <center><h4> BIENVENIDO!</h4>
          <p> Carga o cambia tus datos de perfil</p></center>
          </ion-toolbar>
      </ion-header>
      <ion-content color="light">
        

        <br>
        <ion-img  src="../src/logo.png"></ion-img> 
        
        
        <ion-text class="texto"> !Tu Actualización a sido existosa!</ion-text>
        <br><br><br><br>
        <div class="btn-wrapper">
          <ion-button color="warning"  fill="clear"  @click="home"><Icon  icon="carbon:next-filled" width="70"></Icon></ion-button>
          </div> 
          
          
           
    
            
        
        
     </ion-content>
     <ion-footer>
      <ion-toolbar >
        <ion-grid>
          <ion-row>
            <ion-col ><ion-button   @click="home"><Icon icon="ion:home" width="30"></Icon></ion-button></ion-col>
              <ion-col ><ion-button  @click="eventos"><Icon icon="ion:calendar" width="30"></Icon></ion-button></ion-col>
              <ion-col><ion-button   @click="historial"><Icon icon="material-symbols:ecg-heart" width="30"></Icon></ion-button></ion-col>
                <ion-col ><ion-button   @click="medicamentos"><Icon icon="game-icons:medicine-pills" width="30"></Icon></ion-button></ion-col>
                  
                    <ion-col><ion-button   @click="logout"><Icon  icon="ri:logout-box-r-fill" width="30"></Icon></ion-button>   </ion-col> 
      </ion-row>
    </ion-grid>
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
		
			      historialeditada(){
        this.$router.push('/historialeditada');
			
      }
         
      });
  </script>
  

  <style>
    ion-input.custom {
      --background: #fffdfd;
    }
 
  </style>