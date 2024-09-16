# ItThink Atoms Library

[Demo] See the Library: [https://atomicreact.github.io/simple-frontend-library/](https://atomicreact.github.io/simple-frontend-library/)

- `src` directory contain all atoms

- `scripts` directory contain helpers scripts to build and serve http web server

- `public` directory contain all library bundled

See `tsconfig.json` to known how enable importing CSS files with visual studio 

## Installing this private library

```shell
cd ~/.ssh
nano config
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```

```shell
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
yarn add ssh://@github.com:ItThinkIoT/frontend-lib-atoms.git
```

## Development

Run development mode

```bash
npm run dev
```

## Build

Build and bundle atoms into public directory.

```bash
npm run build
```

## Visualize

1. Build

2. Start web server and visualize the final project

```bash
npm run start
```

