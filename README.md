# LangChain Tutorial — Week 1 Submission

This repository contains my **Week 1 Game Research assignment**, following the official [LangChain JS Tutorial](https://js.langchain.com/docs/tutorials/llm_chain/).  
It demonstrates how to integrate **two different LLM providers**—**Groq** and **Gemini**—using LangChain’s modular ChatModel interface.

---

### 📘 Branch Organization

> **Main branch:** Documentation and project overview  
> **groq-version:** Implementation using Groq’s `@langchain/groq` package  
> **gemini-version:** Implementation using Google’s `@langchain/google-genai` package

---

## ✨ Features
- **Groq version:** Uses `@langchain/groq` with the `llama-3.3-70b-versatile` model.  
- **Gemini version:** Uses `@langchain/google-genai` with the `gemini-2.0-flash` model.  
- Demonstrates `SystemMessage` / `HumanMessage` message passing.  
- Secure `.env` handling for API keys (no keys stored in code).  
- Organized with separate Git branches for each implementation.

---

## 🚀 Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/stevex24/LangChain-Tutorial.git
   cd LangChain-Tutorial

   ---

### 🔒 Security and Transparency Note
During early development, a test API key was temporarily committed to this repository.  
The key was **immediately revoked**, all repository history was **securely cleaned**, and `.env` handling has been verified to prevent future exposures.  
No active credentials or private data are present in this project.

This cleanup process follows best practices for responsible disclosure and reinforces the importance of secure environment management in collaborative research settings.
