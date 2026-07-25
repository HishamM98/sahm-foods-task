import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { take } from 'rxjs';
import { OrderDetails } from './order-details';

@Component({
  standalone: true,
  template: '',
  providers: [DialogService],
})
export class OrderDetailRouteComponent implements OnInit, OnDestroy {
  private readonly dialogService = inject(DialogService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private ref: DynamicDialogRef<OrderDetails> | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ref = this.dialogService.open(OrderDetails, {
      showHeader: false,
      modal: true,
      dismissableMask: true,
      closable: false,
      styleClass: 'order-details-dialog',
      contentStyle: {
        padding: '0',
        overflow: 'hidden',
        background: 'transparent',
      },
      style: {
        width: 'auto',
        maxWidth: '96vw',
      },
      inputValues: { orderId: id },
    });

    this.ref?.onClose.pipe(take(1)).subscribe(() => {
      void this.router.navigate(['/', { outlets: { modal: null } }]);
    });
  }

  ngOnDestroy(): void {
    this.ref?.close();
  }
}
