# 🤝 Contributing

Thanks for helping build WireGuard Connect. The project is currently a
development scaffold, so contributions should make the intended behavior
clear without implying that unimplemented features are ready to use.

## 🚀 Getting Started

Use Node.js 22.18 or later and pnpm 12.21.0:

```sh
pnpm install
pnpm run setup-hooks
```

Open or create a Spec Kit feature specification before starting substantial
feature work.

## ✅ Before Submitting

Run the checks that apply to your change:

```sh
pnpm run lint
pnpm test
pnpm run build
```

Changes to `src/` must include the updated bundle in `dist/`. Keep tests and
documentation in step with the behavior they describe.

## 🧪 Tests and Platform Claims

Add focused unit tests for new logic and failure cases. Network setup, split
DNS, and cleanup need platform integration tests before any OS or architecture
is described as supported. The current scaffold does not provide those tests.

## 🔐 Security

Never add secrets or live private keys to source code, fixtures, logs, or
examples. Follow the security requirements in [AGENTS.md](./AGENTS.md) and the
[security policy](./SECURITY.md).

## 📝 Documentation Style

Use emojis in project-authored Markdown headings at levels 1–3, two-space
indentation, and cspell-approved spelling. Keep the README, development guide,
architecture, and requirements consistent with the actual implementation.

## 📬 Pull Requests

Describe the change and its verification clearly. Mark tests or platform
behavior that remain unverified; do not describe the scaffold as production
ready.
