import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  images: string[] = [
    'https://agimpexfoods.com/wp-content/uploads/2023/11/banner2.jpg',
    'https://www.scanhero.com/upimg/2022032317103624.jpg',
    'https://agimpexfoods.com/wp-content/uploads/2023/11/Rice-mill-home-banner.jpg',
    
  ];
  currentIndex: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      const transformValue = `translateX(-${this.currentIndex * 100}%)`;
      this.renderer.setStyle(this.el.nativeElement.querySelector('.slides'), 'transform', transformValue);
    }, 3000); 
  }

}
