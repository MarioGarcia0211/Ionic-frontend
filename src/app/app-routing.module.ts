/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-admin',
    loadChildren: () => import('./pages/admin/inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
  {
    path: 'inicio-taqui',
    loadChildren: () => import('./pages/taquillero/inicio-taqui/inicio-taqui.module').then( m => m.InicioTaquiPageModule)
  },
  {
    path: 'inicio-turista',
    loadChildren: () => import('./pages/turista/inicio-turista/inicio-turista.module').then( m => m.InicioTuristaPageModule)
  },
  {
    path: 'mostrar-usuario-admin',
    loadChildren: () => import('./pages/admin/mostrar-usuario-admin/mostrar-usuario-admin.module').then( m => m.MostrarUsuarioAdminPageModule)
  },
  {
    path: 'mostrar-usuario-taquillero',
    loadChildren: () => import('./pages/admin/mostrar-usuario-taquillero/mostrar-usuario-taquillero.module').then( m => m.MostrarUsuarioTaquilleroPageModule)
  },
  {
    path: 'mostrar-usuario-turista',
    loadChildren: () => import('./pages/admin/mostrar-usuario-turista/mostrar-usuario-turista.module').then( m => m.MostrarUsuarioTuristaPageModule)
  },
  {
    path: 'crear-admin',
    loadChildren: () => import('./pages/admin/crear-admin/crear-admin.module').then( m => m.CrearAdminPageModule)
  },
  {
    path: 'crear-taquillero',
    loadChildren: () => import('./pages/admin/crear-taquillero/crear-taquillero.module').then( m => m.CrearTaquilleroPageModule)
  },
  {
    path: 'crear-turista',
    loadChildren: () => import('./pages/admin/crear-turista/crear-turista.module').then( m => m.CrearTuristaPageModule)
  },
  {
    path: 'mostrar-taquillero',
    loadChildren: () => import('./pages/taquillero/mostrar-taquillero/mostrar-taquillero.module').then( m => m.MostrarTaquilleroPageModule)
  },
  {
    path: 'mostrar-turis',
    loadChildren: () => import('./pages/taquillero/mostrar-turis/mostrar-turis.module').then( m => m.MostrarTurisPageModule)
  },
  {
    path: 'mostrar-reservas',
    loadChildren: () => import('./pages/taquillero/mostrar-reservas/mostrar-reservas.module').then( m => m.MostrarReservasPageModule)
  },
  {
    path: 'crear-reserva',
    loadChildren: () => import('./pages/taquillero/crear-reserva/crear-reserva.module').then( m => m.CrearReservaPageModule)
  },
  {
    path: 'crear-turis',
    loadChildren: () => import('./pages/taquillero/crear-turis/crear-turis.module').then( m => m.CrearTurisPageModule)
  },
  {
    path: 'generar-reserva',
    loadChildren: () => import('./pages/turista/generar-reserva/generar-reserva.module').then( m => m.GenerarReservaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
