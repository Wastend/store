import { Component, Input } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterLink } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() categories: string[] = []

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      $(() => {
        const elementComponent = $('.header-nav-list li:has(.header-subnav-list)')
        const listComponent = elementComponent.children('.header-subnav-list')
        let timeout: any
        let isHover: boolean = false
        let hoverComponent: any = undefined


        elementComponent.on('mouseover', hoverHandle)
        listComponent.on('mouseover', hoverHandle)

        function hoverHandle(this: any) {
          const unhoverElement = $(this).hasClass('header-subnav-list') ? $(this) : $(this).children('.header-subnav-list')
          if(hoverComponent !== undefined && !hoverComponent.is(unhoverElement))
          
          if (isHover)
            hoverComponent.slideUp(300)
          isHover = true

          hoverComponent = unhoverElement

          hoverComponent.slideDown(300);
        }

        elementComponent.on('mouseleave', unhoverHandle)
        listComponent.on('mouseleave', unhoverHandle)

        function unhoverHandle(this: any) {
          if (isHover) {
            const unhoverElement = $(this).hasClass('header-subnav-list') ? $(this) : $(this).children('.header-subnav-list')
            clearTimeout(timeout)
            isHover = false

            setTimeout(() => {
              if (hoverComponent !== undefined && hoverComponent.is(unhoverElement) && !isHover) {
                hoverComponent.slideUp(300)
                hoverComponent = undefined
              }
            }, 300)
          }

        }

      });
    }
  }
}
