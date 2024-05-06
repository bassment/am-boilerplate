npx create-nx-workspace@latest
✔ Choose what to create · integrated
✔ What to create in the new workspace · apps
✔ Repository name · access-management
✔ Enable distributed caching to make your CI faster · No

cd access-management

npm install --save-dev @nx/react
npx nx g @nx/react:host am-host --ssr --remotes=landings-mf,authorization-mf,account-mf

nx g @nx/react:library design-system
nx g @nx/react:library shared
nx g @nx/react:library types
