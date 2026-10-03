import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../../core/services/supabase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private supabaseService = inject(SupabaseService);

  email = signal('');
  password = signal('');
  mensaje = signal(''); 

  async iniciarSesion() {
    const { data, error } = await this.supabaseService.client.auth.signInWithPassword({
      email: this.email(),
      password: this.password(),
    });

    if (error) {

      this.mensaje.set('Error al iniciar sesión: ' + error.message);
    } else {
      this.mensaje.set('¡Inicio de sesión exitoso!');

    }
  }
}
