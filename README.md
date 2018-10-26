## Candidate-Tester
This Repo is intended to instruct new Native developer candidates on the steps to follow for completing the Norigin Media testing task.

---

#### What we want to assess:

* Your coding skills.
* Intuition for design & UX.
* Multi Screen / Cross Browser allocations.
* Platform, Framework & Tooling knowledge.
* Project structure & production readiness.

#### Requirements :

 * Build a single screen application (**EPG Screen**) using your choice of framework / tooling no restrictions apply.
 * Use the designs in the `./mockups` folder to guide your work.
 * Use **Mock-Api** package included to supply the EPG data. See `package.json`.
 * Task is not expected to take too long, please include a description of the work and how long it took.

#### Cool to have (But not required and wont negatively impact assessment):

* Add more interactions, animations or just nail the UX.
* Responsive layouts for multi-screen support.
* Make performance and optimization considerations.
* Additional screens using additional JSON in the mock data folder.
* Additional EPG showing an alternative layout.


---
### Design Example:

We have included some mockup designs to act as a guide. You can find them in the `./mockups` folder.

Example EPG design:

![alt text](https://raw.githubusercontent.com/Norigin/native-candidate-tester/master/mockups/epg_smaller.png "Logo Title Text 1")



NOTE: Additional screens are optional and only if you really want to impress us with your skillz (Yes.. with a Z) should you add them to your app.

---
### Mock-Data:

We have provided some mock JSON data to supply EPG data for this task.

EPG Data can be found here `./mock-data/epg.json` this file contains lists of channels and programs to render the main EPG list. Program timestamps may need ot be adjusted or handled to be relative.

Additional program / schedule data is also available for rendering of additional screens if needed.


---
