# Netflix GPT

🎬 Netflix-GPT is a React-based streaming app UI clone powered by TMDB API and OpenAI, offering personalized movie recommendations with authentication using Firebase.

- Create React App
- Configured TailwindCSS
- Created Components
- Setup Rounting
- Header
- Login/Sign Up form
- Form Validations
- Deployed project with Firebase https://netflixgpt-1fe73.web.app/
- Sign up/Sign in Authentication using email and password using firebase APIs
- Created Redux Store with userSlice
- Implemeted Sign out
- Implemented Update Profile
- unSubscribe to the onAuthStateChanged callback
- Registered TMDB API & Created TMDB APP and get access token
- Got Data from TMDB now playing movies list API
- Created Movies Slice and added now playing movies to store.
- Fetch data for trailer video
- Update the store with the trailer video data
- Embeded the youtube video and make autoplay and mute
- Created secondary container for browse page - movie list, movie card, custom hooks for diff movie lists
- Refactor: separate routes into public and private, created a centralized routes constants file, modularize auth and Firebase logic
- Refactor: modularize codebase with feature-based folder structure
- Moved related components, hooks, and slices into feature-specific folders

# Features

- Login/SignUp Page
  - after login redirect to browse
- browse

  - header
  - movie trailer
  - title and description
  - movie suggestions

- NextflixGPT
  - Search bar
  - movie suggestions
