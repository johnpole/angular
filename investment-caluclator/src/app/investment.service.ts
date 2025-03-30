import { Injectable, signal } from '@angular/core';
import { InvestmentInput } from './investment-input.model';
import { ResultsData } from './results-data.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor() { }
  resultsData = signal< ResultsData[] | undefined>(undefined);

  onCalculateInvestmentResults(data : InvestmentInput) {
    const{ initialInvestment,annualInvestment,expectedReturn,duration}= data;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  console.log(annualData);
  // this.resultsData=annualData;
  this.resultsData.set(annualData);
  }
}
