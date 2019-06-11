# Notes on decisions and progress

## How to run the project
* If you have Node installed, run ```npm start``` from the repository root and open your web browser at the address provided in the command line readout.


## Tech choices
Given the need to focus on getting up and running quickly I chose to go with the project structure I am most familiar with, which is JavaScript with React+Redux. My previous experience with asynchronous Redux is with the Thunk middleware. However in this instance I will instead use Sagas. I also chose to use Parcel as a build system in the interest of simplicity.

I will employ CSS Modules with SASS syntax for scoped CSS because I like how CSS modules compartmentalizes things. For CSS preprocessors I actually prefer Stylus, but since it has fallen out of fashion and SASS seems to be the industry standard in React apps I will go with that. As for layout strategies I usually do desktop sizes first because that's the design files that are often ready first. In this instance I think the provided mockups and my strategy makes for a smallest-layout-first approach. I will use CSS Grid for main layout framework, knowing full well that browser support has not hit prime time peak yet. I could do the same layout without it, it's just quicker this way. For the large EPG layout I think FlexBox is the obvious answer.

I always like to stub out all views in an application right at the start, even if they're all just wireframes, mockups or simple rectangles with the name of the view in them. Then whenever I start work on a single one of these views I like to start with bare, semantic markup first. Then adding styles and lastly adding interactivity and functionality. I think this gives me a nice, visual way of gauging my progress.

## Goals
* Make the main EPG view in both versions to demonstrate how triggering different breakpoints
* Make the programme detail view as just a mockup just to show view switching
* Make the transition between the views animated to show how that would work
* Perform a performance test using Chrome DevTools/JSPerf by simple multiplication of data resulting in increased number of channels/programmes and subsequently increase in DOM nodes

## Nice-to-haves
* Example of testing with Jest
* Horizontal scrolling in the large EPG view
* Horizontal zooming in the large EPG view
* Service Worker to enable offline access

## Plan
1. [] Set up React scaffolding and Parcel build system
2. [] Introduce both views as mockups and simple navigation between them
3. [] Introduce both breakpoints in main EPG view as mockups
4. [] Install Redux and set up a global clock time event dispatcher
5. [] Set up loading of EPG data through Redux Sagas
6. [] Code up the main EPG interface as list view first as it is the simplest
7. [] Use loaded EPG data to render unstyled, semantic markup of the programme list
8. [] Apply styling to programme list to make it match mockup, using dummy clock time
9. [] Implement progress bar for programme elements
10. [] Implement large EPG view layout for phablet-ish min-width of 550px
11. [] Get to the nice-to-haves