import { AiSuggestionDto } from '../../core/models/api.types';

/** Static suggestion templates keyed by order id (fallback generated if missing). */
export const AI_SUGGESTIONS_SEED: Record<string, AiSuggestionDto[]> = {
  '2841': [
    {
      id: 'ai-2841-1',
      type: 'upsell',
      severity: 'info',
      title: 'Recommend Soda Pairing',
      message:
        'Customer ordered salty items. Suggested: 2x Cold Coca Cola.',
      tag: 'UPSELL SUGGESTION',
      actionLabel: 'Add to Order (+$6.00)',
      actionAmount: 6,
    },
    {
      id: 'ai-2841-2',
      type: 'allergy',
      severity: 'critical',
      title: 'Peanut Allergy Detected',
      message:
        "Cross-contamination risk in 'Truffle Fries' kitchen station. Immediate notification required.",
      actionLabel: 'Alert Kitchen',
      showSecondaryAction: true,
    },
    {
      id: 'ai-2841-3',
      type: 'missing-info',
      severity: 'warning',
      title: 'Missing Unit Number',
      message:
        "Address '452 Tech Parkway' is a multi-unit building. Delivery driver will be blocked.",
      actionLabel: 'Retry Lookup',
    },
    {
      id: 'ai-2841-4',
      type: 'delivery-risk',
      severity: 'warning',
      title: 'Traffic Analysis',
      message: 'Predicting +10m delay due to accident on I-80...',
      tag: 'Connected',
    },
    {
      id: 'ai-2841-5',
      type: 'kitchen-overload',
      severity: 'info',
      title: 'Kitchen Overload',
      message:
        'Station 02 (Grill) is currently processing 12 orders. Prep time may exceed average by 5 minutes.',
    },
  ],
  '2838': [
    {
      id: 'ai-2838-1',
      type: 'kitchen-overload',
      severity: 'critical',
      title: 'Kitchen Overload',
      message:
        '12-item ticket is delayed. Split grill vs oven stations or reassign.',
    },
    {
      id: 'ai-2838-2',
      type: 'allergy',
      severity: 'warning',
      title: 'Allergy note missing',
      message:
        'Online channel often omits allergen notes — confirm before plating.',
      actionLabel: 'Alert Kitchen',
      showSecondaryAction: true,
    },
    {
      id: 'ai-2838-3',
      type: 'delivery-risk',
      severity: 'warning',
      title: 'Traffic Analysis',
      message: 'Predicting +8m delay on Nile Corniche corridor...',
      tag: 'Connected',
    },
  ],
  '2840': [
    {
      id: 'ai-2840-1',
      type: 'missing-info',
      severity: 'info',
      title: 'Ready to call',
      message:
        'Order is ready. Call customer ticket and keep warm for max 4 minutes.',
      actionLabel: 'Retry Lookup',
    },
  ],
  '2835': [
    {
      id: 'ai-2835-1',
      type: 'delivery-risk',
      severity: 'info',
      title: 'Traffic Analysis',
      message: 'Rider en route. ETA within target window.',
      tag: 'Connected',
    },
  ],
};

export const AI_STREAM_CHUNKS = [
  'Analyzing ticket composition…',
  ' Checking kitchen capacity…',
  ' Evaluating upsell affinity…',
  ' Drafting recommendations…',
];
