import { Component, Output, EventEmitter } from '@angular/core';

import { AnimatesDirective } from 'css-animator';
import { MaterializeDirective } from 'angular2-materialize';

import { QuizService } from 'app/services/quiz.service';

import navTemplate from './quiz-nav.html';
import navStyle from './quiz-nav.css';

@Component({
  selector: 'quiz-nav',
  template: navTemplate,
  styles: [navStyle],
  directives: [
    AnimatesDirective,
    MaterializeDirective
  ]
})
export class QuizNavComponent {
  @Output() public onGoHome = new EventEmitter<any>();
  @Output() public onRefresh = new EventEmitter<any>();
  @Output() public onClose = new EventEmitter<any>();

  constructor(private _quizService: QuizService) {

  }

  public get progress() {
    return this._quizService.progress();
  }

  public goHome() {
    this.onGoHome.next();
  }

  public refresh() {
    this.onRefresh.next();
  }

  public close() {
    this.onClose.next();
  }

}
