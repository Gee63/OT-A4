import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-culture-component',
  templateUrl: './culture-component.component.html',
  styleUrls: ['./culture-component.component.css']
})
export class CultureComponentComponent implements OnInit {

  /*object data*/
  blocks = [
    {
      "header": "Who we are",
      "text1": "We started rocking the digital space way back in 1999. We started small, with a team of nine brilliant and smart individuals, each of whom possessed an unyielding drive to take Osiris Trading to the forefront of all things digital. ",
      "text2": "With big dreams in hand and an appetite for success, this power team kept working hard, kept creating, and recruiting the best talent in the industry. Now we can proudly say that the humble team of nine has grown to a staggering 300+ team of really awesome humans, each with something unique to contribute.",
      "background": "#6cb4df",
      "corner" : "topLeft"
    },

    {
      "footer": "cooperation collaboration",
      "innerblocks": [
        {
          "backgroundImage": "../../assets/who-we-are-1.jpg",
          "width": "50%",
          "height": "50%"
        },
        {
          "backgroundImage": "../../assets/who-we-are-2.jpg",
          "width": "50%",
          "height": "50%"
        },
        {
          "backgroundImage": "../../assets/who-we-are-3.jpg",
          "width": "100%",
          "height": "50%"
        },
      ]
    },

    {
      "icon": "../../assets/icon1.png",
      "text1": "We’re definitely outta-the-box people, from all around the world, with a common passion for all things digital.",
      "text2": "At Osiris, we’re willing to go the extra mile, put in an extra hour and look for unconventional and creative working solutions, because we genuinely love what we do.",
      "background": "#a1d05d",
      "corner" : "bottomRight"
    },

    {
      "innerblocks": [
        {
          "backgroundImage": "../../assets/who-we-are-4.jpg",
          "width": "100%",
          "height": "100%"
        },
      ]
    },

    {
      "innerblocks": [
        {
          "backgroundImage": "../../assets/who-we-are-5.jpg",
          "width": "100%",
          "height": "50%"
        },
        {
          "backgroundImage": "../../assets/who-we-are-6.jpg",
          "width": "100%",
          "height": "50%"
        },
      ]
    },

    {
      "icon": "../../assets/icon2.png",
      "text1": "An Osiris day usually starts with freshly brewed coffee made by our in-house barista or a helping of fruit from the O’ Canteen.",
      "text2": "Cold chilly days are made better at Osiris with warm hot chocolate and ready-made popcorn. We also get rewarded with rejuvenating massages from our very own masseuse.",
      "background": "#d95555",
      "corner" : "bottomLeft"
    },

    {
      "footer": "cooperation collaboration",
      "innerblocks": [
        {
          "backgroundImage": "../../assets/who-we-are-7.jpg",
          "width": "100%",
          "height": "50%"
        },
        {
          "backgroundImage": "../../assets/who-we-are-8.jpg",
          "width": "100%",
          "height": "50%"
        },
      ]
    },

    {
      "innerblocks": [
        {
          "backgroundImage": "../../assets/who-we-are-9.jpg",
          "width": "50%",
          "height": "50%"
        },
        {
          "backgroundImage": "../../assets/who-we-are-10.jpg",
          "width": "50%",
          "height": "50%"
        },
        {
          "backgroundImage": "../../assets/who-we-are-11.jpg",
          "width": "50%",
          "height": "50%"
        },
        {
          "backgroundImage": "../../assets/who-we-are-12.jpg",
          "width": "50%",
          "height": "50%"
        },
      ]
    },
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
