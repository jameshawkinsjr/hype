# Database Schema

### `users`

| column name     | data type | details                   | foreign key |
|-----------------|-----------|---------------------------|-------------|
| id              | integer   | not null, primary key     |
| full_name       | string    | not null, indexed         |
| alias           | string    |                           |
| email           | string    | not null, indexed, unique |
| profile_photo   | string    | not null                  |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| created_at      | datetime  | not null                  |
| updated_at      | datetime  | not null                  |

* index on `:full_name`
* index on `:email, unique: true`
* index on `:session_token, unique: true`
  
---

### `messages`

| column name | data type | details               | foreign key |
|-------------|-----------|-----------------------|-------------|
| id          | integer   | not null, primary key |             |
| body        | text      | not null, indexed     |             |
| chatroom_id | integer   | not null, foreign_key | true        |
| author_id   | integer   | not null  foreign_key | true        |
| parent_id   | integer   |           foreign_key | true        |
| created_at  | datetime  | not null              |             |
| updated_at  | datetime  | not null              |             |

* index on `:body`
* `:author_id` references `users`
* `:chatroom_id` references `chatrooms`
* `:parent_id` references `messages`

---
###`chatrooms`

| column name | data type | details               | foreign key |
|-------------|-----------|-----------------------|-------------|
| id          | integer   | not null, primary key |             |
| title       | string    |                       |             |
| topic       | string    | not null              |             |
| type        | string    | not null              |             |
| admin_id    | integer   | not null              | true        |
| created_at  | datetime  | not null              |             |
| updated_at  | datetime  | not null              |             |

* `:admin_id` references `users`
* `:type` (Model level validation: `inclusion: { in: [channel, direct_message] }`

---
### `chatroom_subscriptions`

| column name       | data type | details               | foreign key |
|-------------------|-----------|-----------------------|-------------|
| id                | integer   | not null, primary key |             |
| chatroom_id       | integer   | not null              | true        |
| user_id           | integer   | not null              | true        |
| last_read_message | integer   | not null, indexed     | true        |
| created_at        | datetime  | not null              |             |
| updated_at        | datetime  | not null              |             |

* index on `[:chatroom_id, :user_id], unique: true`
* index on `[:chatroom_id, :user_id, last_read_message]`
* `:user_id` references `users`
* `:chatroom_id` references `chatrooms`
* `:last_read_message` references `messages`

---
### `stars`

| column name    | data type | details               | foreign key |
|----------------|-----------|-----------------------|-------------|
| id             | integer   | not null, primary key |             |
| starrable      | references| polymorphic, indexed  | true        |
| user_id        | integer   | not null              | true        |
| created_at     | datetime  | not null              |             |
| updated_at     | datetime  | not null              |             |

* index on `[:user_id, :starrable_id, :starrable_type], unique: true`
* `:user_id` references `users`
* `:starrable` references either `messages` or `chatrooms`

---

###`pinned_messages`

| column name | data type | details               | foreign key |
|-------------|-----------|-----------------------|-------------|
| id          | integer   | not null, primary key |             |
| chatroom_id | integer   | not null              | true        |
| message_id  | integer   | not null              | true        |
| created_at  | datetime  | not null              |             |
| updated_at  | datetime  | not null              |             |

* index on `[:chatroom_id, :message_id], unique: true`
* `:message_id` references `messages`
* `:chatroom_id` references `chatrooms`

---

### `reactions`

| column name | data type | details               | foreign key |
|-------------|-----------|-----------------------|-------------|
| id          | integer   | not null, primary key |             |
| emoji_id    | text      | not null              | true        |
| message_id  | integer   | not null              | true        |
| user_id     | integer   | not null              | true        |
| created_at  | datetime  | not null              |             |
| updated_at  | datetime  | not null              |             |

* index on `[:message_id, :user_id, emoji_id], unique: true`
* `:user_id` references `users`
* `:message_id` references `messages`
* `:emoji_id` references `emojis`

---

### `emojis`

| column name | data type | details               | foreign key |
|-------------|-----------|-----------------------|-------------|
| id          | integer   | not null, primary key |             |
| title       | text      | not null              |             |
| emoji       | text      | not null              |             |
| created_at  | datetime  | not null              |             |
| updated_at  | datetime  | not null              |             |

---
