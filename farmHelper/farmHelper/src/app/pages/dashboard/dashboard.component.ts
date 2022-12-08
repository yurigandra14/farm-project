import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { DespesasComponent } from '../despesas/despesas.component';
import { ReceitasComponent } from './../receitas/receitas.component';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;



  public contasParaPagarVencidas = 0
  public contasParaPagarProximas = 0

  public receitaMesPassado = 0
  public receitaMesAtual = 0
  public receitaMesProximo = 0

  public despesaMesPassado = 0
  public despesaMesAtual = 0
  public despesaMesProximo = 0

  ngOnInit() {
    this.inicializa()
    this.chartColor = "#FFFFFF";

    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.chartHours = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
        }
        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });


    this.canvas = document.getElementById("chartEmail");
    this.ctx = this.canvas.getContext("2d");
    this.chartEmail = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#e3e3e3',
            '#4acccd',
            '#fcc468',
            '#ef8157'
          ],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }]
      },

      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });

    var speedCanvas = document.getElementById("speedChart");

    var dataFirst = {
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });
  }

  inicializa() {
    let despesasComponente = new DespesasComponent()
    let receitasComponente = new ReceitasComponent()
    despesasComponente.ngOnInit()
    receitasComponente.ngOnInit()
    let despesas = despesasComponente.getDespesas()
    let receitas = receitasComponente.getReceitas()
    console.log(receitas);
    let now = new Date()

    let quinzeDias = new Date()
    let trintaDias = new Date()
    quinzeDias.setDate(now.getDate() + 15)
    trintaDias.setDate(now.getDate() + 30)

    let currentMonth = now.getMonth()
    let lastMonth = now.getMonth() - 1
    let nextMonth = now.getMonth() + 1

    if (nextMonth == 12) nextMonth = 0
    if (lastMonth == -1) lastMonth = 11

    // console.log(currentMonth, lastMonth, nextMonth);
    // console.log(desp.dataVencimento.getMonth());

    receitas.forEach(receita => {

      // RECEITAS DO MÊS ATUAL
      console.log(receita.dataVencimento);
      if (receita.dataVencimento.getMonth() == currentMonth && receita.status == 0) {
        this.receitaMesAtual += receita.valor
      }

      if (receita.dataVencimento.getMonth() == lastMonth && receita.status == 0) {
        
        
        this.receitaMesPassado += receita.valor
      }

      if (receita.dataVencimento.getMonth() == nextMonth && receita.status == 0) {
        this.receitaMesProximo += receita.valor
      }

    });

    despesas.forEach(desp => {
      // CONTAS VENCIDAS
      if(desp.dataVencimento.getTime()<= now.getTime()){
        this.contasParaPagarVencidas++
      }

      // CONTAS A VENCER NO PRÓXIMO MÊS
      if(desp.dataVencimento.getTime() <= trintaDias.getTime() && desp.dataVencimento.getTime() < now.getTime()){
        this.contasParaPagarProximas++
      }

      // // DESPESAS DO MÊS ATUAL
      // let currentMonth = now.getMonth()
      // let lastMonth = now.getMonth() - 1
      // let nextMonth = now.getMonth() + 1

      // if (nextMonth == 12) nextMonth = 0
      // if (lastMonth == -1) lastMonth = 11

      // console.log(currentMonth, lastMonth, nextMonth);
      // console.log(desp.dataVencimento.getMonth());


      if (desp.dataVencimento.getMonth() == currentMonth && desp.status == 0) {
        this.despesaMesAtual += desp.valor
      }

      if (desp.dataVencimento.getMonth() == lastMonth && desp.status == 0) {
        this.despesaMesPassado += desp.valor
      }

      if (desp.dataVencimento.getMonth() == nextMonth && desp.status == 0) {
        this.despesaMesProximo += desp.valor
      }

    });

    // this.a.ngOnInit()
    // this.b = this.a.getDespesas()
    // console.log("#################");
    // // console.log(this.b);
    // let now = new Date()
    // console.log(now);
    // console.log("NOW = "+now.getMonth());
    // // console.log(this.b[0].dataVencimento.getMonth());

    // despesas.forEach(element => {
    //    if(element.dataVencimento.getTime() >= now.getTime()){
    //      console.log("SIM",element.dataVencimento.getTime());
    //     }else{
    //       console.log(element.dataVencimento.getTime(), " >= ", now.getTime());

    //     }
    // });

    // console.log("#################");

  }
}
