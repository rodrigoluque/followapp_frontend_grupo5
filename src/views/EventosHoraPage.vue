<template>

    <ion-page id="main-content" class="white-bg">
      <ion-header>
        <ion-toolbar>
          <br> 
          <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
          <center><h4> MIS EVENTOS</h4></center>
          </ion-toolbar>
      </ion-header>  
      <ion-content color="light">
        <br>
        <ion-list>
          <ion-item>
           <ion-button  fill="clear" class="ion-float-right" @click="eventos"><Icon  icon="noto:spiral-calendar" width="50"></Icon></ion-button>  
            <ion-label>
              <h1>Ibuprofeno 800mg </h1>
            </ion-label>        
          </ion-item>      
        </ion-list>
        <ion-text class="texto"> Elegí la hora y la dosis de tú medicamento</ion-text>
        <br><br><br>
        <div class="btn-wrapper">
          <ion-button   fill="clear" ><Icon  icon="emojione:stopwatch" width="70"></Icon></ion-button>
          </div>    
          <br><br>
        
                <!-- <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"/> -->
                <div class="row">

                 <ion-item>
                  <ion-label>Inicio:</ion-label><br>
                  <ion-datetime-button  datetime="dateini"></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                     
                      <ion-datetime id="dateini"></ion-datetime>
                    </ion-modal>
                  </ion-item>
                  <br><br>
                </div>
                <div class="btn-wrapper">
                  <ion-button   fill="clear"><Icon  icon="game-icons:medicine-pills" width="70"></Icon></ion-button>
                  </div>    
              
              
              
                <ion-list>
                  <ion-item>
                    <ion-select justify="start" value="1">
                      <ion-select-option value="1">1</ion-select-option>
                      <ion-select-option value="2">2</ion-select-option>
                      <ion-select-option value="3">3</ion-select-option>
                    </ion-select>
                    <ion-select justify="start" value="Comprimido">
                      <ion-select-option value="Comprimido">Comprimido</ion-select-option>
                      <ion-select-option value="Dosis">Dosis</ion-select-option>
                      <ion-select-option value="cápsulas">cápsulas</ion-select-option>
                      <ion-select-option value="Ampollas">Ampollas</ion-select-option>
                    </ion-select>
                    
                  </ion-item>
               </ion-list>
  
               <br>
                                      
  
  <div class="btn-wrapper">
    <ion-button  color="warning" fill="clear"  @click="eventos"><Icon  icon="akar-icons:arrow-back-thick" width="70"></Icon></ion-button>
    <ion-button color="warning"  fill="clear"  @click="eventosnotificar"><Icon  icon="carbon:next-filled" width="70"></Icon></ion-button>
    <ion-button  color="warning" fill="clear"  @click="misdatos"><Icon  icon="ic:round-cancel" width="70"></Icon></ion-button>
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
                  <ion-col><ion-button   @click="logout"><Icon  icon="ri:logout-box-r-fill" width="30"></Icon></ion-button></ion-col>  
      </ion-row>
    </ion-grid>
      </ion-toolbar>
    </ion-footer>
    
      </ion-page>
  
  
    </template>
    
    <script>
      import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput,IonButton,IonDatetime, IonDatetimeButton, IonModal,IonFooter,IonItem,IonThumbnail,IonToggle} from '@ionic/vue';
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
           IonFooter,
           IonItem,
           IonThumbnail,
           IonToggle
       
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
			
      },
         
		
			      historialeliminar(){
        this.$router.push('/historialeliminar');
			
      },
         
		      eventoshora(){
        this.$router.push('/eventoshora');
			
      },
         
		      historialagregada(){
        this.$router.push('/historialagregada');
			
      },
         
		      historialpreeliminar(){
        this.$router.push('/historialpreeliminar');
			
      },
         		

         eventosnotificar(){
        this.$router.push('/eventosnotificar');
			
      }
        }, 		
  
      });
  </script>

  
  <style>
    ion-thumbnail {
      --size: 50px;
     border-radius: 14px;
    }
  </style>
  