import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-side',
  templateUrl: './portfolio-side.component.html',
  styleUrls: ['./portfolio-side.component.scss']
})
export class PortfolioSideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  soAction() {
    const win = (window as any).open('https://stackoverflow.com/users/2148468/kdlcruz', '_blank');
    win.focus();
  }

  githubAction() {
    const win = (window as any).open('https://github.com/kdlcruz', '_blank');
    win.focus();
  }
}
