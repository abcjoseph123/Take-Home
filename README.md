# Timetrack application

---

**INSTALATION INSTRUCTION:**

---

1.)git clone or download as Zip.

1.1) If you are using Zip extract the files using WinRar/7zip or a similar tool.

2.) Open your terminal and change directory to the one where the docker-compose.yml is.

3.) type: "docker-compose up" without "" to start the application.

4.) After the Database is running, run the Postman collection to enter some dummy data.

---

**TIME SPENT:**

I've used all of the 8 hours to work on the application.
I enjoyed the task, sadly I could not finish all the requirements in time.

The backend provides options for a Single user to post his/her time spent working on a certain task,
which can be named in the description. With more time you could expand this adding a Task entity and Users.
You are able to get a visual representation of all submited descriptions with the amount of time they required.
You are also able to search for certain descriptions, this sadly has to be a perfect match in its current iteration.

Adding your time with the stopwatch works, it sadly has some minor quirks like the timer still going, even after submits
(but it resets back to 0), or the clock ticking twice as fast if you press the start button multiple times. All of those could be fixed with some extra time.

My biggest block was with the manual time posting. The time gets posted in seconds to the backend. There are 3 time blocks where you are suppost to add hours, minutes and seconds. But I struggled to convert all the timers to the seconds that are required for the duration. This is where I would have asked for for help in the office since im pretty sure its a minor issues that just cost me alot of time.

I ran out of time so paging this means paging is not implemented and the UI design is maybe not for everyone.

---

**URLS:**

http://localhost:3000/

http://localhost:3000/alltimes

http://localhost:3000/stopwatch

http://localhost:3000/addtime

http://localhost:3000/search

---
