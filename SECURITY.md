# 🔐 Security Policy

## 🚧 Project Status

This project is in early development and is not suitable for production use.
The current action does not establish a VPN tunnel. There are no supported
release versions yet.

## 🛡️ Security Requirements

The implementation is expected to:

- Mask private keys immediately after reading them and never log secrets or
  rendered private configuration.
- Validate user inputs and pass values as discrete command arguments rather
  than interpolating them into shell commands.
- Restrict configuration-file permissions before writing secrets.
- Attempt all independent teardown operations and remove temporary files.
- Add tests for secret handling, input validation, command construction, and
  partial cleanup failures.

These requirements describe intended safeguards; they are not a security
certification of the current scaffold.

## 📦 Dependency Installation

The repository disables install lifecycle scripts for pnpm and npm by default.
Do not override this setting. This reduces install-time risk but does not stop
malicious code from running when a dependency is executed or imported, and
pnpm's configuration hooks are not covered by this setting. Review dependency
changes and use the committed lockfile with frozen installs in CI.

## 📣 Reporting a Vulnerability

Please do not report suspected vulnerabilities in a public issue. If private
vulnerability reporting is enabled for this repository, use the repository's
**Security** tab. Otherwise, contact the repository maintainers through a
private channel listed in the repository's owner profile.

## ✅ Consumer Guidance

Do not pass production secrets to this scaffold. When a functional release is
available, pin dependencies and action references according to your
organization's security policy, and use the least network access the workflow
requires.
