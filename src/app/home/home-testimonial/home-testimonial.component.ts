import { Component, OnInit } from '@angular/core';
import { testimonial } from './testimonial';
import { testimonials } from './testimonial-data';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.css']
})
export class HomeTestimonialComponent implements OnInit {
  testimonials = testimonials;
  constructor() { }

  ngOnInit() {
  }
}
