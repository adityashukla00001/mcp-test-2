# AgentFlow Component Hierarchy

```mermaid
graph TD
    A["Document<br/>html"]
    B["Head<br/>meta, title, links"]
    C["Body"]
    D["Container<br/>div.container"]
    E["Card<br/>div.card"]
    
    F["Header Section<br/>div.header-section"]
    G["Sign-in Section<br/>div.signin-section"]
    H["Footer Section<br/>div.footer-section"]
    
    I["Logo Container<br/>div.logo-container"]
    J["Heading<br/>h1.heading"]
    K["Subheading<br/>p.subheading"]
    
    L["Sign-in Text<br/>p.signin-text"]
    M["Buttons Container<br/>div.buttons-container"]
    N["Info Box<br/>div.info-box"]
    
    O["Button 1<br/>button.signin-button"]
    P["Button 2<br/>button.signin-button"]
    Q["Button 3<br/>button.signin-button"]
    
    R["Footer Text<br/>p.footer-text"]
    
    S["Logo Image<br/>img.logo"]
    T["Icon 1<br/>img.button-icon"]
    U["Icon 2<br/>img.button-icon"]
    V["Icon 3<br/>img.button-icon"]
    W["Button Label 1<br/>span"]
    X["Button Label 2<br/>span"]
    Y["Button Label 3<br/>span"]
    Z["Info Text<br/>p.info-text"]
    
    A --> B
    A --> C
    C --> D
    D --> E
    E --> F
    E --> G
    E --> H
    
    F --> I
    F --> J
    F --> K
    
    G --> L
    G --> M
    G --> N
    
    H --> R
    
    I --> S
    M --> O
    M --> P
    M --> Q
    
    N --> Z
    
    O --> T
    O --> W
    
    P --> U
    P --> X
    
    Q --> V
    Q --> Y
    
    style A fill:#e1f5ff
    style B fill:#b3e5fc
    style C fill:#b3e5fc
    style D fill:#81d4fa
    style E fill:#4fc3f7
    style F fill:#29b6f6
    style G fill:#29b6f6
    style H fill:#29b6f6
    style I fill:#039be5
    style J fill:#039be5
    style K fill:#039be5
    style L fill:#039be5
    style M fill:#039be5
    style N fill:#039be5
    style O fill:#0288d1
    style P fill:#0288d1
    style Q fill:#0288d1
    style R fill:#039be5
    style S fill:#0277bd
    style T fill:#0277bd
    style U fill:#0277bd
    style V fill:#0277bd
    style W fill:#0277bd
    style X fill:#0277bd
    style Y fill:#0277bd
    style Z fill:#0277bd
```

## Component Structure Overview

### Root Level
- **Document** (`<html>`)
  - Head metadata and styling links
  - Body content

### Main Container
- **Container** (`.container`)
  - Wrapper with max-width 480px
  - Flexbox centering

### Card Component
- **Card** (`.card`)
  - White background, bordered, rounded corners
  - Contains 3 main sections

### Section 1: Header Section (`.header-section`)
- **Logo Container** (`.logo-container`)
  - AgentFlow logo image (64x64px)
- **Heading** (`<h1>`)
  - "AgentFlow" title text
- **Subheading** (`<p>`)
  - "AI-Powered Project Management Suite" tagline

### Section 2: Sign-in Section (`.signin-section`)
- **Sign-in Text** (`<p>`)
  - "Sign in with your workspace account"
- **Buttons Container** (`.buttons-container`)
  - Button 1: Continue with Jira
    - Jira icon (16x16px)
    - Button label text
  - Button 2: Continue with GitHub
    - GitHub icon (16x16px)
    - Button label text
  - Button 3: Continue with Azure DevOps
    - Azure icon (16x16px)
    - Button label text
- **Info Box** (`.info-box`)
  - Disclaimer text about credential usage

### Section 3: Footer Section (`.footer-section`)
- **Footer Text** (`<p>`)
  - "By signing in, you agree to our Terms of Service"

## DOM Depth

- **Level 0**: html
- **Level 1**: head, body
- **Level 2**: container
- **Level 3**: card
- **Level 4**: header-section, signin-section, footer-section
- **Level 5**: logo-container, h1, p (subheading), signin-text, buttons-container, info-box, footer-text
- **Level 6**: img (logo), button × 3, p (info-text)
- **Level 7**: img (icons × 3), span (labels × 3)

## Total Components: 23

| Component Type | Count |
|---|---|
| Containers/Sections | 8 |
| Text Elements | 7 |
| Buttons | 3 |
| Images | 5 |
| Total | 23 |
