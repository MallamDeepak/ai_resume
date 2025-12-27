# Resume Builder - Project Structure Documentation

## Project Overview

This is a **Resume Builder Application** with React frontend and Node.js backend.

---

## Current File Structure

```
├── backend/
│   ├── .env
│   ├── index.js
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── admin/                    # (Empty - needs implementation)
│   │   │   ├── user/
│   │   │   │   ├── UserPage.jsx
│   │   │   │   └── UserPage.css
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Auth.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
└── README.md
```

---

## User Page - Features, Components & Files

### Current User Files

| File | Path | Description |
|------|------|-------------|
| UserPage.jsx | `frontend/src/components/user/UserPage.jsx` | Main user dashboard component |
| UserPage.css | `frontend/src/components/user/UserPage.css` | User page styling |

### Recommended User File Structure (Refactored)

```
frontend/src/components/user/
├── UserPage.jsx                      # Main layout with sidebar
├── UserPage.css                      # Main styling
├── components/
│   ├── Sidebar/
│   │   ├── UserSidebar.jsx           # Collapsible sidebar navigation
│   │   └── UserSidebar.css
│   ├── Dashboard/
│   │   ├── Dashboard.jsx             # Dashboard page with stats
│   │   ├── Dashboard.css
│   │   ├── StatCard.jsx              # Individual stat card component
│   │   ├── RecentResumes.jsx         # Recent resumes list
│   │   └── QuickActions.jsx          # Quick action buttons
│   ├── ResumeBuilder/
│   │   ├── ResumeBuilder.jsx         # Main resume builder container
│   │   ├── ResumeBuilder.css
│   │   ├── ModeSelection.jsx         # Create/Edit mode selection
│   │   ├── ResumeUpload.jsx          # Upload existing resume
│   │   ├── FormTabs.jsx              # Form section tabs
│   │   ├── forms/
│   │   │   ├── PersonalInfoForm.jsx  # Personal info section
│   │   │   ├── ExperienceForm.jsx    # Work experience section
│   │   │   ├── EducationForm.jsx     # Education section
│   │   │   ├── SkillsForm.jsx        # Skills section
│   │   │   ├── ProjectsForm.jsx      # Projects section
│   │   │   └── CertificationsForm.jsx # Certifications section
│   │   └── AISuggestions.jsx         # AI summary suggestions
│   ├── Templates/
│   │   ├── TemplatesPage.jsx         # Templates browsing page
│   │   ├── TemplatesPage.css
│   │   ├── TemplateCard.jsx          # Individual template card
│   │   └── TemplateCategories.jsx    # Category filter tabs
│   ├── Preview/
│   │   ├── LivePreview.jsx           # Side preview while editing
│   │   ├── LivePreview.css
│   │   ├── FullPreview.jsx           # Full page preview
│   │   └── ResumeDocument.jsx        # Resume paper component
│   ├── ATSChecker/
│   │   ├── ATSChecker.jsx            # ATS score checker page
│   │   ├── ATSChecker.css
│   │   ├── ATSUpload.jsx             # Resume upload for ATS
│   │   ├── JobDescriptionInput.jsx   # Job description textarea
│   │   └── ATSTips.jsx               # ATS optimization tips
│   ├── MyResumes/
│   │   ├── MyResumes.jsx             # Saved resumes page
│   │   ├── MyResumes.css
│   │   ├── ResumeCard.jsx            # Individual resume card
│   │   └── ResumeSearch.jsx          # Search & filter
│   └── Profile/
│       ├── EditProfile.jsx           # Profile settings page
│       ├── EditProfile.css
│       ├── AvatarUpload.jsx          # Avatar change component
│       └── DangerZone.jsx            # Account deletion section
```

### Main Features

| Feature | Description |
|---------|-------------|
| Dashboard | Stats overview, recent resumes, quick actions |
| AI Resume Builder | Create new or edit existing resume with AI assistance |
| Templates | Browse & select ATS-optimized templates (8 templates) |
| ATS Score Checker | Upload resume & analyze ATS compatibility |
| My Resumes | View, edit, download, delete saved resumes |
| Edit Profile | Account settings, avatar, danger zone |
| Live Preview | Real-time resume preview while editing |
| Collapsible Sidebar | Navigation with icons and descriptions |

### User Page Internal Components (Current in UserPage.jsx)

| Component/Function | Description |
|--------------------|-------------|
| `renderDashboard()` | Dashboard page with stats & quick actions |
| `renderResumeBuilder()` | Resume builder with mode selection |
| `renderTemplates()` | Template grid with categories |
| `renderTemplatesPage()` | Full templates page |
| `renderATSChecker()` | ATS score checker page |
| `renderMyResumes()` | Saved resumes list page |
| `renderProfile()` | Edit profile page |
| `renderMainContent()` | Builder/Preview/Templates tab content |
| `renderFormContent()` | Form section switcher |
| `renderPersonalForm()` | Personal info form |
| `renderWorkForm()` | Work experience form |
| `renderEducationForm()` | Education form |
| `renderSkillsForm()` | Skills form with suggestions |
| `renderProjectsForm()` | Projects form |
| `renderCertsForm()` | Certifications form |
| `renderLivePreview()` | Side preview component |
| `renderFullPreview()` | Full page preview |

### Sidebar Navigation Items

| ID | Label | Icon | Description |
|----|-------|------|-------------|
| `dashboard` | Dashboard | 📊 | Overview & stats |
| `resume` | AI Resume Builder | 📝 | Create & edit resume |
| `templates` | Templates | 📄 | Browse templates |
| `ats-checker` | ATS Score Checker | ✅ | Check ATS compatibility |
| `my-resumes` | My Resumes | 📁 | Downloads & saved |
| `profile` | Edit Profile | ⚙️ | Account settings |

### Resume Builder Form Sections

| Section | Fields |
|---------|--------|
| Personal Info | Full Name, Email, Phone, Location, LinkedIn, Website, Professional Summary |
| Work Experience | Job Title, Company, Start Date, End Date, Description (Multiple entries) |
| Education | Degree, School, Graduation Date, GPA (Multiple entries) |
| Skills | Technical Skills, Soft Skills (with AI suggestions) |
| Projects | Project Name, Technologies, Description, Link (Multiple entries) |
| Certifications | Certification Name, Issuer, Date, Credential Link (Multiple entries) |

### Form Tabs

| Tab ID | Label | Icon |
|--------|-------|------|
| `personal` | Personal | 👤 |
| `work` | Work | 💼 |
| `education` | Education | 🎓 |
| `skills` | Skills | ⚡ |
| `projects` | Projects | 📁 |
| `certs` | Certs | 📜 |

### Templates Available

| Template Name | Category | ATS Score | Popular |
|---------------|----------|-----------|---------|
| Modern Professional | Professional | 95% | ✅ |
| Classic Executive | Professional | 98% | ✅ |
| Creative Designer | Creative | 85% | ❌ |
| Minimalist Clean | Simple | 92% | ✅ |
| Tech Starter | Modern | 90% | ❌ |
| Bold Impact | Creative | 82% | ❌ |
| Elegant Serif | Professional | 94% | ✅ |
| Fresh Graduate | Simple | 88% | ❌ |

### Template Categories

| ID | Label |
|----|-------|
| `all` | All Templates |
| `professional` | Professional |
| `modern` | Modern |
| `creative` | Creative |
| `simple` | Simple |

### State Management

| State | Type | Description |
|-------|------|-------------|
| `activePage` | string | Current sidebar page (dashboard, resume, etc.) |
| `activeTab` | string | Builder/Preview/Templates tab |
| `activeSection` | string | Current form section |
| `resumeMode` | null/string | null, 'create', or 'edit' mode |
| `sidebarCollapsed` | boolean | Sidebar toggle state |
| `formData` | object | All resume form data |
| `selectedTemplate` | number | Current template ID |
| `templateCategory` | string | Selected template category filter |
| `showSuggestions` | boolean | AI suggestions visibility |
| `selectedRole` | string | Selected role for AI suggestions |
| `jobTitle` | string | Job title for AI generation |
| `industry` | string | Industry for AI generation |
| `uploadedResume` | File/null | Uploaded resume file |
| `newSkill` | string | New skill input value |
| `skillType` | string | 'technical' or 'soft' |

### Form Data Structure

```javascript
{
  fullName: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  website: '',
  summary: '',
  experience: [{ id, title, company, location, startDate, endDate, description }],
  education: [{ id, degree, school, location, graduationDate, gpa }],
  skills: { technical: [], soft: [] },
  projects: [{ id, name, description, technologies, link }],
  certifications: [{ id, name, issuer, date, link }]
}
```

### Dashboard Stats

| Stat | Icon | Color |
|------|------|-------|
| Resumes Created | 📄 | Blue |
| Avg ATS Score | ✅ | Green |
| Downloads | 📥 | Purple |
| Templates Used | 📄 | Orange |

### My Resumes Data Structure

```javascript
{
  id: number,
  name: string,      // e.g., 'Software_Engineer_Resume.pdf'
  date: string,      // e.g., 'Dec 24, 2024'
  size: string,      // e.g., '245 KB'
  atsScore: number   // e.g., 94
}
```

---

## Admin Page - Required Files & Features

**Path:** `frontend/src/components/admin/` (Currently Empty)

### Recommended File Structure

```
frontend/src/components/admin/
├── AdminPage.jsx                    # Main admin dashboard layout
├── AdminPage.css                    # Admin styling
├── components/
│   ├── AdminSidebar.jsx             # Admin navigation sidebar
│   ├── DashboardStats.jsx           # Analytics & statistics cards
│   ├── UserManagement.jsx           # CRUD operations for users
│   ├── TemplateManagement.jsx       # Add/edit/delete templates
│   ├── ResumeReports.jsx            # View all user resumes & reports
│   ├── SubscriptionPlans.jsx        # Manage pricing/plans
│   ├── SystemSettings.jsx           # App configuration
│   └── ActivityLogs.jsx             # User activity tracking
```

### Admin Features Required

| Feature | File Path | Description |
|---------|-----------|-------------|
| Admin Dashboard | `AdminPage.jsx` | Overview with key metrics, charts |
| User Management | `components/UserManagement.jsx` | View, edit, ban, delete users |
| Template Management | `components/TemplateManagement.jsx` | Add/edit/remove resume templates |
| Resume Reports | `components/ResumeReports.jsx` | View all resumes, export data |
| Subscription/Plans | `components/SubscriptionPlans.jsx` | Manage pricing tiers |
| System Settings | `components/SystemSettings.jsx` | App config, email settings |
| Activity Logs | `components/ActivityLogs.jsx` | Track user actions |
| Analytics Dashboard | `components/DashboardStats.jsx` | Charts, user growth, downloads |

### Admin Dashboard Metrics

- Total Users
- Total Resumes Created
- Active Subscriptions
- Downloads Today/Week/Month
- New Registrations
- Popular Templates
- ATS Score Distribution

### User Management Features

- View all users (table with pagination)
- Search & filter users
- Edit user details
- Change user role (user/admin)
- Ban/Suspend users
- Delete users
- View user activity

### Template Management Features

- Add new templates
- Edit existing templates
- Set template category
- Set ATS score
- Enable/Disable templates
- Set as popular/featured
- Preview templates

---

## Additional Files Needed for Admin

| File | Path | Purpose |
|------|------|---------|
| Admin Route | `frontend/src/App.jsx` | Add `/admin` route |
| Admin Auth Guard | `frontend/src/components/AdminRoute.jsx` | Protect admin routes (role check) |
| Admin Context | `frontend/src/context/AdminContext.jsx` | Admin state management |

---

## Backend API Endpoints Needed

### Auth Routes
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### User Routes
- `GET /api/users` (Admin)
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `DELETE /api/users/:id` (Admin)

### Resume Routes
- `GET /api/resumes`
- `GET /api/resumes/:id`
- `POST /api/resumes`
- `PUT /api/resumes/:id`
- `DELETE /api/resumes/:id`
- `POST /api/resumes/upload`
- `GET /api/resumes/download/:id`

### Template Routes
- `GET /api/templates`
- `POST /api/templates` (Admin)
- `PUT /api/templates/:id` (Admin)
- `DELETE /api/templates/:id` (Admin)

### Admin Routes
- `GET /api/admin/stats`
- `GET /api/admin/users`
- `GET /api/admin/activity-logs`
- `PUT /api/admin/users/:id/role`
- `PUT /api/admin/users/:id/ban`

---

## Context Files

### AuthContext.jsx (Existing)
**Path:** `frontend/src/context/AuthContext.jsx`

| Function | Description |
|----------|-------------|
| `login(userData)` | Set user & save to localStorage |
| `logout()` | Clear user & localStorage |
| `register(userData)` | Set user & save to localStorage |
| `user` | Current user object |
| `loading` | Auth loading state |

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `frontend/src/pages/Home.jsx` | Landing page with hero, features |
| Login | `frontend/src/pages/Login.jsx` | User login form |
| Register | `frontend/src/pages/Register.jsx` | User registration form |

---

## Protected Routes

### ProtectedRoute.jsx (Existing)
**Path:** `frontend/src/components/ProtectedRoute.jsx`

- Checks if user is authenticated
- Shows loading state while checking
- Redirects to `/login` if not authenticated

### AdminRoute.jsx (Needed)
**Path:** `frontend/src/components/AdminRoute.jsx`

- Checks if user is authenticated
- Checks if user has admin role
- Redirects to `/user` if not admin
- Redirects to `/login` if not authenticated

---

## App Routes (Current)

| Route | Component | Protected |
|-------|-----------|-----------|
| `/` | Home | No |
| `/login` | Login | No |
| `/register` | Register | No |
| `/user` | UserPage | Yes (ProtectedRoute) |

### Routes to Add

| Route | Component | Protected |
|-------|-----------|-----------|
| `/admin` | AdminPage | Yes (AdminRoute) |
| `/admin/users` | UserManagement | Yes (AdminRoute) |
| `/admin/templates` | TemplateManagement | Yes (AdminRoute) |
| `/admin/reports` | ResumeReports | Yes (AdminRoute) |
| `/admin/settings` | SystemSettings | Yes (AdminRoute) |
