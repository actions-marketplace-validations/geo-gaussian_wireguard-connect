# 🔌 WireGuard Connect Action

> **Early development:** This repository is a project scaffold, not a usable
> GitHub Action. It does not connect to a VPN or configure DNS. The current
> action entry point fails explicitly; do not use it in production workflows.

## 🎯 Project Goal

WireGuard Connect is intended to become a GitHub Action that gives workflow jobs
temporary access to private network resources through a WireGuard tunnel. The
project aims to support split-DNS and reliable teardown without exposing tunnel
secrets in logs or leaving runner configuration behind.

These are goals, not currently implemented or verified capabilities. See the
[draft requirements](./BRD.md) and [intended architecture](./ARCHITECTURE.md).

## 🚧 Current State

The repository is being bootstrapped. It includes a development toolchain,
Spec Kit scaffolding, and a fail-fast action entry point. VPN setup, DNS
configuration, cleanup, supported runner matrices, and releases are not yet
implemented or validated.

## 🧰 Development

Use Node.js 22.18 or later and pnpm 12.21.0 for development:

```sh
pnpm install
pnpm run setup-hooks
pnpm run lint
pnpm test
pnpm run build
```

See the [development guide](./DEVELOPMENT.md) and
[contribution guide](./CONTRIBUTING.md) for details.

## 🧭 Spec-Driven Development

This repository is initialized with GitHub Spec Kit and its Copilot skills.
Start new work with `/speckit-specify`, then use `/speckit-plan`,
`/speckit-tasks`, and `/speckit-implement` as appropriate. The project
principles are in the [Spec Kit constitution](./.specify/memory/constitution.md).

## 📚 Project Documents

- [Intended architecture](./ARCHITECTURE.md)
- [Draft requirements](./BRD.md)
- [Development guide](./DEVELOPMENT.md)
- [Security policy](./SECURITY.md)
- [Contributing guide](./CONTRIBUTING.md)
- [Documentation index](./docs/README.md)

## ⚖️ License

This project is licensed under the [BSD 3-Clause License](./LICENSE).
