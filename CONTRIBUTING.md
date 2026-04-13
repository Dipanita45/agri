# Contributing to Fasal Saathi

Thank you for your interest in contributing to Fasal Saathi! This document outlines our contribution guidelines.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How Can I Contribute?

### 🐛 Reporting Bugs

1. **Search existing issues** - Check if the bug has already been reported
2. **Create a new issue** - Use the bug report template
3. **Include details**:
   - Clear title describing the issue
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Your environment (OS, Node version, Python version)

### 💡 Suggesting Features

1. **Check existing suggestions** - Look through feature request issues
2. **Create a feature request** - Use the feature request template
3. **Describe**:
   - The problem you're trying to solve
   - Your proposed solution
   - Alternative solutions considered
   - Any additional context

### 🔧 Pull Requests

#### Getting Started

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/fasal-saathi.git
   cd fasal-saathi
   ```
3. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/your-org/fasal-saathi.git
   ```

#### Setting Up Development Environment

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt

# Run tests to verify setup
npm test
```

#### Creating Your Feature

1. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes:
   git checkout -b fix/issue-description
   ```

2. **Make your changes** - Follow our coding standards

3. **Write tests** - Add tests for new functionality

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add feature description"
   ```

5. **Sync with upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push and create PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

---

## 📐 Branch Naming Conventions

| Type | Example | Use Case |
|------|---------|----------|
| `feature/` | `feature/yield-prediction` | New features |
| `fix/` | `fix/weather-api-error` | Bug fixes |
| `docs/` | `docs/update-readme` | Documentation |
| `refactor/` | `refactor/api-cleanup` | Code refactoring |
| `test/` | `test/add-yield-tests` | Adding tests |

---

## 📝 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
git commit -m "feat(weather): add 7-day forecast display"
git commit -m "fix(yield): correct calculation for wheat crop"
git commit -m "docs: update API documentation"
```

---

## 🎯 Pull Request Process

### Before Submitting

1. ✅ Run `npm run lint` and fix any errors
2. ✅ Run `npm test` and ensure all tests pass
3. ✅ Update documentation if needed
4. ✅ Add yourself to CONTRIBUTORS.md (optional)

### PR Template

Fill out our PR template with:
- Clear description of changes
- Related issue number (e.g., "Fixes #123")
- Screenshots for UI changes
- Test results

### Review Process

1. Maintainers will review your PR
2. You may receive feedback and requests for changes
3. Once approved, your PR will be merged

---

## 🏷️ Good First Issues

Looking for a way to contribute? Try these beginner-friendly issues:

- [ ] Add unit tests for existing components
- [ ] Improve error handling in API calls
- [ ] Fix typos in documentation
- [ ] Add new language translations
- [ ] Improve CSS for mobile responsiveness

---

## 🧪 Testing Guidelines

### Frontend Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Writing Tests

- Use descriptive test names
- Follow Arrange-Act-Assert pattern
- Test both success and error cases
- Mock external API calls

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

Thank you for contributing to Fasal Saathi! 🚀
