# ria-book-store-app

![2123123](https://user-images.githubusercontent.com/32410574/121790421-e8e2e580-cbe7-11eb-8961-d952c54c38ff.jpg)


## Quickstart

```
$ npm start
$ npm run build
```

# Dev notes

Well, it was fun, in the end, I don't have enough time to finish it properly.
You can't have quality, quantity and cheap labor at the same time:)

- Using a predefined scafolding app (ex react-create-app) would reduce ~1.5 hours
- Using bootstrap/material ui/tailwindcss would reduce time needed to build UI components in half or more
- I would've focus more on functionality rather then UI. I guess I'll do it next time:)
- I would've finish day/night theme, it should be ez, just pass the props to [withTheme](https://github.com/one-thunder/ria-book-store-app/blob/main/src/core/hocs/withRiaTheme.tsx) hoc and add a toggle
- I wouldv'e use redux to handle inter-component communication
- I wouldv'e created a service wrapper around that uri I fetched books from and used the power of elasic search to properly implement debounced data fetching
- Some components where rushed, therefore bugs might be a real deal, the whole app does not feel polished.
- React-virtualized for grid/list views.
- Typescript is eating time for initial build but can be very benificial when app will be on maintanance
- Modal should be opened either through effects dispatch action or route listener and exist only once per app/per module
