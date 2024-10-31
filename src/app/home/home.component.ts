import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HerosectionComponent } from '../herosection/herosection.component';
import { FeaturesSectionComponent } from '../features-section/features-section.component';
import { SubscriptionSectionComponent } from '../subscription-section/subscription-section.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HerosectionComponent, FeaturesSectionComponent, SubscriptionSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
