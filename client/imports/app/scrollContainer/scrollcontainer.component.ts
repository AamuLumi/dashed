import {Component, OnInit, NgZone} from '@angular/core';

import template from "./scrollcontainer.component.html";
import style from "./scrollcontainer.component.scss";

@Component({
	selector: "scroll-container",
	template,
	styles: [style]
})
export class ScrollContainerComponent implements OnInit {
	views: Array<Object> = [{
		name: 'homepage'
	}, {
		name: 'dashboard'
	}];
	viewIndex: number = 0;

	constructor(
		private zone: NgZone
	) {
		document.onmousewheel = (e) => this.onScroll(e);
	}

	ngOnInit(): void {
		let doc = document.documentElement;
		let y = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

		this.viewIndex = y / this.getScrollSize();
	}

	getScrollSize(): number {
		let element = document.getElementById('scroll-container');
		let scrollSize = element.getBoundingClientRect().bottom -
			element.getBoundingClientRect().top;

		scrollSize = scrollSize / (element.children.length -1);

		return scrollSize;
	}

	scrollToElement(next: boolean) {
		if (next) {
			window.scrollBy(0, this.getScrollSize());
		} else {
			window.scrollBy(0, -this.getScrollSize());
		}
	}

	onScroll(event) {
		event.preventDefault();

		if (event.deltaY > 0 && this.viewIndex < this.views.length - 1) {
			this.scrollToElement(true);
			this.zone.run(() => this.viewIndex++);
		} else if (event.deltaY < 0 && this.viewIndex > 0) {
			this.scrollToElement(false);
			this.zone.run(() => this.viewIndex--);
		}

	}
}