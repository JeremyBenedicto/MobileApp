import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.page.html',
  styleUrls: ['./social-media.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SocialMediaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
