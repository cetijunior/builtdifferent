import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy — Built Different",
  description:
    "How Built Different collects, uses, and protects personal data for event tickets and email updates.",
};

export default function PrivacyPage() {
  const { legal, event } = siteConfig;

  return (
    <LegalShell
      title="Privacy Policy"
      description={`How we handle personal data when you buy tickets, join the movement list, or use this website for ${event.name}.`}
    >
      <p>
        This policy applies to{" "}
        <strong>{legal.brand}</strong> operated by{" "}
        <strong>{legal.entity}</strong> (“we”, “us”). Contact:{" "}
        <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>.
      </p>

      <h2>1. What we collect</h2>
      <ul>
        <li>
          <strong>Identity & contact</strong> — name, email address, and any
          optional details you submit (for example, what you are building).
        </li>
        <li>
          <strong>Purchase data</strong> — ticket tier, order identifiers, and
          payment status. Card details are processed by{" "}
          {legal.paymentProcessor}; we do not store full card numbers on our
          servers.
        </li>
        <li>
          <strong>Technical data</strong> — IP address, device/browser type,
          approximate location, and pages viewed (if analytics or security tools
          are enabled).
        </li>
        <li>
          <strong>Communications</strong> — messages you send via email,
          Instagram DM, WhatsApp, or other channels we publish.
        </li>
      </ul>

      <h2>2. Why we use your data</h2>
      <ul>
        <li>
          <strong>Contract</strong> — to process ticket orders, deliver event
          access, send transactional emails (confirmations, schedule updates,
          venue instructions), and handle refunds where applicable.
        </li>
        <li>
          <strong>Consent</strong> — to send marketing and movement updates when
          you join our email list or otherwise opt in. You can withdraw consent
          anytime.
        </li>
        <li>
          <strong>Legitimate interests</strong> — to secure the site, prevent
          fraud, improve the event experience, and respond to support requests.
        </li>
        <li>
          <strong>Legal obligations</strong> — tax, accounting, and consumer
          protection requirements related to paid events.
        </li>
      </ul>

      <h2>3. Email & marketing</h2>
      <p>
        If you join the movement / waitlist form, we use your email to send
        updates about {legal.brand}, seat windows, speakers, and related offers.
        Marketing emails include an unsubscribe link. Transactional messages
        about a purchase you made are not marketing and may still be sent as
        needed to fulfill your ticket.
      </p>

      <h2>4. Payments</h2>
      <p>
        Online payments are processed by <strong>{legal.paymentProcessor}</strong>
        . Stripe receives the payment information required to complete checkout
        under its own privacy policy. We receive confirmation of payment, limited
        customer details needed for fulfillment, and records required for
        accounting support.
      </p>

      <h2>5. Sharing</h2>
      <p>We may share data with:</p>
      <ul>
        <li>Payment processors (Stripe) and fraud-prevention tools</li>
        <li>Email / CRM providers used to send confirmations and updates</li>
        <li>
          Venue and event operations partners, only as needed for access control
          and on-site delivery
        </li>
        <li>Professional advisors (legal, accounting) under confidentiality</li>
        <li>Authorities when required by law</li>
      </ul>
      <p>We do not sell your personal data.</p>

      <h2>6. International transfers</h2>
      <p>
        {event.name} takes place in {event.city}, {event.country}. Providers such
        as Stripe or email tools may process data in the EU, UK, US, or other
        regions. Where required, we rely on appropriate safeguards offered by
        those providers (for example, standard contractual clauses).
      </p>

      <h2>7. Retention</h2>
      <ul>
        <li>
          Marketing list data — until you unsubscribe or ask us to delete it,
          unless we must keep a suppression record.
        </li>
        <li>
          Purchase and accounting records — typically for the period required by
          applicable tax and commercial law (often several years).
        </li>
        <li>
          Support correspondence — as long as needed to resolve your request and
          for related legal claims windows.
        </li>
      </ul>

      <h2>8. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, restrict, or port your data, and to object to certain processing
        or withdraw consent. To exercise these rights, email{" "}
        <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>. You
        may also complain to a supervisory authority in your country.
      </p>

      <h2>9. Children</h2>
      <p>
        This event and website are intended for adults. We do not knowingly
        collect personal data from children under 16.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this policy as the product, payments, or legal requirements
        change. The “Updated” date above reflects the latest revision. Material
        changes affecting ticket holders may also be communicated by email when
        appropriate.
      </p>

      <h2>11. Contact</h2>
      <p>
        Privacy questions:{" "}
        <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>
        <br />
        Organizer: {legal.organizer} · {legal.address}
      </p>
    </LegalShell>
  );
}
