import {
  trigger,
  style,
  animate,
  transition,
  state,
} from '@angular/animations';

export let fade = trigger('fade', [
  transition('void => *', [style({ opacity: 0 }), animate(2000)]),
  transition('* => void', [animate(2000, style({ opacity: 0 }))]),
]);

export let tranX = trigger('tranX', [
  transition('void => *', [
    style({ transform: 'translateX(20px)' }),
    animate(2000),
  ]),
  transition('* => void', [
    animate(2000, style({ transform: 'translateX(20px)' })),
  ]),
]);

export let thumbnailAnimation = trigger('thumbnailAnimation', [
  transition('* <=> void', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('900ms', style({ transform: 'translateX(0)', opacity: 1 })),
  ]),
]);
