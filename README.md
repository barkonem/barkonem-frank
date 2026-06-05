# Frank — Barkonem AI Executive

**Frank** is an AI-powered executive assistant built for [Barkonem IT Services](https://barkonem-frank.vercel.app), a premium IT, cybersecurity, smart home, and AI consulting company based in the Philadelphia/PA region.

Frank is deployed as a live chat interface and acts as an AI COO/CTO/strategist — briefing visitors on Barkonem's services, positioning, and capabilities using the Anthropic Claude API.

🔗 **Live Demo:** [barkonem-frank.vercel.app](https://barkonem-frank.vercel.app)

---

## Features

- AI chat interface powered by **Claude (claude-sonnet-4-5)** via the Anthropic Messages API
- - Custom system prompt defining Frank's persona, business context, and communication style
  - - Auto-intro on page load to seed Frank's opening briefing
    - - Markdown rendering for bold, headers, lists, and strategic `NEXT MOVE:` sections
      - - Secure API proxy via Vercel serverless function — API key never exposed to the browser
        - - Responsive, single-file frontend with a polished dark navy design system
         
          - ---

          ## Tech Stack

          | Layer | Technology |
          |---|---|
          | Frontend | HTML, CSS, Vanilla JavaScript |
          | AI Model | Anthropic Claude (`claude-sonnet-4-5`) |
          | API Proxy | Vercel Serverless Function (Node.js) |
          | Deployment | Vercel |
          | Fonts | Bebas Neue, IBM Plex Mono, DM Sans |

          ---

          ## Project Structure

          ```
          barkonem-frank/
          ├── index.html        # Full chat UI — single-file frontend app
          ├── api/
          │   └── chat.js       # Vercel serverless function — Anthropic API proxy
          ├── package.json      # ESM module config
          └── Documents/        # Supporting project documents
          ```

          ---

          ## How It Works

          1. The user sends a message in the chat interface (`index.html`)
          2. 2. The frontend posts to `/api/chat` — a Vercel serverless function
             3. 3. The serverless function securely forwards the request to the Anthropic Messages API using a server-side environment variable (`ANTHROPIC_API_KEY`)
                4. 4. The response is streamed back and rendered with markdown formatting
                  
                   5. This pattern ensures the API key is **never exposed in the browser or client-side code**.
                  
                   6. ---
                  
                   7. ## Running Locally
                  
                   8. No build step required. Clone the repo and open the file directly:
                  
                   9. ```bash
                      git clone https://github.com/barkonem/barkonem-frank.git
                      cd barkonem-frank
                      ```

                      For the API proxy to work locally, use the [Vercel CLI](https://vercel.com/docs/cli):

                      ```bash
                      npm install -g vercel
                      vercel dev
                      ```

                      Set your `ANTHROPIC_API_KEY` as an environment variable in your Vercel project settings or a local `.env` file.

                      ---

                      ## Design System

                      | Token | Value |
                      |---|---|
                      | Navy | `#050d1a` |
                      | Electric Blue | `#0ea5e9` |
                      | Cyan | `#22d3ee` |
                      | Accent Orange | `#ff6b2b` |
                      | Body Font | DM Sans |
                      | Mono Font | IBM Plex Mono |
                      | Display Font | Bebas Neue |

                      ---

                      ## License

                      MIT © [Barkonem IT Services](https://barkonem-frank.vercel.app)
