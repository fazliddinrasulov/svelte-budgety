## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## functionalities

1. I've divided components to small component as much as possible by this I can easily maintain and make my project bigger and bigger
2. For icons i've used iconify https://docs.iconify.design/icon-components/svelte/
3. I've used keyed each block to iterate expenses and in svelte sending object with props inside of each block is not alway works as we expect so I've used rest operatorobject by props in each block
4. I've used contextAPI for state management and props for from parent to child data.
5. I haven't used createEventDispatcher because i've chosen to use contextAPI with functions
6. I've used reactivity for calculating total value
7. I've used two way binding for inputs and value coming from parent component. Difference from reactivity we use reactivity to bind statements to variable while we use two way binding to bind input to value.
8. I've used modifiers to DOM events: stopPropagation, once and preventDefault.
9. I've used onMount and await block for HTTP requests, onMount lifecycle is equivalent useEffect with empty dependancy in react. Also there are beforeUdate, afterUpdate and onDestroy lifecycles in svlete
10. I've used localStorage for storing data. Difference between localStorage and sessionStorage is sessionStorage clears data untill you get rid off website while localStorage remembers everything untill you clear storage.
11. I've used slot for modal to read children
12. I've used built-in animations and transition salmost to every component.
