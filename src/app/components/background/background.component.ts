import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
})
export class BackgroundComponent implements OnInit {
  textPrompt!: string;
  submittedText: string[] = [];

  constructor() {}

  ngOnInit() {}

  onSubmitPrompt() {
    this.submittedText.push(this.textPrompt);
    this.textPrompt = '';
  }
}
