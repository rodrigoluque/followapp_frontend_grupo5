
<template>

  <ion-page id="main-content" class="white-bg">
    <ion-header>
      <ion-toolbar>
        <br> 
        <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
        <center><h4>  MIS DATOS</h4>
          <p> Carga o cambia tus datos de perfil</p></center>
        </ion-toolbar>
    </ion-header>
    <ion-content color="light">
      <br>
         <!-- <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"/>-->
          <div class="row">
            <div class="col-xs-6">
          <ion-input type="text" label="Nombre" label-placement="floating" fill="outline" v-model="nombre"   ></ion-input>
           </div> 
              <ion-input type="text" label="Apellido" label-placement="floating" fill="outline" v-model="apellido" ></ion-input>
           </div>
      
         <ion-list>
            <ion-item>
              <ion-select justify="start" value="DNI">
                <ion-select-option value="DNI">DNI</ion-select-option>
                <ion-select-option value="CM">CM</ion-select-option>
                <ion-select-option value="LC">LC</ion-select-option>
              </ion-select>
              <ion-input type="text" label="" fill="outline" v-model="documento"></ion-input>
            </ion-item>
         </ion-list>
        <ion-input type="email" label="Correo electrónico" label-placement="floating" fill="outline"  v-model="mail" autocomplete="off"></ion-input>
        <ion-input  :type="passwordFieldType"  label="Ingrese su contraseña" label-placement="floating" fill="outline" placeholder="Constraseña" v-model="password" class="col-xs-9  "></ion-input>
       <IonButton   fill="clear" size="large" type="password" @click="switchVisibility" ><Icon slot="icon-only" icon="ion:eye-off-outline"></Icon></IonButton>
       
       <ion-list>
        <ion-item>
          <ion-select justify="start" label="PREPAGA/OS">
            <ion-select-option value="OMINT">OMINT</ion-select-option>
            <ion-select-option value="OSDE">OSDE</ion-select-option>
          </ion-select>
          <ion-input type="text" label="Número de afiliado" label-placement="floating" fill="outline" v-model="prepaga"   ></ion-input>
        </ion-item>
     </ion-list>

        <ion-list>
          <ion-item>
            <ion-select justify="start" value="ROL">
              <ion-select-option value="ROL">ROL</ion-select-option>
            </ion-select>
            <ion-input type="text" label="Parentezco" label-placement="floating" fill="outline" v-model="parentezco"   ></ion-input>
          </ion-item>
       </ion-list>
      
       <br>
       <div class="btn-wrapper">
        <ion-button color="warning"  fill="clear"  @click="actualizardatos"><Icon  icon="raphael:edit" width="70"></Icon></ion-button>
        </div> 
                            
            </ion-content>
            <!-- class="ion-float-center" -->
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
  import { ref } from 'vue';
  import axios from 'axios';
  import { useStore } from 'vuex';

  
const date = ref(new Date());
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
  data(){
      return{
        followapp:[],
        usuario: '',
        password: "",
            passwordFieldType: "password", 
		mail: '', 
        nombre: '',
        apellido: '',
        parentezco:'',
        documento:'',
        prepaga:''
      }
    },
    
   mounted(){
    // this.loadscliente();
   }, 
   methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
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
        } 
      },
    setup() {
      
    },
    computed: {
      usermd() {
        return this.$store.state.user;
      },
      dnimd(){
        return this.$store.state.dni;
      }
    }

  });
</script>
