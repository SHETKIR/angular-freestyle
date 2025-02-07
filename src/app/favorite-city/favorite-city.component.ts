import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule

@Component({
  selector: 'app-favorite-city',
  standalone: true, // Standalone-компонент
  imports: [CommonModule], // Добавляем поддержку пайпов
  templateUrl: './favorite-city.component.html',
  styleUrls: ['./favorite-city.component.scss']
})
export class FavoriteCityComponent {
  city: string = 'Санкт-Петербург';
  description: string = 'Северная столица России, город на Неве с уникальной архитектурой.';
  population: number = 5384000;
  today: Date = new Date();

  changeCity() {
    this.city = 'Москва';
    this.description = 'Столица России, крупнейший город страны.';
    this.population = 12600000;
  }
}
