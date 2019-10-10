# Notes on decisions and progress

![Screenshot](https://raw.githubusercontent.com/nordhagen/native-candidate-tester/nordhagen/mockups/screenshot-iphone.png)

## How to run the project

If you have Node installed, run `npm start` from the repository root and open your web browser at the address provided in the command line readout.

If you don't care to install Node, just cd to the dist directory, run a simple HTTP server and visit the address/port combo in the readout.

```
$ cd dist
$ python -m SimpleHTTPServer
```

If you wish to play with time of day and speed of time in the app you will need to run `npm start`. Play with the constants in src/config.js and observe the effect.

The interface is responsive in the interval from 320px wide to 768px wide, which generally is the upper limit of phablet layouts.

## Goals

- [x] Make the main EPG view in both versions to demonstrate how triggering different breakpoints
- [x] Make the programme detail view as just a mockup just to show view switching
- [x] Make the transition between the views animated to show how that would work
- [ ] Perform a performance test using Chrome DevTools/JSPerf by simple multiplication of data resulting in increased number of channels/programmes and subsequently increase in DOM nodes

## Nice-to-haves

- [x] Example of testing with Jest
- [ ] Service Worker to enable offline access
- [ ] Horizontal scrolling in the large EPG view
- [ ] Horizontal zooming in the large EPG view

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
- [-] Get to the nice-to-haves

## Play-by-play notes

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
- Finished simple example of react component testing with Jest
- Doing some refatoring, adding PropTypes

## Ending remarks

There are a couple of known issues that I would have preferred to work out:

- There is a bug with the smallest list layout of the EPG. On first render any channel with no current programme will correctly state this, but after the first clock tick the list re-renders displaying the first upcoming show for that channel instead.
- The larger phablet EPG layout is made using my first theories about how to reflow the elements for a larger, horizontal layout. After doing this I realized that properly recreating the layout in the mockups would require nesting the elements in the list differently. That would be a refactoring too big for this exercise and the point of making the larger layout in the first place was to demonstrate a responsive strategy, not to code that interface perfectly. Doing that in a maximum of two days would have left little time for all the rest.
- Larger applications like this should be built with some form of type checking. Preferably I would have built this exercise using TypeScript, but I don't know it well enough to be sure it would not slow me down. I did add PropTypes instead.
- Given the relatively large number of DOM elements, even just for representing the schedules for one day, I think a good optimization strategy would be to only render items that are on-screen or even re-using DOM elements. Especially if the > phablet layout is supposed to be an endless scroll through days past and days to come.
