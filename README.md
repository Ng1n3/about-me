# Simple About API

This API returns a few info.

The API is available at `about-me-production-0bfe.up.railway.app`

## Endpoints

- [status](#status)
- [about](#about)

## Requirements
- Node.js 18 or Higher
- Pnpm 

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Ng1n3/about-me.git
```

2. Install dependencies

```bash
pnpm install
```

3. start server

```bash
pnpm run dev
```

## Status

**`GET /healthcheck`**

Returns the status of the API.

Example response:

```
{
  "message": "Server is up an running"
}
```

This indicates that the API is running as expected.

No response or any other response indicates that the API is not functioning correctly.

## About

**`GET /`**

Returns some info about me and this API service.

**Status Code**

| Status Code   | Description                      |
| ------------- | -------------------------------- |
| 200 OK        | Indicates a successful response. |
| 404 Not Found | The Resource is not available.   |

Example response:

```
{
	"email": "youremail@gmail.com",
	"current_datetime": "2025-01-30T00:27:22.097Z",
	"github_url": "https://github.com/Ng1n3/about-me"
}
```

## Tech Stack

- [Nodejs-Developer](https://hng.tech/hire/nodejs-developers)
