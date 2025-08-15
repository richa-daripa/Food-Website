export function isPwdValid(value) {
  const lowerCase = /[a-z]/.test(value);
  const upperCase = /[A-Z]/.test(value);
  const digit = /[0-9]/.test(value);
  const symbol = /[!@#$%^&*]/.test(value);
  const len = value.length >= 8;

  if (!len || !lowerCase || !upperCase || (!symbol && !digit)) {
    return "Password should be minimum of 8 characters and must contain atleast 1 uppercase, 1 lowercase and digit or symbol";
  }
  return true;
}

const credentials = {
  username: 'Richard',
  email: "richard@gmail.com",
  password: 'Ygy@657s'
}
export default credentials;

export const faq = [
  {
    eKey: "0",
    title: "What kind of food do you offer?",
    text: "We offer freshly prepared, homemade meals prepared by local home chefs. Each dish is made with love and quality ingredients—just like you'd get in a home kitchen. "
  },
    {
    eKey: "1",
    title: "How do I place an order?",
    text:"Browse the available dishes, select your favorites, and add them to your plate. Choose your delivery time, enter your details, and complete payment. Your meal will be prepared fresh and delivered to your doorstep."
  },
    {
    eKey: "2",
    title: "Can I customize my meal or request dietary preferences?",
    text:"Yes! Many of our chefs offer customization options like less spice, vegan, or gluten-free. Just mention your preferences while placing the order, and we’ll do our best to accommodate."
  },
  {
    eKey: "3",
    title: "Can I modify or cancel my order after placing it?",
    text:"Yes, but only within a short window after ordering. Please contact our support team immediately. Once our chefs starts preparing your food, changes may not be possible."
  },
  {
    eKey: "4",
    title: "How is the food delivered?",
    text:"We partner with trusted local delivery services to ensure your food arrives hot and fresh. You’ll receive live tracking updates once your order is on the way."
  },
  {
    eKey: "5",
    title: "What if my food arrives late or incorrect?",
    text:"We’re sorry if that happens! Please report the issue through the Help section in your account. Our team will investigate and offer a resolution—either a refund, replacement, or credit."
  },
  {
    eKey:"6",
    title:"Do you offer subscriptions or meal plans?",
    text:"Yes! You can subscribe to weekly or monthly homemade meal plans tailored to your taste and schedule. It’s perfect for busy professionals, students, or anyone craving consistent home-style food."
  }
]

