import FAQ from "./FAQ";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export const FAQs = () => {
  return (
    <div className="py-[72px] bg-[linear-gradient(to_bottom,_#5D2CA8_0%,_#000000_100%)] text-white
    sm:py-24
    ">
      <div className="w-full h-max px-4 flex items-center text-center justify-center">
        <div className="flex flex-col sm:gap-12 sm:w-[672px] ">
          <h3 className="font-bold text-5xl/[48px] tracking-tighter">Frequently Asked Questions</h3>
          <div>
            {
              items.map(( item, index ) => (
                <FAQ question={ item.question } answer={ item.answer } key={ index }/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
