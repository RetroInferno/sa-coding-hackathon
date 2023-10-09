import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {

  icons = [
    ['../../../assets/Web_App_Icons/icons8-quiz-50-light.png', 'Quizzes', 'quizzes'],
    ['../../../assets/Web_App_Icons/icons8-assignment-50-light.png', 'Assignments','assignments'],
    ['../../../assets/Web_App_Icons/icons8-teacher-50-light.png', 'SC Chat', 'wip'],
    ['../../../assets/Web_App_Icons/icons8-calendar-50-light.png', 'Calendar','calendar'],
    ['../../../assets/Web_App_Icons/icons8-assignment-50-light.png', 'Register', 'wip']
  ]


}
