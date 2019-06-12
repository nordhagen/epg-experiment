# Notes on decisions and progress

## How to run the project

If you have Node installed, run `npm start` from the repository root and open your web browser at the address provided in the command line readout.

If you don't care to install Node, just cd to the dist directory, run a simple HTTP server and visit the address/port combo in the readout.

```
$ cd dist
$ python -m SimpleHTTPServer
```

If you wish to play with time of day and speed of time in the app you will need to run `npm start`. Play with the constants in src/config.js and observe the effect.

## Tech choices

Given the need to focus on getting up and running quickly I chose to go with the project structure I am most familiar with, which is JavaScript with React+Redux. My previous experience with asynchronous Redux is with the Thunk middleware. However in this instance I will instead use Sagas. I also chose to use Parcel as a build system in the interest of simplicity.

The separation between containers and components will be a hybrid one. Components will be stateless and unaware of the architecture of the rest of the app, whereas the containers will be stateful and connected to the state management system. Where it will differ from accepted best practices is in that containers and their corresponding component rendering code will be put together into one class file.

I will employ CSS Modules with SASS syntax for scoped CSS because I like how CSS modules compartmentalizes things. For CSS preprocessors I actually prefer Stylus, but since it has fallen out of fashion and SASS seems to be the industry standard in React apps I will go with that. As for layout strategies I usually do desktop sizes first because that's the design files that are often ready first. In this instance I think the provided mockups and my strategy makes for a smallest-layout-first approach. ~~I will use CSS Grid for main layout framework, knowing full well that browser support has not hit prime time peak yet. I could do the same layout without it, it's just quicker this way. For the large EPG layout I think FlexBox is the obvious answer.~~ After some trial and error I decided that FlexBox was the obvious answer for all parts of the ui.

I always like to stub out all views in an application right at the start, even if they're all just wireframes, mockups or simple rectangles with the name of the view in them. Then whenever I start work on a single one of these views I like to start with bare, semantic markup first. Then adding styles and lastly adding interactivity and functionality. I think this gives me a nice, visual way of gauging my progress.

Needless to say this code base is going to be more elaborate than needed. I will imagine this as being the start of a fully featured VOD app where the architecture choices would need to take into account the apparent scale of the app in the near future.

I will test the app in the latest versions of Chrome, Safari and Firefox.

## Goals

- Make the main EPG view in both versions to demonstrate how triggering different breakpoints
- Make the programme detail view as just a mockup just to show view switching
- Make the transition between the views animated to show how that would work
- Perform a performance test using Chrome DevTools/JSPerf by simple multiplication of data resulting in increased number of channels/programmes and subsequently increase in DOM nodes

## Nice-to-haves

- Example of testing with Jest
- Horizontal scrolling in the large EPG view
- Horizontal zooming in the large EPG view
- Service Worker to enable offline access

## Plan

- [x] Set up React scaffolding and Parcel build system
- [x] Introduce both views as mockups and simple navigation between them
- [x] Introduce both breakpoints in main EPG view as mockups
- [x] Install Redux and set up a global clock time event dispatcher
- [x] Set up loading of EPG data through Redux Saga
- [x] Use loaded EPG data to render unstyled, semantic markup of the programme list
- [x] Code up the main EPG interface as list view first as it is the simplest
- [x] Apply styling to programme list to make it match mockup, using dummy clock time
- [x] Implement progress bar for programme elements
- [x] Implement large EPG view layout for phablet-ish min-width of 550px
- [ ] Get to the nice-to-haves

## Notes

- Starting out with separation of containers/pages and components
- Using class-based components for now, but will look into converting at least some of them to functional in time
- Implemented simple view switching as string dict key-based view map lookup in App
- Component scaffolding complete. Will switch to feature branching for the rest of planned steps.
- Introduced sass styles. So far not scoped.
- Converted global sass to scoped css modules by introducing the .postcssrc modules config and referencing imported style names from scss files in JSX
- Introduced Redux and Redux Saga. Now has global clock time keeping and loading EPG data with fetch for the main EPG list
- Starting to wonder how the list EPG interface is supposed to work as an EPG interface. It seems to only display the currently playing shows and gives no clues as to how the user would display upcoming or past shows.
- Completed the EPG list view.
- Decided to install moment.js for easier time manipulation and formatting.
- Have been wondering about the star UI element. I suppose it denotes a favourite show, channel or schedule item, but I can't really tell which it is since there is no record of it in the mock data.
- The mock data does not have unique ids for all channels and schedule items, so I had to regenerate their ids upon successful fetch of data. The reason for this is that all those elements nee unique keys in react for the shadow DOM to work its optimization magic.
- Replaced the simple view component switching with a more permanent state managed system for displaying modals from anywhere in the app.
- Introduced ReactTransitionGroup to enable EPGDetailView to transition nicely in and out
- Added the > phablet layout for the EPG. Horizontal scrolling works per channel, which is not the way it's supposed to work.
- Added a slight gradient overlay to EPG items to make them prettier when their titles don't fit in the box.
