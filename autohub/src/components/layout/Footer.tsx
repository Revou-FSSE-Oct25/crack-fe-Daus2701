export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white mt-20">

      <div className="grid md:grid-cols-4 gap-8 px-10 py-12">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">
            AutoHub
          </h2>
          <p className="text-sm text-gray-300">
            Professional car service and maintenance platform.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Oil Change</li>
            <li>Tyre Change</li>
            <li>Car Wash</li>
            <li>Battery Replacement</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📞 +60 123-456 789</li>
            <li>📧 info@autohub.com</li>
            <li>📍 Kuala Lumpur, Malaysia</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-gray-700 text-sm text-gray-400">
        © 2026 AutoHub. All rights reserved.
      </div>

    </footer>
  );
}