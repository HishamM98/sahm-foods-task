import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Order } from '../../models/order.model';
import { ElapsedTimePipe } from '../../../../shared/pipes/elapsed-time-pipe';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-order-card',
  imports: [TranslatePipe, ElapsedTimePipe, TooltipModule],
  templateUrl: './order-card.html',
  styleUrl: './order-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderCard {
  readonly order = input.required<Order>();
  readonly accent = input.required<string>();
  readonly plain = input(false);

  readonly openOrder = output<Order>();
  readonly serveOrder = output<Order>();

  onCardClick(): void {
    this.openOrder.emit(this.order());
  }

  onServeClick(event: Event): void {
    event.stopPropagation();
    this.serveOrder.emit(this.order());
  }

  channelKey(channel: Order['channel']): string {
    switch (channel) {
      case 'delivery':
        return 'LIVE_ORDERS.CHANNEL.DELIVERY';
      case 'walk-in':
        return 'LIVE_ORDERS.CHANNEL.WALK_IN';
      case 'online':
        return 'LIVE_ORDERS.CHANNEL.ONLINE';
    }
  }

  itemsKey(count: number): string {
    return count === 1 ? 'LIVE_ORDERS.ITEM_ONE' : 'LIVE_ORDERS.ITEMS';
  }
}
