import { Component } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.scss'
})
export class CreateQuizComponent {
  constructor(private quizService:QuizService){}

  question:string="Bugun dammi? Bugun dan-mi?"
  optionA:string="Bugun meni kunim"
  optionB:string="Bugun otdыx!"
  optionC:string="Men uchama-a-a-an"
  optionD:string="AAAAAAAAAAAAAAAAAAAA"
  correctOption:string="B"
  photo!:File

  catcher(photo:any){
      this.photo=photo.target.files[0]
      console.log(this.photo.name);
  }

  create(){
    console.log(this.question)
    console.log(this.optionA)
    let form=new FormData()
    form.append("question",this.question)
    form.append("optionsA",this.optionA)
    form.append("optionsB",this.optionB)
    form.append("optionsC",this.optionC)
    form.append("optionsD",this.optionD)
    form.append("correctAnswear",this.correctOption)
    form.append("descriptionPhoto",this.photo)

    

    this.quizService.create(form).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
