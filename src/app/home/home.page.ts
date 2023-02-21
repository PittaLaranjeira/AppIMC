import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  tximc;
  situacao;

  calcimc(formu) {
    const imcpeso = formu.value.imcpeso;
    const imcaltura = formu.value.imcaltura;

    this.tximc = (parseFloat(imcpeso) / (parseFloat(imcaltura) * parseFloat(imcaltura)));

    if (this.tximc < 18.5) {
      this.situacao = "Abaixo do Peso";
    } else if (18.5 <= this.tximc && this.tximc <= 24.9) {
      this.situacao = "Peso Ideal";
    } else if (25 <= this.tximc && this.tximc <= 29.9) {
      this.situacao = "Excesso de peso";
    } else if (30 <= this.tximc && this.tximc <= 34.9) {
      this.situacao = "Obesidade I";
    } else if (35 <= this.tximc && this.tximc <= 39.9){
      this.situacao = "Obesidade II";
    } else if (this.tximc >= 40) {
      this.situacao = "Obesidade III";
    }
  }
}