const proceedResponse = () => {
    switch (selectedIntent) {
      case "orderTracking":
        return "Your order have been delivered";
      case "shippingInformation":
        return "Your order have been shipped. it will be delivered in 3 days";
      case "cancelOrder":
        return "Your order have been canceleed successfully";
      case "feedbackSubmission":
        return "Your feedback have submitted successfully";
      default:
        return "I can't able to process your response.";
    }
  };

  const queriesAnswered = () => {
    setTimeout(() => {
      setMessages((messages) => [
        { author: "bot", text: "Say hi to restart your chat" },
        {
          author: "bot",
          text: "Thank you for using our bot",
        },
        {
          author: "bot",
          text: "Feel free to ping me if you have any other queries",
        },
        { author: "bot", text: "I hope your query have been resolved" },
        ...messages,
      ]);
      setTimeout(() => setActive(false), 5000);
    }, 2000);
  };