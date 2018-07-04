import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [
    new Pokemon(1, 'Bulbizar'),
    new Pokemon(2, 'Herbizarre'),
    new Pokemon(3, 'Florizarre'),
    new Pokemon(4, 'Salamèche'),
    new Pokemon(5, 'Reptincel'),
    new Pokemon(6, 'Dracaufeu'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
