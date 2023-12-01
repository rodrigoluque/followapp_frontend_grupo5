<template>
    <ion-page id="main-content" class="white-bg">
      <ion-header>
        <ion-toolbar>
          <br> 
          <ion-img class="logo-avatar" src="../src/logo.png"></ion-img> <br> <br>  
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
       

      <div class="logo-container">
        <ion-img class="logo"  src="../src/imagen.png"></ion-img>
      </div>

     
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
      <div class="container">
        <ion-input type="text" label="Usuario o correo electronico" label-placement="floating" fill="outline" placeholder="Usuario" v-model="usuario" ></ion-input>
       
          <ion-input  :type="passwordFieldType"  label="Ingrese su contraseña" label-placement="floating" fill="outline" placeholder="Constraseña" v-model="password" class="col-xs-9  "></ion-input>
          <IonButton   fill="clear" size="large" type="password" @click="switchVisibility" ><Icon slot="icon-only" icon="ion:eye-off-outline"></Icon></IonButton>
      
          <div class="btn-wrapper">
            <ion-button  color="black" fill="clear" @click="login"><Icon  icon="carbon:next-filled" width="70"></Icon></ion-button>
            </div>  
      
    </div>
 
  
      <ion-col center text-center>
        <div class="col text-center">
        <ion-button  fill="clear" href="/forgot-password">¿Olvidaste tu contraseña?</ion-button>
        <ion-button   fill="clear" href="/register1" >¿No tenés cuenta?</ion-button> 
        <ion-button   fill="clear" href="/register1" >Registrate gratis</ion-button> 
      </div>
      </ion-col>
    
   
  </ion-content>
    </ion-page>
  </template>
  
  <script>
    import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput,IonButton, IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon,} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { Icon } from '@iconify/vue';
    import axios from 'axios';
    import { useStore } from 'vuex';
  
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
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonIcon,
        Icon
        },
      data() {
         return {
            usuario: '',
            password: "",
            passwordFieldType: "password"
            
            
        };
      },
      methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
  login() {
  if (this.usuario == ""){
        alert("Por favor ingrese un usuario valido!");
      } else
      if (this.password == ""){
        alert("Por favor ingrese un Password valido!");
      }else{
        axios.post("http://followappapi.test:8081/api/auth/login", null,{params: {"user": this.usuario, "password": this.password}})
      .then((response) =>{
        if(response.data.status = true){
          console.log(response.data.token);
          console.log(response.data.data);
          this.$store.commit('setUser', response.data.data.user);
          this.$store.commit('setToken', response.data.token);
          this.$store.commit('setUserId', response.data.data.id);
          this.$store.commit('setDni', response.data.data.dni);
          this.$router.push('/home');
        }
        else{
          alert("Usuario o password no valido..!");
          }
        })
        .catch(function(error){
          alert(error);
        });
      } 
    }
        
  }
    });
  </script>

