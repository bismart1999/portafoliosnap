import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap/all';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Titulo='';
  @ViewChild('titulo',{static:true}) titulo:ElementRef;
  @ViewChild('img1',{static:true}) img1:ElementRef;
  @ViewChild('img2',{static:true}) img2:ElementRef;
  @ViewChild('img3',{static:true}) img3:ElementRef;
  @ViewChild('img4',{static:true}) img4:ElementRef;
  @ViewChild('container',{static:true}) container:ElementRef;
  @ViewChild('imagenes',{static:true}) imagenes:ElementRef;

  constructor(){

  }
  ngOnInit(){
    this.initialAnimation();
    this.scrollAnimation();
  }

  initialAnimation(){
    gsap.from(this.titulo.nativeElement,{
      duration: 2,
      opacity: 0,
      y:-50,
      stagger:0.7,
      delay:0.5
    });
  }


  scrollAnimation(){
    let tl=gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);
    tl.from(this.container.nativeElement,{
      scrollTrigger:{

        markers:true,
        trigger: this.img1.nativeElement,
        start:"bottom 66%",
        toggleActions:"restart none none none"
      },
      duration:0.5,
      backgroundColor: '#6600CC'
    }),
    tl.from(this.titulo.nativeElement,{
      duration: 1,
      y:-80,
      stagger:0.7,
      delay:0.5
    }),
    tl.from(this.container.nativeElement,{
      scrollTrigger:{
        onEnter:()=> {this.Titulo="Fate Stale";
        this.initialAnimation()},
        markers:true,
        trigger: this.img2.nativeElement,
        start:"top center",
        toggleActions:"restart none none none"
      },
      duration:0.5,
      backgroundColor: '#ff0866'
    }),
    gsap.to(this.container.nativeElement,{
      scrollTrigger:{
        onEnter:()=> this.Titulo="Attack of Titan",
        markers:true,
        trigger: this.img3.nativeElement,
        start:"top center",
        toggleActions:"restart none none none"
      },
      duration:0.5,
      backgroundColor: '#66CCCC'
    }),
    gsap.to(this.container.nativeElement,{
      scrollTrigger:{
        onEnter:()=> this.Titulo="Tokio Gull",
        markers:true,
        trigger: this.img4.nativeElement,
        start:"top center",
        toggleActions:"restart none none none"
      },
      duration:0.5,
      backgroundColor: '#222222'
    })

  }
}
