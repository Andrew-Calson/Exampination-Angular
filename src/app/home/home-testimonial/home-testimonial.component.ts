import { Component, OnInit } from '@angular/core';
import { testimonial } from './testimonial';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.css']
})
export class HomeTestimonialComponent implements OnInit {
  testimonials:testimonial[];
  constructor() { }

  ngOnInit() {
    this.testimonials=this.getTestimonials();
  }

  getTestimonials():testimonial[]{
    let mockTestimonials=[
      {
        title:"Made me happier",
        description:"Neque volutpat ac tincidunt vitae semper quis lectus. Eget gravida cum sociis natoquepenatibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:"../../../assets/avatars/female-1.png",
        name:"Jane Doe",
        jobDescription:"Chess Master"
      },
      {
        title:"Made me happier",
        description:"Neque volutpat ac tincidunt vitae semper quis lectus. Eget gravida cum sociis natoquepenatibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:"../../../assets/avatars/female-1.png",
        name:"Jane Doe",
        jobDescription:"Chess Master"
      }
    ];
    return mockTestimonials;
  }
}
