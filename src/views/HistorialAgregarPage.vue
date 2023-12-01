
<template>

    <ion-page id="main-content" class="white-bg">
      <ion-header>
        <ion-toolbar>
          <br> 
          <ion-img class="logo-avatar" src="../src/logo.png"></ion-img>
          <center><h4> MI HISTORIAL</h4></center>
          </ion-toolbar>
      </ion-header>
      <ion-content color="light">
        <br>

           <ion-list>
              <ion-item>
                <ion-select ref="afecciones" label="Afecciones" placeholder="Seleccione una opción">
                    <ion-select-option value="Diabetes tipo 1">Diabetes tipo 1</ion-select-option>
                    <ion-select-option value="Diabetes tipo 2">Diabetes tipo 2</ion-select-option>
                    <ion-select-option value="Artritis">Artritis</ion-select-option>
                    <ion-select-option value="Alzheimer">Mal de Alzheimer</ion-select-option>
                    <ion-select-option value="Demencia">Demencia</ion-select-option>
                    <ion-select-option value="Asma">Asma</ion-select-option>
                    <ion-select-option value="Cáncer">Cáncer</ion-select-option>
                    <ion-select-option value="Epoc">EPOC</ion-select-option>		
                    <ion-select-option value="Crohn">Enfermedad de Crohn</ion-select-option>
                    <ion-select-option value="Fibrosis quística">Fibrosis quística</ion-select-option>
                    <ion-select-option value="Endometriosis">Endometriosis</ion-select-option>
                    <ion-select-option value="Epilepsia">Epilepsia</ion-select-option>
                    <ion-select-option value="Fibromialgia">Fibromialgia</ion-select-option>		
                    <ion-select-option value="Coronaria">Enfermedad coronaria</ion-select-option>
                    <ion-select-option value="Hipertensión">Hipertensión</ion-select-option>
                    <ion-select-option value="VIH">VIH/sida</ion-select-option>
                    <ion-select-option value="migraña">Migraña</ion-select-option>
                    <ion-select-option value="Bipolaridad">Bipolaridad</ion-select-option>		
                    <ion-select-option value="ciclotimia">Ciclotímia</ion-select-option>
                    <ion-select-option value="Depresion">Depresión</ion-select-option>
                    <ion-select-option value="Escleorosis múltiple">Esclerosis múltiple</ion-select-option>
                    <ion-select-option value="Narcolepsia">Narcolepsia</ion-select-option>
                    <ion-select-option value="Parkinson">Mal de Parkinson</ion-select-option>			
                  </ion-select>
               <!--  <ion-input type="text" label="Seleccione una opción" label-placement="floating" fill="outline" v-model="documento"   ></ion-input> -->
              </ion-item>
           </ion-list>
          
           <ion-list>
            <ion-item>
              <ion-select  ref="medicamentos" label="Medicamentos" placeholder="Seleccione una opción">
                  <ion-select-option value="SINTROM">SINTROM</ion-select-option>
                  <ion-select-option value="AZECAR">AZECAR</ion-select-option>
                  <ion-select-option value="TEMPOTANE">TEMPOTANE</ion-select-option>
                  <ion-select-option value="DENVERMUC 600">DENVERMUC 600</ion-select-option>
                  <ion-select-option value="BRONCOLIUM">BRONCOLIUM</ion-select-option>
                  <ion-select-option value="DOSOMUK">DOSOMUK</ion-select-option>
                  <ion-select-option value="BALIMUC">BALIMUC</ion-select-option>
                  <ion-select-option value="CISTEFORT">CISTEFORT</ion-select-option>		
                  <ion-select-option value="ACEMUK">ACEMUK</ion-select-option>
                  <ion-select-option value="BRONCOLIUM 200">BRONCOLIUM 200</ion-select-option>
                  <ion-select-option value="LAFEVIR">LAFEVIR</ion-select-option>
                  <ion-select-option value="ASPIRINA PREVENT 325">ASPIRINA PREVENT 325</ion-select-option>
                  <ion-select-option value="CALLPAX">CALLPAX</ion-select-option>		
                  	
                </ion-select>
              <!-- <ion-input type="text" label="Seleccione una opción" label-placement="floating" fill="outline" v-model="documento"   ></ion-input> -->
            </ion-item>
         </ion-list>        
         <ion-list>
            <ion-item>
              <ion-select ref="formaFarmaceutica" label="Forma farmaceutica" placeholder="Seleccione una opción">
                  <ion-select-option value="Tabletas">Tabletas</ion-select-option>
                  <ion-select-option value="Comprimidos">Comprimidos</ion-select-option>
                  <ion-select-option value="Grageas">Grageas</ion-select-option>
                  <ion-select-option value="Píldoras">Píldoras</ion-select-option>
                  <ion-select-option value="Cápsulas">Cápsulas</ion-select-option>
                  <ion-select-option value="Ampollas">Ampollas</ion-select-option>
                  <ion-select-option value="Jarabes">Jarabes</ion-select-option>
                  <ion-select-option value="Inyectables">Inyectables</ion-select-option>		
                  <ion-select-option value="Emulsiones">Emulsiones</ion-select-option>
                  <ion-select-option value="Pomadas">Pomadas</ion-select-option>               	
                </ion-select>
              
            </ion-item>
         </ion-list>   
  
         <ion-list>
            <ion-item>
              <ion-select ref="composicion" label="Composición " placeholder="Seleccione una opción">
                  <ion-select-option value="SINTROM">acenocumarol</ion-select-option>
                  <ion-select-option value="AZECAR">Acenocumarol </ion-select-option>
                  <ion-select-option value="TEMPOTANE">N-acetilcisteina</ion-select-option>
                  <ion-select-option value="DENVERMUC 600">Acetilcisteína 600 mg</ion-select-option>
                  <ion-select-option value="BRONCOLIUM">Ácido cítrico anhidro</ion-select-option>
                  <ion-select-option value="DOSOMUK">N-Acetilcisteína 600 mg</ion-select-option>
                  <ion-select-option value="BALIMUC"> N-Acetilcisteína 600 mg</ion-select-option>
                  <ion-select-option value="CISTEFORT">acetilcisteína</ion-select-option>		
                  <ion-select-option value="ACEMUK">Paracetamol </ion-select-option>
                  <ion-select-option value="LAFEVIR">Aciclovir</ion-select-option>
                  <ion-select-option value="ASPIRINA PREVENT 325">Ácido Acetilsalicílico 325 mg</ion-select-option>
                  <ion-select-option value="CALLPAX">Alprazolam</ion-select-option>		
                  	
                </ion-select>
             
            </ion-item>
         </ion-list> 

         <ion-list>
            <ion-item>
              <ion-select ref="tratamiento"  label="Tratamiento " placeholder="Seleccione una opción">
                  <ion-select-option value="TEMPORAL">TEMPORAL</ion-select-option>
                  <ion-select-option value="PERMANENTE">PERMANENTE </ion-select-option>                 	
                </ion-select>
            </ion-item>
         </ion-list> 
         <ion-item>
            <ion-label>Fecha inicio:</ion-label><br>
            <ion-datetime-button  datetime="dateini"></ion-datetime-button>
              <ion-modal :keep-contents-mounted="true">
               
                <ion-datetime id="dateini"></ion-datetime>
              </ion-modal>
            </ion-item>
            <ion-item>
              <ion-label>Fecha fin:</ion-label><br>
              <ion-datetime-button datetime="datefin"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
              <ion-datetime id="datefin"></ion-datetime>
                </ion-modal>
              </ion-item> 
         <br><br>
         <div class="btn-wrapper">
              <ion-button  color="warning" fill="clear"  @click="historialagregar"><Icon  icon="ph:plus-circle-fill" width="75"></Icon></ion-button>
              <ion-button  color="warning" fill="clear"  @click="historialpreeliminar"><Icon  icon="ic:round-cancel" width="70"></Icon></ion-button>
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
  
  <script lang="ts">
    import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput,IonButton,IonDatetime, IonDatetimeButton, IonModal,IonFooter} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { Icon } from '@iconify/vue';
    import { ref } from 'vue';
    import axios from 'axios';
    import { useStore } from 'vuex';
  
  import { Storage } from '@ionic/storage';   
  
    
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
      computed: {
      tokenha() {
         return this.$store.state.token;
       },
       useridha(){
        return this.$store.state.user_id;
       }
    },
      
     mounted(){
      //this.loadscliente();
     }, methods: {
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
      },
        // loadscliente(){
        //   axios.post("http://localhost/followapp/listar_usuario.php")
        //   .then( (response) => {
        //     this.followapp=response.data;
        //     })
        //     .catch( function(error){
        //       alert(error);
        //     });
          
        //   },
         
          historialagregada(){

        this.$router.push('/historialagregada');
			
      },

      historialagregar() {
        // Collect the selected values from your ion-select components
        const afeccion = this.$refs.afecciones.value;
    const medicamento = this.$refs.medicamentos.value;
    const forma_farmaceutica = this.$refs.formaFarmaceutica.value;
    const composicion = this.$refs.composicion.value;
    const tratamiento = this.$refs.tratamiento.value;
    const fecha_inicio= "2023-11-30";
    const hora_inicio= "12:00";
    const fecha_fin= "2023-11-30";
    const hora_fin= "2:00";
    const cada_24= 0;
    const cada_12= 0;
    const cada_8= 0;
    const cada_6= 1;
    const antes_almuerzo_cena= 0;
    const despues_almuerzo_cena= 1;
    const cuando_sea_necesario= 0;
    const user_id= 5


        // Prepare the data payload
        const data = {
          afeccion,
          medicamento,
          forma_farmaceutica,
          composicion,
          tratamiento,
          fecha_inicio,
    hora_inicio,
    fecha_fin,
    hora_fin,
    cada_24,
    cada_12,
    cada_8,
    cada_6,
    antes_almuerzo_cena,
    despues_almuerzo_cena,
    cuando_sea_necesario,
    user_id
          
          //dateini: this.dateini,
          //datefin: this.datefin,
        };
      
        axios.post('http://followappapi.test:8081/api/historials', data, {
          headers: {
            Authorization: `Bearer ${this.tokenha}`,
            'Content-Type': 'application/json',
          },
        }
        )
          .then((response) => {
            this.historialagregada();
          
          })
          .catch((error) => {
            console.error(error);
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
			
      },
         
		
			      historialeliminar(){
        this.$router.push('/historialeliminar');
			
      },
         
		      eventoshora(){
        this.$router.push('/eventoshora');
			
      },
          
		      historialpreeliminar(){
        this.$router.push('/historialpreeliminar');
			
      }
    },
         		

    });
  </script>
  