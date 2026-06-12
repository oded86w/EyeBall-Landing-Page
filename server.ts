import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add Link headers for agent discovery (RFC 8288)
  app.use((req, res, next) => {
    if (req.path === "/") {
      res.setHeader(
        "Link",
        '</.well-known/api-catalog>; rel="api-catalog", </docs/api>; rel="service-doc"'
      );

      // Markdown for Agents (Content Negotiation)
      // Only serve markdown if specifically requested or preferred over HTML
      const acceptsMarkdown = req.accepts(["html", "markdown"]) === "markdown";
      const explicitlyRequestsMarkdown = req.headers.accept === "text/markdown";

      if (acceptsMarkdown || explicitlyRequestsMarkdown) {
        res.setHeader("Content-Type", "text/markdown; charset=utf-8");
        // Opt-in for markdown tokens if available
        res.setHeader("x-markdown-tokens", "true");
        return res.sendFile(path.join(process.cwd(), "public/index.md"));
      }
    }
    next();
  });

  // Example API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Mock API catalog and docs for agent discovery
  app.get("/.well-known/api-catalog", (req, res) => {
    res.json({
      name: "EyeBall Security API",
      description: "API catalog for EyeBall Security landing page features.",
      endpoints: [
        {
          path: "/api/contact",
          method: "POST",
          description: "Submit a request for Pro access",
        },
      ],
    });
  });

  app.get("/docs/api", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public/docs/api.html"));
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
