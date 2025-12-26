// @/hooks/useGreeting.js
import { useState } from "react";

const greetings = [
  "Let's tackle your tasks today!",
  "Ready to get things done?",
  "Your tasks await!",
  "Time to make progress!",
  "Let's make today productive!"
];

const greeting = greetings[Math.floor(Math.random() * greetings.length)];

export function useGreeting() {
  return { message: greeting };
}