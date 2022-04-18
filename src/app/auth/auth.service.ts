/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthnticate = false;

  constructor() {}

  get isAuthnticate() {
    return this._isAuthnticate;
  }

  login() {
    this._isAuthnticate = true;
  }

  logout() {
    this._isAuthnticate = false;
  }
}
