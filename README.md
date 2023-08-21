# Playlist Display - Multidimensional Arrays

This repository contains a web application built with JavaScript that displays a playlist of songs using HTML and CSS enhanced by Tailwind CSS and DaisyUI. The project originated from an online course on Treehouse where the initial concept of displaying songs and their details was introduced using a multidimensional array. The project has been extended and improved with modern styling, interactivity, and embedded YouTube video support.

## Multidimensional Arrays
A multidimensional array is an array that contains other arrays as its elements. It's used to organize data in a grid-like structure, where you can access elements using multiple indices to represent rows and columns. In this project, I'm using a multidimensional array to store song details, with each song's information grouped in a sub-array.

We think of a multidimensional array as a table with rows and columns.

To access the song details, I use the following syntax, where the first index represents the row and the second index represents the column:

```javascript 
songs[0][0] // returns "Song Name"
songs[0][1] // returns "Artist"
songs[0][2] // returns "Duration"
songs[0][3] // returns "YouTube ID"
```


## Features

1. **Random Song Display:** The application shows a list of 5 randomly selected songs from a multidimensional array of 50 songs each time the page loads. The song details include the song name, artist, and duration.

2. **Refresh Button:** A "Refresh" button is provided to allow users to generate another set of random songs without having to reload the page.

3. **Embedded YouTube Videos:** On Desktop clicking on a song opens a modal window containing an embedded YouTube video of the song. The modal can be closed by clicking anywhere outside the modal window. As the embedded YouTube video functionality is limited on mobile devices, the modal window is not displayed on mobile devices, instead a regular hyperlink to the YouTube video is provided.

## Technologies Used

- JavaScript
- Tailwind CSS
- DaisyUI
- HTML

## How to Use

1. Open your web browser and navigate to [https://berianlowe.com/playlist](https://berianlowe.com/playlist).
2. You will see a list of 5 random songs displayed along with their details.
3. Click on a song's title to open a modal and watch the embedded YouTube video for that song. Just click anywhere outside the modal to close it.
4. Click the "Refresh" button to load another set of random songs.

## Compatibility

This web application is designed to work on modern web browsers. Ensure that your browser supports the utilized features and libraries.

## Dependencies

This project utilizes the following libraries and technologies:

- Tailwind CSS: [Tailwind CSS](https://tailwindcss.com/)
- DaisyUI: [DaisyUI](https://daisyui.com/)

## Acknowledgments

This project was inspired by a Treehouse course on JavaScript and has been extended and improved with modern styling and interactivity. The initial idea of displaying a playlist using a multidimensional array was expanded upon to include enhanced user interface features and embedded YouTube video support.

Feel free to explore the code and adapt it to your needs. Happy coding!
