# API-DOCS

This repository publishes a Swagger instance to GitHub pages that can be accessed through https://devseed.com/api-docs. It enables multiple Development Seed projects to use it to visualize its API-Docs.

# How to use it

Access `https://devseed.com/api-docs?url={your api schema url}`, example: https://devseed.com/api-docs/?url=https://api.bioacoustics.ds.io/api/v1/openapi.

You can include it in the project application/website by using an `iframe`:

```
  <iframe
    title="api-docs"
    src="https://devseed.com/api-docs?url={your api schema url}"
  />
```

If CORS is enabled on the API, it's necessary to allow requests from `https://devseed.com/api-docs`.
