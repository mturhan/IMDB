const YTAPIKEY = 'AIzaSyCFSHWVorVIU5o-...';

async function getVideo(term: string) {
  const response = await fetch(
    'https://www.googleapis.com/youtube/v3/search?' +
      new URLSearchParams({
        part: 'snippet',
        type: 'video',
        maxResults: '1',
        key: YTAPIKEY,
        q: term,
      }),
  )
    .then(res => res.json())
    .then(res => res.items);
  return response;
}

export {getVideo};
