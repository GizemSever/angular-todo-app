import {Injectable} from '@angular/core';

const APP_PREFIX = `TODO-`;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`) || '{}');
  }

  removeItem(key: string): void {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  has(key: string): boolean {
    const item = localStorage.getItem(`${APP_PREFIX}${key}`);
    return (item !== null);
  }
}
