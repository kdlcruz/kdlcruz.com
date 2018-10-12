import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() name: string;
  @Input() score: string;

  constructor(
  ) {
  }

  ngOnInit() {
    
  }

}
