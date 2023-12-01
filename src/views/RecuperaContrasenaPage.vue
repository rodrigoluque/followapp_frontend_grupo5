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
      <ion-text class="texto">Ingresa la nueva contraseña</ion-text>
        <ion-img  src="../src/signo.png"></ion-img> 
        <br>
        <ion-input type="email" label="Ingresá tu correo electrónico" label-placement="floating" fill="outline"  v-model="mail" autocomplete="off"></ion-input>
        <br>
        <ion-input type="email" label="Confirmá tu correo electrónico" label-placement="floating" fill="outline" v-model="mail" autocomplete="off"></ion-input>
        
        <div class="btn-wrapper">
        <ion-button  color="warning" fill="clear"  @click="recuperaexistoso"><Icon  icon="carbon:next-filled" width="70"></Icon></ion-button>
        </div>
      </ion-content>


      <ion-footer>
       <ion-toolbar >   
         
        <div class="btn-wrapper">
         <ion-button    @click="logout"><Icon  icon="ri:logout-box-r-fill" width="30"></Icon></ion-button>
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
			
      },
         

         recuperacodigo(){
        this.$router.push('/recuperacodigo');
			
      },
        		   
        eventonotificado(){
        this.$router.push('/eventonotificado');
			
      },
        		
        recuperaexistoso(){
        this.$router.push('/recuperaexistoso');
			
      }
        },		
	 
	 
      });
    </script>
