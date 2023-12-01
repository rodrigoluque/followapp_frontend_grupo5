<template>
  <ion-page id="main-content" class="white-bg">
    <ion-header>
      <ion-toolbar>
        <br> 
        <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
        <center><h4 > BIENVENIDO</h4>
        <p> Ingresa tus datos.</p></center>
        </ion-toolbar>
    </ion-header>
    <ion-content color="light">
      <br>
    <div class="logo-container">
      <ion-img class="logo-cor"  src="../src/corazon.png"></ion-img>
    </div>
  		
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"/>
    <div class="row">
      <div class="col-xs-6">
		<ion-input type="text" label="Nombre" label-placement="floating" fill="outline" v-model="nombre"   ></ion-input>
     </div> 
        <ion-input type="text" label="Apellido" label-placement="floating" fill="outline" v-model="apellido" ></ion-input>
      

        <ion-item>
         
          <ion-label>Fecha de nacimiento</ion-label>
          <input type="date" v-model="selectedDate">
        
      </ion-item>
    </div>

   <ion-list>
      <ion-item>
        <ion-select justify="start" value="DNI">
          <ion-select-option value="DNI">DNI</ion-select-option>
          <ion-select-option value="CM">CM</ion-select-option>
          <ion-select-option value="LC">LC</ion-select-option>
        </ion-select>
        <ion-input type="text" label="Documento" label-placement="floating" fill="outline" v-model="documento"   ></ion-input>
      </ion-item>
   </ion-list>
  <ion-input type="email" label="Ingresá tu correo electrónico" label-placement="floating" fill="outline"  v-model="mail" autocomplete="off"></ion-input>
  <ion-input type="email" label="Confirmá tu correo electrónico" label-placement="floating" fill="outline" v-model="mail" autocomplete="off"></ion-input>    


  <ion-list>
    <ion-item>
      <ion-select justify="start" value="ROL">
        <ion-select-option value="ROL">ROL</ion-select-option>
      </ion-select>
      <ion-input type="text" label="Parentezco" label-placement="floating" fill="outline" v-model="parentezco"   ></ion-input>
    </ion-item>
 </ion-list>

  <ion-input type="text" label="Crea tu usuario" label-placement="floating" fill="outline"   autocomplete="off" v-model="usuario"></ion-input>  
  <ion-input type="password" label="Genera una contraseña" label-placement="floating" fill="outline"  v-model="password"></ion-input>
  <ion-input type="password" label="Confirmar contraseña" label-placement="floating" fill="outline"  v-model="password"></ion-input>
 
        <div class="btn-wrapper">
          <ion-button   fill="clear" @click="register"><Icon  icon="octicon:feed-plus-16" width="50"></Icon></ion-button>
          </div> 




      
   </ion-content>
   <ion-footer>
    <ion-toolbar>
      <div class="btn-wrapper">
        <ion-button  color="warning"  @click="login"><Icon  icon="icon-park-outline:back" width="30"></Icon></ion-button>
       </div>
    
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
   
      data() {
         return {
        usuario: '',
		password: '', 
		mail: '', 
        nombre: '',
        apellido: '',
          
        };
     },
    methods: {
      
    register() {
        if (this.usuario == ""){
        alert("Por favor ingrese un Usuario valido!");
      } else  
	    if (this.password == ""){
        alert("Por favor ingrese un Password valido!");
      } else
       if (this.nombre == ""){
        alert("Por favor ingrese un nombre valido!");
      } else
      if (this.apellido == ""){
        alert("Por favor ingrese un apellido valido!");
      } else
      if (this.mail == ""){
        alert("Por favor ingrese un e-mail valido!");
      }else{
        // axios.post("http://localhost/followapp/reg_usuario_4.php",null,{params:{"usuario":this.usuario,"password":this.password,"nombre":this.nombre,"apellido":this.apellido,"mail":this.mail}})
        // .then( (response) => {
        //   if(response.data.message == "success"){
        //     this.usuario == "";
			  //     this.password == "";
        //     this.nombre == "";
        //     this.apellido == "";
        //     this.mail == "";
        //     /* alert("Grabado con exito!!!"); */
        //     @click="login";
			
        //   }else{
        //     alert("error!!!");
        //     /* this.usuario == "";
			  //     this.password == "";
        //     this.nombre == "";
        //     this.apellido == "";
        //     this.email == "";
			  //     @click="login"; */
        //   }
        // }).catch(
        //   function(error){
        //     alert(error);
        //   }
        // );

      }
    },
     
	 home() {
          this.$router.push('/home');
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
    registroexistoso(){
        this.$router.push('/registroexistoso');
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
		  actualizardatos(){
        this.$router.push('/actualizardatos');
			
      },
      actualizacionexistoso(){
        this.$router.push('/actualizacionexistoso');
			
      },
     historialagregar(){
        this.$router.push('/historialagregar');
			}
        
  }
    });
</script>


<style>
  ion-input.custom {
    --background: #fffdfd;
  }
</style>