import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Terms of Sale — Built Different",
  description:
    "Ticket purchase terms for Built Different live events, including payments, access, and liability.",
};

export default function TermsPage() {
  const { legal, event } = siteConfig;

  return (
    <LegalShell
      title="Terms of Sale"
      description={`These terms govern ticket purchases and use of this website for ${event.name}. By buying a ticket or using the site, you agree to them.`}
    >
      <p>
        Seller / organizer: <strong>{legal.entity}</strong> (“we”, “us”), trading
        as <strong>{legal.tradingAs}</strong>. Support:{" "}
        <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>.
      </p>

      <h2>1. The event</h2>
      <p>
        {event.name} is scheduled for <strong>{event.dates}</strong> at{" "}
        <strong>
          {event.venue}, {event.city}, {event.country}
        </strong>
        . Agenda, speakers, and session details may be refined before the event.
        We will communicate material changes to ticket holders where reasonably
        possible.
      </p>

      <h2>2. Tickets & tiers</h2>
      <ul>
        <li>
          Ticket prices and inclusions are shown on the pricing page at the time
          of purchase (Standard, VIP, Elite, or other tiers offered).
        </li>
        <li>
          Early-bird or promotional pricing may end without prior individual
          notice when capacity or deadlines are reached.
        </li>
        <li>
          Tickets are personal unless we explicitly allow transfer. Resale above
          face value or commercial redistribution is not permitted without our
          written consent.
        </li>
        <li>
          You are responsible for providing accurate purchaser details so we can
          deliver confirmations and access instructions.
        </li>
      </ul>

      <h2>3. Payments</h2>
      <ul>
        <li>
          Payments are processed securely by <strong>{legal.paymentProcessor}</strong>
          . Completing checkout constitutes an offer to purchase; acceptance
          occurs when payment is confirmed and we issue an order confirmation.
        </li>
        <li>
          Prices are typically displayed in EUR unless stated otherwise. Taxes
          or fees may apply as shown at checkout.
        </li>
        <li>
          If a payment is reversed, charged back, or fails after confirmation, we
          may cancel the ticket and deny entry until resolved.
        </li>
      </ul>

      <h2>4. Cooling-off / consumer rights</h2>
      <p>
        Live event tickets for a specific date may be exempt from certain
        distance-selling cooling-off rights once the service is tied to a fixed
        schedule. Your statutory rights (if any) under applicable consumer law
        still apply. See also our{" "}
        <a href="/legal/refund">Refund Policy</a>.
      </p>

      <h2>5. Refunds, postponement & cancellation</h2>
      <p>
        Refund eligibility is governed by the{" "}
        <a href="/legal/refund">Refund Policy</a>. If we postpone the event, your
        ticket generally remains valid for the new dates unless we offer an
        alternative. If we cancel permanently without a replacement date, we will
        provide a refund of the ticket price paid (excluding non-recoverable
        third-party fees where permitted by law).
      </p>

      <h2>6. Entry & conduct</h2>
      <ul>
        <li>
          Entry requires a valid ticket and any ID or check-in process we
          communicate.
        </li>
        <li>
          We may refuse entry or remove attendees who are abusive, unsafe,
          disruptive, or in breach of venue rules — without refund in serious
          cases.
        </li>
        <li>
          Photography and recording may occur for marketing of {legal.brand}. By
          attending, you consent to reasonable use of event imagery that may
          include you, unless you arrange otherwise with us on site in good
          faith.
        </li>
      </ul>

      <h2>7. Website & content</h2>
      <p>
        Site content is provided for information about the event and brand. It
        may change. You may not scrape, copy, or misuse the site for competing
        commercial purposes without permission.
      </p>

      <h2>8. Disclaimer</h2>
      <p>
        Built Different delivers training, frameworks, and operator experiences.
        Results vary. We do not guarantee income, business outcomes, or specific
        ROI. Testimonials and past results are illustrative, not promises.
      </p>

      <h2>9. Liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for indirect or
        consequential losses (including lost profits, travel, or hotel costs)
        arising from attendance, postponement, or website use. Nothing in these
        terms limits liability for death or personal injury caused by negligence,
        fraud, or any liability that cannot be excluded by law.
      </p>

      <h2>10. Privacy</h2>
      <p>
        Personal data is handled under our{" "}
        <a href="/legal/privacy">Privacy Policy</a>.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of <strong>{legal.governingLaw}</strong>
        , without prejudice to mandatory consumer protections in your country of
        residence. Courts of {legal.country} have non-exclusive jurisdiction,
        subject to those protections.
      </p>

      <h2>12. Contact</h2>
      <p>
        <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>
        <br />
        {legal.organizer} · {legal.address}
      </p>
    </LegalShell>
  );
}
