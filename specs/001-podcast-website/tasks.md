# Implementation Tasks: podcast-website

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Next.js project with App Router and TypeScript in the root directory
- [ ] T002 [P] Clean up default Next.js boilerplate from `src/app/page.tsx` and `src/app/globals.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T003 [P] Create `Episode` and `FAQ` TypeScript interfaces in `src/data/types.ts`
- [ ] T004 [P] Create mock data array of 20 episodes in `src/data/episodes.ts` (depends on T003)
- [ ] T005 [P] Create mock data array of FAQs in `src/data/faqs.ts` (depends on T003)
- [ ] T006 Setup global layout structure and basic navigation in `src/app/layout.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Landing Page Experience (Priority: P1) 🎯 MVP

**Goal**: As a listener, I want to visit the landing page and immediately see the latest featured episode with an eye-catching, modern design.

**Independent Test**: Can be fully tested by loading the root URL, verifying the featured episode is prominently displayed, and evaluating the modern aesthetic.

### Implementation for User Story 1

- [ ] T007 [P] [US1] Create `FeaturedEpisode` component in `src/components/FeaturedEpisode.tsx`
- [ ] T008 [US1] Implement landing page in `src/app/page.tsx` to fetch featured episode from `episodes.ts` and render `FeaturedEpisode` component

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Browsing Episodes (Priority: P1)

**Goal**: As a listener, I want to visit a dedicated episodes page to browse through all 20 past episodes.

**Independent Test**: Can be fully tested by navigating to the `/episodes` route and confirming exactly 20 mocked episodes are listed.

### Implementation for User Story 2

- [ ] T009 [P] [US2] Create `EpisodeCard` component in `src/components/EpisodeCard.tsx`
- [ ] T010 [US2] Create episodes route and page in `src/app/episodes/page.tsx` to render all 20 episodes
- [ ] T011 [US2] Update navigation in `src/app/layout.tsx` to include link to the episodes page

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Reading FAQs (Priority: P2)

**Goal**: As a listener, I want to visit an FAQ page to find answers to common questions about the podcast.

**Independent Test**: Can be fully tested by navigating to the `/faq` route and verifying the list of frequently asked questions and answers.

### Implementation for User Story 3

- [ ] T012 [P] [US3] Create `FAQItem` component in `src/components/FAQItem.tsx`
- [ ] T013 [US3] Create FAQ route and page in `src/app/faq/page.tsx` to render the FAQ list from `faqs.ts`
- [ ] T014 [US3] Update navigation in `src/app/layout.tsx` to include link to the FAQ page

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T015 [P] Audit and fix responsive design layout across all pages and viewports in `src/app/globals.css` and component CSS modules
- [ ] T016 [P] Verify edge case handling (e.g., text overflow in episode descriptions)
- [ ] T017 Run validation scenarios outlined in `quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User Story 1 and 2 can proceed in parallel once Foundation is done.
  - User Story 3 can proceed in parallel.
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### Parallel Opportunities

- T003, T004, and T005 can be executed semi-concurrently (T004/T005 depend on T003).
- US1 (`FeaturedEpisode`), US2 (`EpisodeCard`), and US3 (`FAQItem`) components can be built in parallel.
- US1, US2, and US3 routing pages can be built in parallel.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready
