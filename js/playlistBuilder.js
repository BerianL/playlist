import songs from './playlist.js';
  
  function getRandomSongs(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  function createListItems(arr) {
    let items = '';
    const songs = getRandomSongs(arr, 5);
    for (let i = 0; i < songs.length; i++) {
      const videoUrl = `https://www.youtube.com/watch?v=${songs[i][3]}`;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const linkAttributes = isMobile
        ? `href="${videoUrl}" target="_blank"`
        : `href="javascript:void(0)" onclick="openVideoPopover('${videoUrl}'); return false;"`;
  
      items += `
        <li class="group/item hover:text-neutral">
          <a ${linkAttributes}>
            <span class="fa-li">
              <i class="fa-brands fa-youtube"></i>
            </span>
            ${songs[i][0]} by ${songs[i][1]} - ${songs[i][2]}
          </a>
        </li>`;
    }
    return items;
  }
  
  window.openVideoPopover = function (videoUrl) {
    const videoId = getYouTubeVideoId(videoUrl);
    const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  
    const popover = document.createElement('div');
    popover.innerHTML = `
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 70%; height: 70%;">
        <iframe width="100%" height="100%" src="${videoEmbedUrl}" frameborder="0" allowfullscreen></iframe>
      </div>
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); z-index: 100;"></div>
    `;
  
    document.body.appendChild(popover);
  
    popover.addEventListener('click', () => {
      document.body.removeChild(popover);
    });
  }
  
  function getYouTubeVideoId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }
  
  document.querySelector('main').innerHTML = `
    <ul class="fa-ul space-y-2"">
      ${createListItems(songs)}
    </ul>
    <button class="btn btn-neutral btn-block mt-8" id="refresh">Refresh</button>
  `;
  
  document.getElementById('refresh').addEventListener('click', () => {
    const listContainer = document.querySelector('ul');
    listContainer.innerHTML = createListItems(songs);
  });
  