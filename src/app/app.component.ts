import { Component } from '@angular/core';
import { FavoriteCityComponent } from './favorite-city/favorite-city.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone-компоненты требуют явного импорта
  imports: [FavoriteCityComponent], // Добавляем сюда
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
