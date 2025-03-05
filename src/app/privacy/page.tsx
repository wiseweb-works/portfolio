import Link from 'next/link';

const lastUpdated = 'Feb 2025';

export default function page() {
  return (
    <article className="prose mt-8 pb-16 dark:prose-invert">
      <div className="space-y-4">
        <h1 className="title text-5xl">privacy policy</h1>
        <p className="text-justify">Last Updated: {lastUpdated}</p>
      </div>
      <div className="space-y-4">
        <h2 className="title text-3xl">Welcome to Privacy Policy</h2>
        <p className="text-justify">
          This <b>Privacy Policy</b> is here to let you know how things work
          around here. I respect your privacy and don&apos;t collect or store
          any personal information without your consent.
        </p>
        <h2 className="title">Data Collection and Use</h2>
        <p className="text-justify">
          I do not collect personal information without your explicit consent.
          The only automatically collected data is your IP address, which I use
          to improve the functionality and security of my website. Your IP
          address is temporarily stored for a maximum of 14 days and then
          automatically deleted. I do not collect any other personal information
          (such as names, email addresses, or other details) unless you
          voluntarily provide this information (e.g., via contact forms,
          registrations, or others).
        </p>
        <h3>Cookies and LocalStorage</h3>
        <p className="text-justify">
          My site may use local storage to improve your experience (especially
          Theme). This data is temporarily stored on your device and can be
          disabled through your browser settings. However, disabling this may
          affect the functionality of certain features on my site.
        </p>
        <h3>Data Retention</h3>
        <p className="text-justify">
          I do not store any personal data unless it is necessary to fulfill a
          specific function. The only exception is IP addresses, which are
          temporarily stored for up to 14 days for security and operational
          purposes. After 14 days, your IP address is automatically deleted.
        </p>
        <h2 className="title">Data Sharing</h2>
        <p className="text-justify">
          I do not share your personal data with third parties, and I do not
          sell your data to any third parties. I only use trusted third-party
          services for purposes like website performance and security, which are
          subject to strict data protection agreements.
        </p>
        <h2 className="title">Your Rights</h2>
        <p className="text-justify">As a user, you have the right to:</p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request the deletion or correction of any data I hold.</li>
          <li>Object to the processing of your personal data.</li>
          <li>Request the portability of your personal data.</li>
        </ul>
        <h2 className="title">Data Security</h2>
        <p className="text-justify">
          I implement appropriate security measures to protect the personal data
          I hold, including encryption and secure storage. However, please note
          that no method of data transmission over the internet is completely
          secure, and I cannot guarantee absolute security.
        </p>
        <h2 className="title">Contact Me</h2>
        <p className="text-justify">
          If you have any questions or concerns about my Privacy Policy or data
          processing practices, please contact me at{' '}
          <Link href="mailto:abdullahkoyuncu@web.de">
            abdullahkoyuncu@web.de
          </Link>
        </p>
        <h2 className="title">Changes to This Privacy Policy</h2>
        <p className="text-justify">
          I may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and I encourage you to review the policy
          periodically.
        </p>
      </div>
    </article>
  );
}
