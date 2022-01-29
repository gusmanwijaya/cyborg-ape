const faq = [
  {
    id: 1,
    question: "When are drops?",
    answer:
      "All our drops are Friday for our genesis apes. Please join our discord server to keep updated about every time we have a drop https://discord.gg/YK3BjTmAFB",
  },
  {
    id: 2,
    question: "How much does it cost for an Ape?",
    answer: "0.2 ETH + gas",
  },
  {
    id: 3,
    question: "Where can I get an Ape?",
    answer: "https://opensea.io/collection/cyborgape",
  },
  {
    id: 4,
    question: "Is there a whitelist?",
    answer:
      "No! We do not have a whitelist for our genesis project however for the future, we may have a whitelist for our generation projects.",
  },
  {
    id: 5,
    question: "What does the Mutant Ape mean in our Roadmap?",
    answer:
      "We will be making mutant cyborg apes once we reach our sales Goal of Cyborg Apes. Cyborg Ape will be purchasing a Mutant Ape Yacht Club NFT in Order to continue with this idea once our roadmap goes is met. Every Mutant Ape Yacht Club holder is given commercial rights to their specific ape. You can sell its likeness or make derivatives of it. We will be using the features of our Mutant Ape We buy to create mutant variants of our Cyborg Apes.",
  },
  {
    id: 6,
    question: "What is a derivative Ape?",
    answer:
      "Every Ape Yacht Club holders are given commercial rights to their specific ape so you can sell its likeness or make derivatives of it in any shape or form.",
  },
  {
    id: 7,
    question: "How do I get involved in Cyborg Apes?",
    answer: "Just hop over to this link and join in on the conversation!",
  },
];

export default function Faq() {
  return (
    <>
      <div className="px-12 md:px-20" id="faq">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-[90rem] mx-auto">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
              Frequently Asked Question
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-500">
              Can`t find the answer you`re looking for? Reach out to our
              customer support team for assistance! They are always willing to
              help.
            </p>
          </div>
          <div className="w-full md:w-2/3 space-y-8">
            {faq.map((item) => (
              <div key={item.id}>
                <p className="font-semibold text-sm md:text-base text-gray-300">
                  {item.question}
                </p>
                <p className="mt-2 text-gray-500 text-sm md:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
