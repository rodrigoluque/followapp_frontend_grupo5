<template>

  <ion-page id="main-content" class="white-bg">
    <ion-header>
      <ion-toolbar>
        <br> 
        <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
        <center><h4> MI HISTORIAL </h4></center>
        </ion-toolbar>
    </ion-header>
    <ion-content color="light">          
      <br>
<h1>HISTORIAL</h1>

 <!-- <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"/> --> 
<ion-item v-for="historialh in historialsh" :key="historialh.id">
 <ion-grid>
    <ion-row>
      <ion-col><b>Afección</b></ion-col>
      <ion-col><b>Posología</b></ion-col>
    </ion-row>
    <ion-row >
      <ion-col >{{ historialh.afeccion }}</ion-col>
      <ion-col>{{ historialh.tratamiento }}</ion-col>
      <ion-col style="height:60px;">
        <ion-fab horizontal="end">
                <ion-fab-button color="warning">
                  <Icon  icon="ic:baseline-add-task" width="25"></Icon>
                </ion-fab-button>
                <ion-fab-list side="start">
                  <ion-fab-button color="danger" @click="historialpreeliminar">
                    <Icon  icon="carbon:close-filled" width="25"></Icon>
                  </ion-fab-button>
                  <ion-fab-button color="success" @click="historialeditar">
                    <Icon  icon="simple-line-icons:plus" width="25"></Icon>
                  </ion-fab-button>
                  </ion-fab-list>
              </ion-fab>
      </ion-col>
    </ion-row>
  </ion-grid>

</ion-item>
<br><br>
 <!--<ion-list :inset="true">

            <ion-item>
              <ion-title>Afecció</ion-title><ion-title>Posologia</ion-title>
            </ion-item>
             <ion-item>
              <ion-label>HIPERTENSIÓN</ion-label><ion-label>CRÓNICO</ion-label>
               <ion-fab horizontal="end">
                <ion-fab-button color="warning">
                  <Icon  icon="ic:baseline-add-task" width="30"></Icon>
                </ion-fab-button>
                <ion-fab-list side="start">
                  <ion-fab-button color="danger" @click="historialpreeliminar">
                    <Icon  icon="carbon:close-filled" width="30"></Icon>
                  </ion-fab-button>
                  <ion-fab-button color="success" href="/historialediar">
                    <Icon  icon="simple-line-icons:plus" width="30"></Icon>
                  </ion-fab-button>
                  </ion-fab-list>
              </ion-fab> 
             
            </ion-item>
            <ion-item>
              <ion-label>MIGRAÑA</ion-label><ion-label>TEMPORAL</ion-label>
              <ion-fab horizontal="end">
                <ion-fab-button color="warning">
                  <Icon  icon="ic:baseline-add-task" width="30"></Icon>
                </ion-fab-button>
                <ion-fab-list side="start" >
                  <ion-fab-button color="danger" @click="historialpreeliminar">
                    <Icon  icon="carbon:close-filled" width="30"></Icon>
                  </ion-fab-button >
                  <ion-fab-button color="success" href="/historialediar">
                    <Icon  icon="simple-line-icons:plus" width="30"></Icon>
                  </ion-fab-button>
                  </ion-fab-list>
              </ion-fab> 
              
            </ion-item>
            
          </ion-list> -->

           <!--<ion-list :inset="true">
            <ion-item>
              <ion-title>Afección</ion-title><ion-title>Posologia</ion-title>
            </ion-item>
             <ion-item>
              <ion-label>HIPERTENSIÓN</ion-label><ion-label>CRÓNICO</ion-label>
               <ion-fab horizontal="end">
                <ion-fab-button color="warning">
                  <Icon  icon="ic:baseline-add-task" width="30"></Icon>
                </ion-fab-button>
                <ion-fab-list side="start">
                  <ion-fab-button color="danger" @click="historialpreeliminar">
                    <Icon  icon="carbon:close-filled" width="30"></Icon>
                  </ion-fab-button>
                  <ion-fab-button color="success" href="/historialediar">
                    <Icon  icon="simple-line-icons:plus" width="30"></Icon>
                  </ion-fab-button>
                  </ion-fab-list>
              </ion-fab> 
             
            </ion-item>
            <ion-item>
              <ion-label>MIGRAÑA</ion-label><ion-label>TEMPORAL</ion-label>
              <ion-fab horizontal="end">
                <ion-fab-button color="warning">
                  <Icon  icon="ic:baseline-add-task" width="30"></Icon>
                </ion-fab-button>
                <ion-fab-list side="start" >
                  <ion-fab-button color="danger" @click="historialpreeliminar">
                    <Icon  icon="carbon:close-filled" width="30"></Icon>
                  </ion-fab-button >
                  <ion-fab-button color="success" href="/historialediar">
                    <Icon  icon="simple-line-icons:plus" width="30"></Icon>
                  </ion-fab-button>
                  </ion-fab-list>
              </ion-fab> 
              
            </ion-item>
            
          </ion-list>   -->      
 
 <div class="btn-wrapper">
          <ion-button  color="warning" fill="clear" @click="historialagregar"><Icon  icon="octicon:feed-plus-16" width="70"></Icon></ion-button>
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
    import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput,IonButton,IonDatetime, IonDatetimeButton, IonModal,IonFooter,IonCol,IonGrid,IonRow,IonFab, IonFabButton, IonFabList,IonIcon } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { Icon } from '@iconify/vue';
    import {
    chevronDownCircle,
    chevronForwardCircle,
    chevronUpCircle,
    colorPalette,
    document,
    globe,add
  } from 'ionicons/icons';
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
         IonCol,
         IonGrid,
         IonRow,
         IonFab,
         IonFabButton,
         IonFabList,
         IonIcon 
  
  },
  data() {
    return {
      historialsh: [], 
    };
  },
  computed: {
      tokenh() {
         return this.$store.state.token;
       },
       useridh(){
        return this.$store.state.user_id;
       }
    },
  mounted: async function() {
    try {
      const response = await axios.get(`http://followappapi.test:8081/api/users/${this.useridh}/historials`, {
        headers: {
          Authorization: `Bearer ${this.tokenh}`,
          Accept: 'application/json',
        },
      });
      
      this.historialsh = response.data.historials;
      console.log(this.historialsh);

    } catch (error) {
      console.error('Error al obtener la lista de historiales:', error);
    }
  },
     methods: {
      
    // getusuario() {
    //     axios.post("http://localhost/followapp/listar_usuario_grab.php",null,{params:{"idusuario":this.idusuario}})
    //     .then( (response) => {
    //         // alert(response);
    //        this.txtnombre = response.data.nombre;
		           
    //     }).catch(
    //       function(error){
    //         alert(error);
    //       });
    //      },
        // saveRecord(){
        //     axios.post("http://localhost/followapp/edit_usuario.php",null,{params:{"idusuario":this.idusuario, "usuario":this.usuario,"password":this.password,"nombre":this.nombre,"apellido":this.apellido,"mail":this.mail,"telefono":this.telefono,"dni":this.dni,"fechanac":this.fechanac,"parentesco":this.parentesco,"idcobertura":this.idcobertura}})
        // .then( (response) => {
        //   /* if(response.data.message == "success"){ */
        //    /*  this.$router.push("/misdatos"); */
        
        // }).catch(
        //   function(error){
        //     alert(error);
        //   });
        // },
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
			
      },
    },
    setup() {
    const chevronIcons = {
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
    };

    const otherIcons = {
      colorPalette,
      document,
      globe,
      add,
    };

    return { chevronIcons, otherIcons };
  },

    
    });
</script>
<style>
  ion-fab-button {
    --background: #65a4fb;
    --background-activated: #87d361;
    --background-hover: #a3e681;
    --border-radius: 15px;
    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    --color: black;
  }
</style>

