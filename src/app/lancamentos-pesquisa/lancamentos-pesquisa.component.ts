import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent  {


  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    {tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '10/06/2017',
     dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil' },
     {tipo: 'DESPESA', descricao: 'Computadores Dell I5 7 Geração - 15 un', dataVencimento: '30/06/2017',
     dataPagamento: '25/06/2017', valor: 75000, pessoa: 'B12 Computers' },
    {tipo: 'DESPESA', descricao: 'Servidor IBM', dataVencimento: '30/06/2017',
     dataPagamento: '29/06/2017', valor: 35000, pessoa: 'B12 Computers' },
     {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    {tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '10/06/2017',
     dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil' },
     {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    {tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '10/06/2017',
     dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil' },
     {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    {tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '10/06/2017',
     dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil' },
     {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    {tipo: 'DESPESA', descricao: 'Produtos Supermercado', dataVencimento: '10/07/2017',
     dataPagamento: '09/07/2017', valor: 500, pessoa: 'Jaú-serve' },
     {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    {tipo: 'DESPESA', descricao: 'Parcela Carro - 1', dataVencimento: '10/08/2017',
     dataPagamento: '09/08/2017', valor: 350, pessoa: 'Fiat Brasil' },
     {tipo: 'DESPESA', descricao: 'Parcela Carro - 2', dataVencimento: '10/09/2017',
     dataPagamento: null, valor: 350, pessoa: 'Fiat Brasil' },
     {tipo: 'DESPESA', descricao: 'Parcela Carro - 3', dataVencimento: '10/10/2017',
     dataPagamento: null, valor: 350, pessoa: 'Fiat Brasil' },
     {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/10/2017',
     dataPagamento: null, valor: 5.00, pessoa: 'Padaria do José' },
     {tipo: 'DESPESA', descricao: 'Parcela Carro - 4', dataVencimento: '10/11/2017',
     dataPagamento: null, valor: 350, pessoa: 'Fiat Brasil' },
     {tipo: 'DESPESA', descricao: 'Parcela Carro - 5', dataVencimento: '10/12/2017',
     dataPagamento: null, valor: 350, pessoa: 'Fiat Brasil' },
     {tipo: 'DESPESA', descricao: 'Parcela Carro - 6', dataVencimento: '10/01/2018',
     dataPagamento: null, valor: 350, pessoa: 'Fiat Brasil' },
     {tipo: 'DESPESA', descricao: 'Parcela Carro - 7', dataVencimento: '10/02/2018',
     dataPagamento: null, valor: 350, pessoa: 'Fiat Brasil' },
     {tipo: 'DESPESA', descricao: 'Parcela Carro - 8', dataVencimento: '10/03/2018',
     dataPagamento: null, valor: 350, pessoa: 'Fiat Brasil' },
     {tipo: 'DESPESA', descricao: 'Parcela Carro - 9', dataVencimento: '10/04/2018',
     dataPagamento: null, valor: 350, pessoa: 'Fiat Brasil' }
    ];

}
