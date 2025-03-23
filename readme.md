# Video Sharing App Backend

A backend service for a video-sharing platform (like YouTube or TikTok) built with Node.js, Express.js, and MongoDB. Supports user authentication, video uploads, comments, likes, and playlists.

---

## Features
- **User Authentication**: Signup, login, and JWT-based authorization.
- **Video Management**: Upload, stream, and categorize videos.
- **Social Interactions**: Comments, likes, and playlists.
- **Moderation**: User reporting system with admin resolution.
- **Notifications**: Real-time updates for user activities.

---

## Entity-Relationship Diagram (ERD)
```mermaid
erDiagram

    %% Entities
    User {
        string user_id PK
        string username
        string email
        string password_hash
        enum role "admin, user"
        datetime created_at
        datetime last_login
        string profile_picture_url
        boolean is_banned
    }

    Video {
        string video_id PK
        string user_id FK
        string title
        string description
        datetime upload_date
        int duration
        string file_url
        string thumbnail_url
        int views_count
        boolean is_public
        enum status "published, pending_review, removed"
    }

    Comment {
        string comment_id PK
        string user_id FK
        string video_id FK
        string content
        datetime created_at
        datetime updated_at
    }

    Like {
        string like_id PK
        string user_id FK
        string video_id FK
        datetime created_at
    }

    Category {
        string category_id PK
        string name
        string description
    }

    Playlist {
        string playlist_id PK
        string user_id FK
        string name
        string description
        datetime created_at
    }

    Report {
        string report_id PK
        string reporter_id FK
        string video_id FK
        string reason
        enum status "pending, resolved"
        datetime created_at
        datetime resolved_at
        string resolved_by FK
    }

    Notification {
        string notification_id PK
        string user_id FK
        string content
        boolean is_read
        datetime created_at
    }

    %% Relationships
    User ||--o{ Video : "uploads"
    User ||--o{ Comment : "writes"
    User ||--o{ Like : "creates"
    User ||--o{ Playlist : "creates"
    User ||--o{ Report : "submits"
    User ||--o{ Notification : "receives"
    Video ||--o{ Comment : "has"
    Video ||--o{ Like : "has"
    Video }o--o{ Category : "belongs_to (M:N)"
    Playlist }o--o{ Video : "contains (M:N)"
    User }o--o{ User : "subscribes_to (M:N)"
    Report }|--|| User : "resolved_by (admin)"
    