<template>
    <ion-page id="main-content" class="white-bg">
      <ion-header>
        <ion-toolbar>
          <br> 
          <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
          <center><h4 > LOGOUT</h4>
          </center>
          </ion-toolbar>
      </ion-header> 
      <ion-content color="light">
        <br>
        <ion-img  src="../src/logo.png"></ion-img> 
        <br>
        
        <ion-text class="texto"> ¡Adios {{userlogout}}!</ion-text>
        <br><br>
        <div class="btn-wrapper">
          <ion-button color="warning"  fill="clear"  @click="cerrar_sesion"><Icon  icon="carbon:next-filled" width="70"></Icon></ion-button>
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
           IonFooter
       
    }, 
    computed: {
      userlogout() {
        return this.$store.state.user;
      },
      tokenlogout() {
         return this.$store.state.token;
       }
    },    
  methods: {
    cerrar_sesion(){
      axios.get('http://followappapi.test:8081/api/auth/logout',{
          headers: {
            Authorization: `Bearer ${this.tokenlogout}`,
            'Content-Type': 'application/json',
          },
        }
        )
      .then((response) =>{
        if(response.data.status = true){
          console.log("Deslogueado");
          this.$store.commit('setUser', null);
          this.$store.commit('setToken', null);
          this.$store.commit('setUserId', null);
          this.$store.commit('setDni', null);
          this.login();
        }
        else{
          alert("Hubo un error al desloguearse.");
          }
        })
        .catch(function(error){
          alert(error);
        });
    },
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
      }
    });
  </script>
  
