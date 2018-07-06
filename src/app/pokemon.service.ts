import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

   fetchPokemon(): Pokemon[] {
      return [
        new Pokemon(1, 'Bulbizar'),
        new Pokemon(2, 'Herbizarre'),
        new Pokemon(3, 'Florizarre'),
        new Pokemon(4, 'Salamèche'),
        new Pokemon(5, 'Reptincel'),
        new Pokemon(6, 'Dracaufeu'),
      ];
  }
}
