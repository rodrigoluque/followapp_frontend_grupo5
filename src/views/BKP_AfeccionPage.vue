<template>
  <ion-page id="main-content">
    <ion-button  expand="block" fill="solid"   @click="home" router-direction="back">  Volver a home</ion-button>
  <ion-header>
       
    <ion-toolbar>
    <ion-title>Buscar Afección</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar  placeholder="Busqueda"></ion-searchbar>
    </ion-toolbar>
  </ion-header>

    <ion-list>
      <ion-item>
        <ion-select  label="Afecciones" :interface-options="customAlertOptions" interface="alert" placeholder="Seleccione una afección">
          <ion-select-option value="diabetes1">Diabetes tipo 1</ion-select-option>
          <ion-select-option value="diabetes2">Diabetes tipo 2</ion-select-option>
          <ion-select-option value="artritis">Artritis</ion-select-option>
          <ion-select-option value="alzheimer">Mal de Alzheimer</ion-select-option>
          <ion-select-option value="demencia">Demencia</ion-select-option>
          <ion-select-option value="asma">Asma</ion-select-option>
          <ion-select-option value="cancer">Cáncer</ion-select-option>
          <ion-select-option value="epoc">EPOC</ion-select-option>		
          <ion-select-option value="crohn">Enfermedad de Crohn</ion-select-option>
          <ion-select-option value="fibrosis">Fibrosis quística</ion-select-option>
          <ion-select-option value="endometriosis">Endometriosis</ion-select-option>
          <ion-select-option value="epilepsia">Epilepsia</ion-select-option>
          <ion-select-option value="fibromialgia">Fibromialgia</ion-select-option>		
          <ion-select-option value="coronaria">Enfermedad coronaria</ion-select-option>
          <ion-select-option value="hipertension">Hipertensión</ion-select-option>
          <ion-select-option value="vih">VIH/sida</ion-select-option>
          <ion-select-option value="migraña">Migraña</ion-select-option>
          <ion-select-option value="bipolaridad">Bipolaridad</ion-select-option>		
          <ion-select-option value="ciclotimia">Ciclotímia</ion-select-option>
          <ion-select-option value="depresion">Depresión</ion-select-option>
          <ion-select-option value="escleorosis">Esclerosis múltiple</ion-select-option>
          <ion-select-option value="narcolepsia">Narcolepsia</ion-select-option>
          <ion-select-option value="parkinson">Mal de Parkinson</ion-select-option>			
        </ion-select>
      </ion-item>
       
  
      <ion-item>
        <ion-select
          label="Medicamentos"
          :interface-options="customMedicamentosOptions"
          interface="Medicamentos"
          placeholder="Seleccione un medicamento"
        
        >
      
        <ion-select-option  value="SINTROM">SINTROM  <img src="src/6.jpeg"> </ion-select-option>
       
        <ion-select-option value="ACENOCOUMAROL ROSPAW">ACENOCOUMAROL ROSPAW</ion-select-option>
        <ion-select-option value="AZECAR">AZECAR</ion-select-option>
        <ion-select-option value="QURA MUK">QURA MUK</ion-select-option>
        <ion-select-option value="TEMPOTANE">TEMPOTANE</ion-select-option>
        <ion-select-option value="ACETILCISTEINA TEVA">ACETILCISTEINA TEVA</ion-select-option>
        <ion-select-option value="DENVERMUC 600">DENVERMUC 600</ion-select-option>
        <ion-select-option value="BRONCOLIUM">BRONCOLIUM</ion-select-option>
        <ion-select-option value="DOSOMUK">DOSOMUK</ion-select-option>
        <ion-select-option value="BALIMUC">BALIMUC</ion-select-option>
        <ion-select-option value="CISTEFORT">CISTEFORT</ion-select-option>
        <ion-select-option value="ACEMUK">ACEMUK</ion-select-option>
        <ion-select-option value="BRONCOLIUM 200">BRONCOLIUM 200</ion-select-option>

        </ion-select>
       
      </ion-item>
       
  
      <ion-item>
        <ion-select
          label="Forma Farmaceutica"
          :interface-options="customFormaOptions"
          interface="Forma"
          placeholder="Seleccione una Forma Farmaceutica"
        >
        <ion-select-option value="Polvo medicinal">Polvo medicinal</ion-select-option>
        <ion-select-option value="Comprimido">Comprimido</ion-select-option>
        <ion-select-option value="Píldora">Píldora</ion-select-option>
        <ion-select-option value="Cápsula">Cápsula</ion-select-option>
        <ion-select-option value="Ampolla">Ampolla</ion-select-option>
        <ion-select-option value="Jarabe">Jarabe</ion-select-option>
        <ion-select-option value="Inyectable">Inyectable</ion-select-option>
        <ion-select-option value="Emulsione">Emulsione</ion-select-option>
        <ion-select-option value="Colirio">Colirio</ion-select-option>
        <ion-select-option value="Supositorio">Supositorio</ion-select-option>
        <ion-select-option value="Pomada">Pomada</ion-select-option>
        
      </ion-select>
    </ion-item>
 


  <ion-item>
    <ion-select
      label="Concentración"
      :interface-options="customConcentracionOptions"
      interface="Concentracion"
      placeholder="Seleccione una concentración"
    >
    <ion-select-option value="1 mg comp.x 20">1 mg comp.x 20</ion-select-option>
    <ion-select-option value="4 mg comp.x 20">4 mg comp.x 20</ion-select-option>
    <ion-select-option value="4 mg comp.x 30">4 mg comp.x 30</ion-select-option>
    <ion-select-option value="600 mg comp.disp.x 10">600 mg comp.disp.x 10</ion-select-option>
    <ion-select-option value="600 mg comp.disp.x 20">600 mg comp.disp.x 20</ion-select-option>
    <ion-select-option value="jbe.x 100 ml">jbe.x 100 ml</ion-select-option>
    <ion-select-option value="600 mg sob.x 20">600 mg sob.x 20</ion-select-option>
    <ion-select-option value="600 mg sob.x 10">600 mg sob.x 10</ion-select-option>
    <ion-select-option value="600 mg comp.efer.x 10">600 mg comp.efer.x 10</ion-select-option>
    <ion-select-option value="600 mg comp.dispers.x 20">600 mg comp.dispers.x 20</ion-select-option>
    <ion-select-option value="600 mg comp.dispers.x 10">600 mg comp.dispers.x 10</ion-select-option>
    <ion-select-option value="600 mg tab.efer.x 12">600 mg tab.efer.x 12</ion-select-option>
    <ion-select-option value="200 mg comp.efer.x 12">200 mg comp.efer.x 12</ion-select-option>
    <ion-select-option value="200 mg sob.x 20">200 mg sob.x 20</ion-select-option>
    <ion-select-option value="600 mg comp.efer.x 24">600 mg comp.efer.x 24</ion-select-option>
    <ion-select-option value="200 mg tab.efer.x 10">200 mg tab.efer.x 10</ion-select-option>
    
    </ion-select>
</ion-item>
</ion-list>
<ion-item>
  <ion-checkbox justify="space-between">Tipo de tratamiento (PERMANENTE)</ion-checkbox>
</ion-item>
<ion-item>
  <ion-checkbox justify="space-between">Tipo de tratamiento (TEMPORAL)</ion-checkbox>
</ion-item>
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
  

  <ion-img
    src="../src/18.gif"
    alt="The Wisconsin State Capitol building in Madison, WI at night"
  ></ion-img>
  
</ion-page>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption,IonDatetime, IonDatetimeButton, IonModal,IonThumbnail  } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { IonCheckbox } from '@ionic/vue';
  
   
  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonSelect, IonSelectOption,IonDatetime, IonDatetimeButton, IonModal,IonThumbnail,IonCheckbox },
    
    setup() {



      const customAlertOptions = {
        header: 'Lista de afecciones',
        /* subHeader: 'Selecciona tu afeccion.', */
        message: 'Solo seleccione una.',
        translucent: true,
      };

      const customMedicamentosOptions = {
        header: 'Lista de medicamentos',
        message: 'Solo seleccione una.',
        translucent: true,
      };

      const customFormaOptions = {
        header: 'Lista de Forma farmaceutica',
        message: 'Solo seleccione una.',
        translucent: true,
      };

      const customConcentracionOptions = {
        header: 'Lista de concentración',
        message: 'Solo seleccione una.',
        translucent: true,
      };

      const customtratamiento = {
        header: 'Tipo de tratamiento',
        message: 'Solo seleccione una.',
        translucent: true,
      };

      return {
        customAlertOptions,
        customMedicamentosOptions,
        customFormaOptions,
        customConcentracionOptions,
        customtratamiento,
      };
      const isPickerOpen = ref(false)
function openPicker() {
  isPickerOpen.value = true
}
function handleClose() {
  isPickerOpen.value = false
}
    },
  });
</script>
