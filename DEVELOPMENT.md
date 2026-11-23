# 🛠️ Development Guide

## 🧰 Prerequisites

- Node.js 22.18 or later for development. The GitHub Action runtime remains
  Node.js 20.
- pnpm 12.21.0, as pinned in `package.json`.
- Git.

## 🚀 Setup

```sh
pnpm install
pnpm run setup-hooks
```

The setup command configures this checkout to run `.githooks/pre-commit`.
The hook runs the lint script, which checks formatting, spelling, and
TypeScript types.

Install lifecycle scripts are disabled in `pnpm-workspace.yaml` and `.npmrc`.
Do not override this protection. Run project scripts explicitly, for example
with `pnpm run` or `pnpm test`; the Git hook is installed only when
`pnpm run setup-hooks` is invoked. Use pnpm for dependencies and commit
`pnpm-lock.yaml`; CI installs it with `--frozen-lockfile`. This is a project
convention and CI uses pnpm; install-script protection does not prevent someone
from running another package manager.

## 📋 Common Commands

| Command                | Purpose                                               |
| :--------------------- | :---------------------------------------------------- |
| `pnpm run lint`        | Check formatting, spelling, and TypeScript types.     |
| `pnpm test`            | Run the Jest tests.                                   |
| `pnpm run build`       | Bundle the fail-fast action scaffold into `dist/`.    |
| `pnpm run format`      | Apply Prettier formatting to supported project files. |
| `pnpm run setup-hooks` | Configure the local Git pre-commit hook.              |

The current test only verifies that the action fails explicitly while its
functionality is unimplemented. Passing checks do not imply that VPN behavior
works.

## 📦 Bundling

GitHub Actions executes the committed JavaScript in `dist/` directly. After
changing `src/`, run `pnpm run build` and include the corresponding generated
bundle changes. CI checks that the build output is synchronized with the
committed files.

## 🧪 Testing Expectations

New validation and platform behavior should have focused unit tests. Network
interface and DNS changes require integration testing on each platform before
that platform can be described as supported. The current CI workflow does not
perform privileged networking tests.

## 🧭 Spec Kit

The repository includes Spec Kit templates, scripts, and Copilot skills. For
feature work, start with `/speckit-specify`; use `/speckit-plan`,
`/speckit-tasks`, and `/speckit-implement` to continue the workflow. Update the
constitution through `/speckit-constitution` when project principles change.

## 🚫 Releases

There are no production releases or supported versions yet. Do not publish a
version or recommend this action for production use until its behavior,
security controls, platform coverage, and cleanup have been implemented and
validated.
