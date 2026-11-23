# 🏗️ Intended Architecture

> **Status:** This describes a target design. The tunnel lifecycle and
> platform implementations have not been built or validated yet.

## 🎯 Design Goal

The action is intended to create a temporary WireGuard connection for one
workflow job and remove the tunnel and any related DNS configuration afterward.
The eventual implementation should keep shared input validation separate from
operating-system-specific commands.

## 🔄 Planned Lifecycle

1. Read and validate action inputs, masking secret values before any logging.
2. Detect the runner operating system and ensure required WireGuard tooling is
   available.
3. Create a restricted-permission configuration file and bring up the tunnel.
4. Optionally configure split-DNS and verify connectivity.
5. During the GitHub Actions `post` phase, attempt to revert DNS changes, stop
   the tunnel, and remove temporary configuration, including when an earlier
   workflow step fails.

None of these lifecycle steps is currently implemented. A post step cannot
guarantee cleanup if the runner terminates before it can run.

## 🧩 Planned Components

| Area             | Intended responsibility                         | Current state                       |
| :--------------- | :---------------------------------------------- | :---------------------------------- |
| `src/main.ts`    | Validate inputs and start the tunnel            | Fails explicitly as a scaffold      |
| `src/post.ts`    | Revert DNS and tear down the tunnel             | Empty placeholder                   |
| `src/config.ts`  | Parse inputs and render WireGuard configuration | Empty placeholder                   |
| `src/platforms/` | Isolate Linux, macOS, and Windows operations    | Empty placeholders                  |
| `dist/`          | Bundled JavaScript consumed by GitHub Actions   | Main bundle is a fail-fast scaffold |

## 🖥️ Platform Strategy

Linux, macOS, and Windows are candidate targets. The supported runner images,
architectures, installation methods, DNS mechanisms, permissions, and teardown
behavior remain to be specified and tested. Do not advertise a platform as
supported until CI and integration testing provide evidence for it.

## 🔐 Security Invariants

The implementation must mask private keys, avoid interpolating inputs into
shell commands, restrict configuration-file permissions before writing
secrets, and attempt independent cleanup operations even if one cleanup step
fails. These are requirements for future code, not claims about the current
scaffold.

## ✅ Validation

Unit tests should cover input validation and platform command construction.
Privileged networking and DNS behavior require separate integration tests on
the target runner platforms before support can be claimed.
