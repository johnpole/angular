import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

//   // @Output() calculate = new EventEmitter<InvestmentInput>();
// calculate = output<InvestmentInput>();
  eneterdIntialInvestment =signal('0');
  enteredAnnualInvestment =signal('0');
  enteredExpectedReturn =signal('5');
  enteredDuration =signal('10');

  constructor(private investmentService : InvestmentService){

  }

  onSubmit(){
    console.log("Submitted");
    console.log(this.eneterdIntialInvestment());
    console.log(this.enteredAnnualInvestment())
    console.log(this.enteredExpectedReturn())
    console.log(this.enteredDuration())

    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.eneterdIntialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn:+this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()

    });

    this.eneterdIntialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedReturn.set('5')
    this.enteredDuration.set('10')

  }

}
