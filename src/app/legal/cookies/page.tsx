import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Cookie Policy — Built Different",
  description:
    "How Built Different uses cookies and similar technologies on this website.",
};

export default function CookiesPage() {
  const { legal } = siteConfig;

  return (
    <LegalShell
      title="Cookie Policy"
      description="What cookies and similar technologies this site uses, and how you can control them."
    >
      <p>
        This policy explains how <strong>{legal.brand}</strong> (
        {legal.entity}) uses cookies and similar technologies. Related details
        are in our <a href="/legal/privacy">Privacy Policy</a>.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device. Similar technologies
        include local storage, pixels, and embedded session tokens used by video
        or payment providers.
      </p>

      <h2>2. How we use them</h2>
      <ul>
        <li>
          <strong>Essential</strong> — required for security, load balancing,
          remembering basic preferences, and completing checkout flows with our
          payment provider ({legal.paymentProcessor}).
        </li>
        <li>
          <strong>Functional / embedded media</strong> — third-party players
          (for example Vimeo or YouTube) and social embeds may set their own
          cookies when you play or load that content.
        </li>
        <li>
          <strong>Analytics</strong> — if we enable analytics tools, they help us
          understand traffic and improve the site. Non-essential analytics should
          only run with consent where required.
        </li>
      </ul>

      <h2>3. Third parties</h2>
      <p>
        Checkout may redirect to or embed <strong>Stripe</strong>, which sets
        cookies needed to process payment securely. Video and social platforms
        operate under their own policies when their content loads.
      </p>

      <h2>4. Your choices</h2>
      <ul>
        <li>
          Browser settings let you block or delete cookies. Blocking essential
          cookies may break ticket checkout or form features.
        </li>
        <li>
          For embedded players, use the platform’s own privacy controls or avoid
          playing the media.
        </li>
        <li>
          Where we show a consent banner for non-essential cookies, you can
          accept or refuse those categories.
        </li>
      </ul>

      <h2>5. Updates</h2>
      <p>
        We may update this policy when our tools or legal requirements change.
        The updated date appears in the legal sidebar.
      </p>

      <h2>6. Contact</h2>
      <p>
        <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>
      </p>
    </LegalShell>
  );
}
