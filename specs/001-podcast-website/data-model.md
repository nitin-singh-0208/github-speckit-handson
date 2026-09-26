# Phase 1: Data Model

The application relies entirely on mocked static data embedded within the source code.

## Entities

### `Episode`
Represents a single podcast episode.

- `id`: string (Unique identifier)
- `title`: string (The title of the episode)
- `description`: string (Detailed description)
- `audioUrl`: string (Path to the audio file or a placeholder URL)
- `publishDate`: string (ISO 8601 date string)
- `duration`: string (Formatted duration, e.g., "45:20")
- `isFeatured`: boolean (Flag to indicate if it should appear on the landing page)

### `FAQ`
Represents a frequently asked question.

- `id`: string (Unique identifier)
- `question`: string (The question text)
- `answer`: string (The answer text)
