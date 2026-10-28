# kernv2-next

Exact Next.js App Router port of [kern-v2](https://github.com/vathsavv56/kern-v2).

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- motion, hugeicons, @base-ui/react, react-syntax-highlighter
- Bun package manager and script runner

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
bun run dev        # start dev server
bun run build      # production build
bun run start      # serve production build
bun run typecheck  # tsc --noEmit
bun run lint       # oxlint
```

## Routes

- `/` - landing page
- `/components` - components gallery
- `/labs` - labs
- `/about` - about
- `/v1/kern101` - kern-one component page
- `/v1/kernfile` - kern-file component page
- `/v1/kern-inspiration` - inspiration component page
- `/v1/kern-footer` - footer component page
- `/preview/kern101` - kern-one preview
- `/preview/kernfile` - kern-file preview
- `/preview/kern-inspiration` - inspiration preview
- `/preview/kern-footer` - footer preview

## Vercel

The repo is Vercel-ready. Import the repository, keep the root directory at the repo root, and Vercel will use `bun install` and `bun run build` from `vercel.json`.

Set `NEXT_PUBLIC_SITE_URL` to the production URL if you want canonical and Open Graph URLs to use the deployed domain. It falls back to the original `kern-v2-alpha.vercel.app` URL.
