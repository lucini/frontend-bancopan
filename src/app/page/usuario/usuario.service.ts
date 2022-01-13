import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService {

  private endpoint = 'users';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.getFullUrl());
  }

  getFullUrl(): string {
    return `${environment.apiUrl}/${this.endpoint}`;
  }
}