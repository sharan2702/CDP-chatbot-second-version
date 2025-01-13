##CDP Support Chatbot

## Objective
This project is a **Support Agent Chatbot** designed to answer "how-to" questions related to four Customer Data Platforms (CDPs):  
**Segment**, **mParticle**, **Lytics**, and **Zeotap**.  

The chatbot extracts relevant information from the official documentation of these platforms and provides guidance on performing specific tasks or achieving desired outcomes within each platform.

---

## Core Functionalities
1. **Answer "How-to" Questions**  
   The chatbot can respond to queries such as:  
   - "How do I set up a new source in Segment?"
   - "How can I create a user profile in mParticle?"
   - "How do I build an audience segment in Lytics?"
   - "How can I integrate my data with Zeotap?"

2. **Documentation Extraction**  
   The chatbot retrieves relevant sections from the official documentation:
   - [Segment Documentation](https://segment.com/docs/?ref=nav)
   - [mParticle Documentation](https://docs.mparticle.com/)
   - [Lytics Documentation](https://docs.lytics.com/)
   - [Zeotap Documentation](https://docs.zeotap.com/home/en-us/)

3. **Question Variations**  
   Handles variations in question phrasing and size while filtering irrelevant questions.

4. **Enhanced UI/UX**  
   This version features a smooth and interactive user interface built using **React**, styled with **TailwindCSS**, and includes **Lucide React** icons for better visual design.

5. **Bonus Features**  
   - **Cross-CDP Comparisons:** Compare functionalities between CDPs.
   - **Advanced "How-to" Questions:** Guidance on advanced configurations and integrations.

---

## Tech Stack

### Dependencies
- **React**: ^18.3.1 (for building the UI)
- **React DOM**: ^18.3.1 (DOM manipulation)
- **Fuse.js**: ^7.0.0 (for fuzzy search functionality)
- **Lucide React**: ^0.344.0 (React icons)

### Development Dependencies
- **Vite**: ^5.4.11 (build tool and dev server)
- **TailwindCSS**: ^3.4.17 (utility-first CSS framework)
- **TypeScript**: ^5.7.3 (optional for type safety)
- **ESLint**: ^9.18.0 (JavaScript linter)
- **PostCSS**: ^8.4.49 (CSS post-processor)
- **Autoprefixer**: ^10.4.20 (adds vendor prefixes for CSS)
- **@vitejs/plugin-react**: ^4.3.4 (React plugin for Vite)
- **@types/react**: ^18.3.18 (TypeScript types for React)
- **@types/react-dom**: ^18.3.5 (TypeScript types for React DOM)
- **typescript-eslint**: ^8.20.0 (ESLint plugin for TypeScript)

---

## Installation Guide

### Prerequisites
Make sure you have **Node.js** and **npm** installed.

### 1. Clone the Repository
bash
git clone <repo-url>
cd Support-agent-chatbot-using-perplexity

## Install Dependencies
Install all required dependencies by running:
```bash
npm install react react-dom fuse.js lucide-react @vitejs/plugin-react vite tailwindcss postcss autoprefixer eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh typescript @types/react @types/react-dom typescript-eslint globals
````


## Start the Development Server
Run the following command to start the development server:
bash
npm start
npm run
npx vite preview
<img width="525" alt="Screenshot 2025-01-14 at 12 40 30 AM" src="https://github.com/user-attachments/assets/bf5fd2ba-54f1-4fca-bdb5-58fe631f9b94" />
