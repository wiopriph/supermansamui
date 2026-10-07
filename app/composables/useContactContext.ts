type ContactContext = {
  /** Route path the context was set for; ignored on other pages */
  path: string;
  /** Subject of the enquiry for analytics and the default WhatsApp text */
  name?: string;
  /** Full pre-filled WhatsApp text; overrides the generic one */
  message?: string;
};

/**
 * Lets a page tell the floating contact bar what the visitor is looking at,
 * so the WhatsApp message opens with the right subject.
 */
export function useContactContext() {
  const route = useRoute();
  const state = useState<ContactContext | null>('contact-context', () => null);

  const set = (context: Omit<ContactContext, 'path'>) => {
    state.value = { path: route.path, ...context };
  };

  const current = computed(() => (state.value?.path === route.path ? state.value : null));

  return { set, current };
}
