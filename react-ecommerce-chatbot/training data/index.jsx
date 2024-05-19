export const model = {
    intents: {
      hello: ["hello", "hi", "hey"],
      bye: ["goodbye", "bye", "see you", "good bye", "ok", "thanks", "thank you"],
      productInquiry: ["latest products", "new arrivals", "newest arrivals"],
      orderTracking: [
        "placed order",
        "order status",
        "check order",
        "order track",
        "order tracking",
        "track",
      ],
      shippingInformation: [
        "delivery date",
        "order arrive",
        "delivery time",
        "order arrival",
      ],
      returnPolicy: ["return policy", "return item", "return items"],
      promotions: [
        "discounts available",
        "current promotions",
        "any discounts",
        "discount",
        "offers",
      ],
      paymentMethods: [
        "payment method",
        "payment option",
        "accept payment",
        "pay order",
        "payment type"
      ],
      orderModification: ["modify order", "change address"],
      accountManagement: [
        "update account",
        "change account details",
        "update address",
        "update email",
      ],
      addressChange: [
        "change delivery address",
        "update shipping address",
        "change shipping address",
      ],
      cancelOrder: ["cancel order", "cancel"],
      deliveryTime: [
        "delivery time",
        "order delivery",
        "expect order",
      ],
      contactInformation: [
        "contact customer support",
        "customer service contact",
        "customer support",
        "contact us",
        "contact support",
      ],
      feedbackSubmission: ["feedback", "provide feedback", "submit feedback"],
    },
    responses: {
      hello: [
        { answer: "Hello! How can I assist you today?" },
        { answer: "Hey there! How can I help you?" },
        { answer: "Hi! What can I do for you?" },
      ],
      bye: [
        { answer: "Goodbye! Have a great day!" },
        { answer: "See you later!" },
        { answer: "Take care! Bye for now." },
      ],
      productInquiry: [
        { answer: "Sure! Here are our latest products:" },
        { answer: "Certainly! Check out our new arrivals:" },
      ],
      orderTracking: [
        {
          answer:
            "Of course! Please provide me with your order number, and I'll check the status for you.",
        },
        {
          answer:
            "Sure thing! Please provide me with your order number, I'll find out the status of your order.",
        },
      ],
      shippingInformation: [
        {
          answer:
            "To provide accurate delivery information, could you please provide your order number or tracking ID?",
        },
        {
          answer:
            "I can help you with that. Could you give me your order number or tracking ID?",
        },
      ],
      returnPolicy: [
        {
          answer:
            "Our return policy allows you to return items within 30 days of purchase for a full refund.",
        },
        {
          answer:
            "You can return items within 30 days for a full refund. No questions asked.",
        },
      ],
      promotions: [
        {
          answer:
            "Yes, we currently have promotions running. Would you like to know more?",
        },
        {
          answer:
            "We've got some great promotions happening right now. Want to find out more?",
        },
      ],
      paymentMethods: [
        {
          answer:
            "We accept various payment methods including credit/debit cards, PayPal, and bank transfer.",
        },
        {
          answer:
            "You can pay with credit/debit cards, PayPal, or bank transfer.",
        },
      ],
      orderModification: [
        {
          answer:
            "You can modify your order within 24 hours of placing it. Please contact us for assistance.",
        },
        {
          answer:
            "Orders can be modified within 24 hours. Feel free to reach out to us if you need to make changes.",
        },
      ],
      accountManagement: [
        {
          answer:
            "You can update your account information in the 'Account Settings' section.",
        },
        { answer: "Account details can be updated under 'Account Settings'." },
      ],
      addressChange: [
        {
          answer:
            "Sorry! We cant able to change the delivery address once order placed. Sorry for the inconvinience!",
        },
      ],
      cancelOrder: [
        {
          answer:
            "Sure, I can help with that. Please provide your order number for cancellation.",
        },
        { answer: "I'll cancel your order for you. What's the order number?" },
      ],
      deliveryTime: [
        {
          answer:
            "Delivery usually takes 3-5 business days, depending on your location.",
        },
        { answer: "Your order should arrive within 3-5 business days." },
      ],
      contactInformation: [
        {
          answer:
            "You can contact our customer support team at support@example.com or call us at 1-800-123-4567.",
        },
        {
          answer:
            "Need assistance? Contact us at support@example.com or call 1-800-123-4567.",
        },
      ],
      feedbackSubmission: [
        {
          answer:
            "We appreciate your feedback! Please enter your ratings range from 5 t0 1, 5 - Excellent, 1 - Bad",
        },
      ],
    },
  };
  
  export const inputIntents = [
    "orderTracking",
    "shippingInformation",
    "cancelOrder",
    "feedbackSubmission",
  ];
  