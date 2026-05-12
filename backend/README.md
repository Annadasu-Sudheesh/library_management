# Library Management Backend

Spring Boot REST API for a simple library management system. It supports books, members, and issue/return records using JPA, Hibernate, H2, validation, and Lombok.

## Tech Stack

- Java 17
- Spring Boot 4.0.6
- Spring Web
- Spring Data JPA
- Spring Validation
- H2 in-memory database
- Lombok

## Project Structure

- `src/main/java/com/example/backend/model` - JPA entities
- `src/main/java/com/example/backend/repository` - Spring Data repositories
- `src/main/java/com/example/backend/service` - business logic
- `src/main/java/com/example/backend/controller` - REST endpoints
- `src/main/resources/application.properties` - application and database config
- `src/main/resources/data.sql` - seed data

## Run the Project

From the `backend` folder:

```bash
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

Run tests:

```bash
./mvnw test
```

## Configuration

The app uses an in-memory H2 database with auto-created tables and seed data.

- H2 console: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:librarydb`
- Username: `sa`
- Password: empty

## Seed Data

The application loads these sample records on startup:

- Books: `Clean Code`, `Effective Java`, `Design Patterns`
- Members: `Alice Example`, `Bob Example`

## API Endpoints

### Books

- `POST /api/books` - create a book
- `GET /api/books` - list all books
- `GET /api/books/{id}` - get book by id
- `PUT /api/books/{id}` - update book
- `DELETE /api/books/{id}` - delete book
- `GET /api/books/available` - list available books
- `GET /api/books/search/title?title=...` - search by title
- `GET /api/books/search/author?author=...` - search by author

### Members

- `POST /api/members` - register a member
- `GET /api/members` - list all members
- `GET /api/members/{id}` - get member by id
- `PUT /api/members/{id}` - update member
- `DELETE /api/members/{id}` - delete member

### Issue Records

- `POST /api/issues/issue/{bookId}/{memberId}` - issue a book
- `POST /api/issues/return/{issueId}` - return a book
- `PUT /api/issues/return/{issueId}` - return a book
- `GET /api/issues` - list all issue records
- `GET /api/issues/{id}` - get issue record by id
- `GET /api/issues/member/{memberId}` - get all issue records for a member
- `DELETE /api/issues/{id}` - delete an issue record

## Business Rules

- A book must be available before it can be issued.
- A member can have at most 3 active issues at a time.
- Returning a book marks the related book as available again.

## Sample Requests

Create a book:

```bash
curl -X POST http://localhost:8080/api/books \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"My Book\",\"author\":\"An Author\"}"
```

List books:

```bash
curl http://localhost:8080/api/books
```

Register a member:

```bash
curl -X POST http://localhost:8080/api/members \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\"}"
```

Issue a book:

```bash
curl -X POST http://localhost:8080/api/issues/issue/1/1
```

Return a book:

```bash
curl -X PUT http://localhost:8080/api/issues/return/1
```

List issues for a member:

```bash
curl http://localhost:8080/api/issues/member/1
```
