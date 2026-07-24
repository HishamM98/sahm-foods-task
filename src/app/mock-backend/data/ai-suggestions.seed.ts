import { AiSuggestionDto } from '../../core/models/api.types';

/** Static suggestion templates keyed by order id (fallback generated if missing). */
export const AI_SUGGESTIONS_SEED: Record<string, AiSuggestionDto[]> = {
  '2841': [
    {
      id: 'ai-2841-1',
      type: 'upsell',
      severity: 'info',
      title: 'Upsell dessert',
      message: 'Customer ordered 4 items — suggest a shared dessert for +EGP 45.',
    },
    {
      id: 'ai-2841-2',
      type: 'delivery-risk',
      severity: 'warning',
      title: 'Delivery ETA risk',
      message: 'Peak traffic near branch. Confirm rider assignment within 3 minutes.',
    },
  ],
  '2838': [
    {
      id: 'ai-2838-1',
      type: 'kitchen-overload',
      severity: 'critical',
      title: 'Kitchen overload',
      message: '12-item ticket is delayed. Split grill vs oven stations or reassign.',
    },
    {
      id: 'ai-2838-2',
      type: 'allergy',
      severity: 'warning',
      title: 'Allergy note missing',
      message: 'Online channel often omits allergen notes — confirm before plating.',
    },
  ],
  '2840': [
    {
      id: 'ai-2840-1',
      type: 'missing-info',
      severity: 'info',
      title: 'Ready to call',
      message: 'Order is ready. Call customer ticket and keep warm for max 4 minutes.',
    },
  ],
};

export const AI_STREAM_CHUNKS = [
  'Analyzing ticket composition…',
  ' Checking kitchen capacity…',
  ' Evaluating upsell affinity…',
  ' Drafting recommendations…',
];
