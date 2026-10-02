import { Routes } from '@angular/router';

export const routes: Routes = [
  //ruta por defecto (pública)
  {
    path: '',
    loadComponent: () =>
      import('./features/public/cartelera/cartelera.component').then((m) => m.CarteleraComponent),
  },

  //autenticacion
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/dashboard-admin/dashboard-admin.component').then(
        (m) => m.DashboardAdminComponent,
      ),
    // canActivate: [adminGuard]
  },

  {
    path: 'empleado',
    loadComponent: () =>
      import('./features/empleado/validador-qr/validador-qr.component').then(
        (m) => m.ValidadorQrComponent,
      ),
    // canActivate: [empleadoGuard]
  },

  //si no se encuentra una ruta, se redirige acá
  {
    path: '**',
    redirectTo: '',
  },
];
