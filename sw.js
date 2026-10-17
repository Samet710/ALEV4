const CACHE_NAME = 'alev-serisi-ultimate-v19-effects';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
const THEMES = ['blue','orange','red','white','purple','emerald','gold','pink','turquoise','lime'];
const MEDIA = [
  ...THEMES.flatMap(theme => [`./flame-${theme}.webp`, `./flame-${theme}-poster.webp`]),
  './burst-blue-a.webp','./burst-blue-b.webp','./milestone-blue.webp','./legendary-blue.webp',
  './sfx-ignite.wav',
  './sfx-daily-1.wav','./sfx-daily-2.wav','./sfx-daily-3.wav','./sfx-daily-4.wav',
  './sfx-color-1.wav','./sfx-color-2.wav','./sfx-color-3.wav',
  './sfx-legendary-1.wav','./sfx-legendary-2.wav','./sfx-legendary-3.wav'
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE.map(p => new URL(p, self.registration.scope).href));
    // Cache core flames and sounds in small batches. Other pre-rendered effects are cached when prewarmed.
    for (let i=0; i<MEDIA.length; i+=4) {
      await Promise.all(MEDIA.slice(i,i+4).map(async p => {
        const url=new URL(p,self.registration.scope).href;
        try { const r=await fetch(url,{cache:'no-cache'}); if(r.ok) await cache.put(url,r); } catch {}
      }));
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('alev-serisi-')&&k!==CACHE_NAME).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req=event.request; if(req.method!=='GET') return;
  const url=new URL(req.url); if(url.origin!==self.location.origin) return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME); const cached=await cache.match(req); if(cached) return cached;
    try {
      const response=await fetch(req);
      if(response.ok) cache.put(req,response.clone()).catch(()=>{});
      return response;
    } catch {
      if(req.mode==='navigate') return (await cache.match(new URL('./index.html',self.registration.scope).href))||new Response('Uygulama çevrimdışı ve önbellek hazır değil.',{status:503});
      return new Response('',{status:504,statusText:'Offline asset unavailable'});
    }
  })());
});
