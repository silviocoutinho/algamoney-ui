import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent  {

  pessoas = [
    {status: 'ATIVO', nome: 'Manoel da Silva', cidade: 'Uberlândia',
     estado: 'MG' },
    {status: 'ATIVO', nome: 'Sebastião Pinheiro', cidade: 'São Paulo',
     estado: 'SP' },
    {status: 'INATIVO', nome: 'Carla Souza', cidade: 'Florianopolis',
     estado: 'SC' },
    {status: 'ATIVO', nome: 'Luis Pereira', cidade: 'Rio de Janeiro',
     estado: 'RJ' },
    {status: 'INATIVO', nome: 'Vilmar Andrade', cidade: 'Curitiba',
     estado: 'PR' },
    {status: 'ATIVO', nome: 'João Goulart', cidade: 'Uberlândia',
     estado: 'MG' }
  ];



}
