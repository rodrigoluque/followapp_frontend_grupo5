<template>
 
    <ion-page id="main-content" class="white-bg">
      <ion-header>
        <ion-toolbar>
          <br> 
          <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
          <center><h4>MIS EVENTOS</h4></center>
          </ion-toolbar>
      </ion-header> 
      <ion-content color="light">
        <br>
      
        <ion-card v-for="historiale in historialse" :key="historiale.id">
    <ion-card-header>
      <ion-card-title>
        <Icon  icon="noto:spiral-calendar" width="30"></Icon>
        <span style="margin-left:5px;font-size:3rem;"><strong>{{ historiale.medicamento }}</strong></span>
      </ion-card-title>
      <ion-card-subtitle style="margin-left:5px;font-size:2.5rem;color: black;"><strong>Frecuencia</strong></ion-card-subtitle>
    </ion-card-header>

    <ion-card-content style="font-size:2.5rem;background-color: rgb(255, 255, 255);">
      <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
        <ion-toggle justify="space-between" color="success" :checked="historiale.cada_24"><h4>Cada 24hs</h4></ion-toggle>
        </ion-item> 
        <ion-item>
            <ion-toggle justify="space-between" color="success" :checked="historiale.cada_12"><h4>Cada 12hs</h4></ion-toggle>
            </ion-item> 
            <ion-item>
                <ion-toggle justify="space-between" color="success" :checked="historiale.cada_8"><h4>Cada 8hs</h4></ion-toggle>
                </ion-item> 
                <ion-item>
                    <ion-toggle justify="space-between" color="success" :checked="historiale.cada_6"><h4>Cada 6hs</h4></ion-toggle>
                    </ion-item> 
                    <ion-item>
                        <ion-toggle justify="space-between" color="success" :checked="historiale.antes_almuerzo_cena"><h4>Antes del almuerzo y cena</h4></ion-toggle>
                        </ion-item> 
                        <ion-item>
                            <ion-toggle justify="space-between" color="success" :checked="historiale.despues_almuerzo_cena"><h4>Despúes del almuerzo y cena</h4></ion-toggle>
                            </ion-item> 
                            <ion-item>
                                <ion-toggle justify="space-between" color="success" :checked="historiale.cuando_sea_necesario"><h4>Cuando sea necesario</h4></ion-toggle>
                                </ion-item>

              </ion-col>
            </ion-row>
      </ion-grid>

    </ion-card-content>
  </ion-card>
      
       <!-- <ion-list>
          <ion-item>
           <ion-button  fill="clear" class="ion-float-right" @click="eventos"><Icon  icon="noto:spiral-calendar" width="50"></Icon></ion-button>  
            <ion-label>
              <h1>Ibuprofeno 800mg </h1>
            </ion-label>        
          </ion-item>
        </ion-list>

        <center><h3> Frecuencia</h3></center>  
        <ion-grid>
            <ion-row>
              <ion-col>
                
        <ion-item>
        <ion-toggle justify="space-between" color="success" :checked="true"><h4>Cada 24hs</h4></ion-toggle>
        </ion-item> 
        <ion-item>
            <ion-toggle justify="space-between" color="success" :checked="true"><h4>Cada 12hs</h4></ion-toggle>
            </ion-item> 
            <ion-item>
                <ion-toggle justify="space-between" color="success" :checked="true"><h4>Cada 8hs</h4></ion-toggle>
                </ion-item> 
                <ion-item>
                    <ion-toggle justify="space-between" color="success" :checked="true"><h4>Cada 6hs</h4></ion-toggle>
                    </ion-item> 
                    <ion-item>
                        <ion-toggle justify="space-between" color="success" :checked="true"><h4>Antes del almuerzo y cena</h4></ion-toggle>
                        </ion-item> 
                        <ion-item>
                            <ion-toggle justify="space-between" color="success" :checked="true"><h4>Despúes del almuerzo y cena</h4></ion-toggle>
                            </ion-item> 
                            <ion-item>
                                <ion-toggle justify="space-between" color="success" :checked="true"><h4>Cuando sea necesario</h4></ion-toggle>
                                </ion-item>
                            </ion-col>
                        </ion-row>
                      </ion-grid> -->
                                      
  
  <div class="btn-wrapper">
    <ion-button color="warning"  fill="clear"  @click="eventoshora"><Icon  icon="carbon:next-filled" width="70"></Icon></ion-button>
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
    data() {
    return {
      historialse: [], 
    };
  },
  computed: {
      tokene() {
         return this.$store.state.token;
       },
       useride(){
        return this.$store.state.user_id;
       }
    },
  mounted: async function() {
    try {
      const response = await axios.get(`http://followappapi.test:8081/api/users/${this.useride}/historials`, {
        headers: {
          Authorization: `Bearer ${this.tokene}`,
          Accept: 'application/json',
        },
      });
      
      this.historialse = response.data.historials;

    } catch (error) {
      console.error('Error al obtener la lista de eventos:', error);
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
  