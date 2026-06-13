// FAQ copy — verbatim from the prototype's faqData array. Final copy; do not edit.

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Is there an account or login?",
    a: "No. There’s no sign-up, no email, no password — nothing to create and nothing for us to lose. The app works the moment you open it.",
  },
  {
    q: "Where is my data stored?",
    a: "On your phone, plus a backup in your own private cloud — your Apple or Google account — that we can’t read. We have no server and no database. Your cycle data never reaches us.",
  },
  {
    q: "How much does it cost?",
    a: "$9.99, once. One payment and it’s yours, with no subscription, ever. You’re buying the calendar, not renting it.",
  },
  {
    q: "Can I get my data out, or delete it?",
    a: "Both, any time. Export your full history as a file to move devices, or as CSV for yourself. Erase everything in Settings and it clears your phone and your private backup — we couldn’t recover it if you asked, because we never had it.",
  },
  {
    q: "How do the predictions work?",
    a: "It never forgets a cycle you’ve logged — it just listens to recent ones more closely, so if your body changes the predictions follow, and one odd month can’t drag everything with it. You get a single most-likely day plus an honest window that tightens as it learns you.",
  },
  {
    q: "Is this a fertility or birth-control app?",
    a: "No, and we won’t pretend otherwise. Peridot predicts when your next period is likely to start and shows cycle phases as estimates. It isn’t a contraceptive or a conception tool, and it isn’t built for trying to conceive — that needs precision we don’t claim.",
  },
  {
    q: "What about notifications?",
    a: "Off until you turn them on. Only two exist, both predictive — “starting soon” and “starting today” — and each toggles on its own. No streaks, no “we miss you,” no marketing, ever.",
  },
  {
    q: "Why is there no free trial?",
    a: "Because there’s no subscription to trial into, and no ads to make a free tier pay for itself. You see your real calendar before you decide, and then you pay once.",
  },
];
