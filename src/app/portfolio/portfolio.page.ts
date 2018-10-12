import { Component, OnInit } from '@angular/core';

import PorfolioData from '../data/portfolio'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  public portfolioData = PorfolioData

  constructor() { }

  ngOnInit() {
  }

}
