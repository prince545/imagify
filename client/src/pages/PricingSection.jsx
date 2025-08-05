export default function PricingSection() {
  const plans = [
    {
      title: "Basic",
      price: "$0",
      description: "Perfect for individuals just starting out",
      features: [
        "Access to top 50 questions",
        "Basic frequency data",
        "Solutions with explanations",
        "Focus on FAANG companies",
        "Email support",
      ],
      buttonText: "Get started",
      highlight: false,
    },
    {
      title: "Pro",
      price: "$10",
      description: "For serious interview preparation",
      features: [
        "All questions with frequency data",
        "Company-specific prep paths",
        "Advanced pattern recognition",
        "Detailed solutions with code",
        "Performance tracking",
        "Weekly mock interviews",
        "Priority email support",
      ],
      buttonText: "Get started",
      highlight: true,
      badge: "Most Popular",
    },
    {
      title: "Enterprise",
      price: "$49",
      description: "For teams and organizations",
      features: [
        "Everything in Pro plan",
        "Team management dashboard",
        "Custom company focus",
        "API access",
        "Advanced analytics",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      buttonText: "Contact sales",
      highlight: false,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Choose your plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 flex flex-col ${
                plan.highlight
                  ? "bg-blue-600 text-white border-4 border-blue-300 relative"
                  : "bg-gray-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
              <p className="text-sm mb-4">{plan.description}</p>
              <div className="text-3xl font-bold mb-4">{plan.price}
                <span className="text-sm font-medium">/month</span>
              </div>
              <ul className="text-sm text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto py-2 px-4 rounded font-semibold ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-200"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
