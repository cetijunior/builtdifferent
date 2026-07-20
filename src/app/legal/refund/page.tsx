import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Refund Policy — Built Different",
  description:
    "Refund and transfer rules for Built Different event tickets.",
};

export default function RefundPage() {
  const { legal, event } = siteConfig;

  return (
    <LegalShell
      title="Refund Policy"
      description={`How refunds, transfers, and cancellations work for ${event.name} tickets.`}
    >
      <p>
        This policy applies to ticket purchases for {event.name} sold by{" "}
        <strong>{legal.entity}</strong>. Questions:{" "}
        <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>.
      </p>

      <h2>1. All ticket sales</h2>
      <ul>
        <li>
          Tickets are for a dated live event. Because capacity and planning are
          fixed, <strong>tickets are generally non-refundable</strong> once
          purchased, except where required by law or expressly stated below.
        </li>
        <li>
          Chargebacks filed without contacting us first may result in cancelled
          access and collection of unpaid amounts where applicable.
        </li>
      </ul>

      <h2>2. Change of mind</h2>
      <p>
        Change-of-mind refunds are not offered after purchase confirmation. Review
        tier inclusions, dates, and venue before checkout. If you are unsure,
        contact us before paying.
      </p>

      <h2>3. Transfers</h2>
      <p>
        You may request a name transfer to another attendee by emailing{" "}
        <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a> with
        the order email, ticket tier, and the new guest’s full name and email. We
        may approve transfers at our discretion up to <strong>14 days</strong>{" "}
        before the event start date, subject to operational limits. Elite /
        1:1 inclusions may be non-transferable.
      </p>

      <h2>4. If we change or cancel the event</h2>
      <ul>
        <li>
          <strong>Postponement</strong> — your ticket remains valid for the new
          dates. If you cannot attend the new dates, email us within the window
          we announce; we will offer a transfer to a future edition or a refund
          of the ticket price paid where feasible.
        </li>
        <li>
          <strong>Cancellation without replacement</strong> — we will refund the
          ticket price paid via the original payment method where possible.
        </li>
        <li>
          We are not responsible for travel, hotel, or other third-party costs
          unless required by mandatory law.
        </li>
      </ul>

      <h2>5. Denied entry / misconduct</h2>
      <p>
        No refund is due if entry is refused or access is revoked due to fraud,
        chargeback, abusive conduct, safety violations, or material breach of the{" "}
        <a href="/legal/terms">Terms of Sale</a> or venue rules.
      </p>

      <h2>6. How to request help</h2>
      <p>
        Email <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>{" "}
        from the address used at checkout. Include your full name, order
        reference (if any), and ticket tier. We aim to respond within a few
        business days.
      </p>

      <h2>7. Payment processor</h2>
      <p>
        Refunds approved by us are processed through{" "}
        <strong>{legal.paymentProcessor}</strong>. Timing depends on your bank or
        card issuer (often several business days after we initiate the refund).
      </p>

      <h2>8. Statutory rights</h2>
      <p>
        Nothing in this policy limits rights you may have under mandatory
        consumer protection laws in your place of residence.
      </p>
    </LegalShell>
  );
}
