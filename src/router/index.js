import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import Register1Page from '../views/Register1Page.vue'
import MisdatosPage from '../views/MisdatosPage.vue' 
import HistorialPage from '../views/HistorialPage.vue'
import MedicamentosPage from '../views/MedicamentosPage.vue'
import ForgotPasswordPage from '../views/ForgotPasswordPage.vue'
import AppTypeahead from '../views/AppTypeahead.vue' 
import EventosPage from '../views/EventosPage.vue'
import ActualizarDatosPage from '../views/ActualizarDatosPage.vue'
import RegistroExistosoPage from '../views/RegistroExistosoPage.vue'
import LogOutPage from '../views/LogOutPage.vue'
import ActualizacionExistosoPage from '../views/ActualizacionExistosoPage.vue'
import RecuperaCodigoPage from '../views/RecuperaCodigoPage.vue'
import RecuperaContrasenaPage from '../views/RecuperaContrasenaPage.vue'
import RecuperaExistosoPage from '../views/RecuperaExistosoPage.vue'
import CompartirPage from '../views/CompartirPage.vue'
import EnvioExitosoPage from '../views/EnvioExitosoPage.vue'
import EventosHoraPage from '../views/EventosHoraPage.vue'
import EventosNotificarPage from '../views/EventosNotificarPage.vue'
import EventoNotificadoPage from '../views/EventoNotificadoPage.vue'
import HistorialAgregarPage from '../views/HistorialAgregarPage.vue'
import HistorialEdiarPage from '../views/HistorialEdiarPage.vue'
import HistorialPreEliminar from '../views/HistorialPreEliminar.vue'
import HistorialEliminarPage from '../views/HistorialEliminarPage.vue'
import HistorialagregadaPage from '../views/HistorialagregadaPage.vue'
import HistorialEditadaPage from '../views/HistorialEditadaPage.vue'

import { Icon } from '@iconify/vue';


import axios from 'axios'



const routes = [

  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    lpath: '/login',
    redirect: '/login',
    component: LoginPage,
  },
  {
    path: '/login',
    name: 'Login',
  
    component: LoginPage,
  }, 
  {
    path: '/register1',
    name: 'Register1',
    component: Register1Page,
  },

  {
    path: '/misdatos',
    name: 'Misdatos',
    component: MisdatosPage,
  },
  {
    path: '/historial',
    name: 'HistorialPage',
    component: HistorialPage,
  },
  {
    path: '/medicamentos',
    name: 'Medicamentos',
    component: MedicamentosPage,
  },

  {
    path: '/appTypeahead',
    name: 'AppTypeahead',
    component: AppTypeahead,
  }, 
  {
    path: '/eventos',
    name: 'Eventos',
    component: EventosPage,
  },
  {
    path: '/Forgot-Password',
    name: 'ForgotPassword',
    component: ForgotPasswordPage,
  },
  {
    path: '/actualizardatos',
    name: 'ActualizarDatos',
    component: ActualizarDatosPage,
  },
  {
    path: '/registroexistoso',
    name: 'RegistroExistoso',
    component: RegistroExistosoPage,
  },
  {
    path: '/logout',
    name: 'LogOut',
    component: LogOutPage,
  },
  {
    path: '/actualizacionexistoso',
    name: 'ActualizacionExistoso',
    component: ActualizacionExistosoPage,
  },
  {
    path: '/recuperacodigo',
    name: 'RecuperaCodigoPage',
    component: RecuperaCodigoPage,
  },
  {
    path: '/recuperacontrasena',
    name: 'RecuperaContrasena',
    component: RecuperaContrasenaPage,
  },
  {
    path: '/recuperaexistoso',
    name: 'RecuperaExistoso',
    component: RecuperaExistosoPage,
  },
  {
    path: '/compartir',
    name: 'compartirpage',
    component: CompartirPage,
  },
  {
    path: '/envioexitoso',
    name: 'EnvioExitoso',
    component: EnvioExitosoPage,
  },
  {
    path: '/eventoshora',
    name: 'EventosHora',
    component: EventosHoraPage,
  },
  {
    path: '/eventosnotificar',
    name: 'EventosNotificar',
    component: EventosNotificarPage,
  },
  {
    path: '/eventonotificado',
    name: 'EventoNotificado',
    component: EventoNotificadoPage,
  },
  {
    path: '/historialagregar',
    name: 'HistorialAgregar',
    component: HistorialAgregarPage,
  },
  
  {
    path: '/historialediar',
    name: 'HistorialEdiar',
    component: HistorialEdiarPage,
  },
  {
    path: '/historialpreeliminar',
    name: 'HistorialPreEliminar',
    component: HistorialPreEliminar,
  },
  {
    path: '/historialeliminar',
    name: 'HistorialEliminar',
    component: HistorialEliminarPage,
  },
  {
    path: '/historialagregada',
    name: 'Historialagregada',
    component: HistorialagregadaPage,
  },
  {
    path: '/historialeditada',
    name: 'HistorialEditada',
    component: HistorialEditadaPage,
  } 
 

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
